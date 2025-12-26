import { Platform, Alert, Linking, NativeModules } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import * as Notifications from 'expo-notifications';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import app from '../config/FireBaseConfig';

Notifications.setNotificationHandler({
  handleNotification: async () => {
    console.log('NotificationHandler: Expo notification handler called');
    return {
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    };
  },
});

class NotificationHandler {
  constructor() {
    this.initialized = false;
    this.navigationRef = null;
  }

  setNavigationRef(ref) {
    this.navigationRef = ref;
  }

  async initialize() {
    if (this.initialized) {
      console.log('NotificationHandler: Already initialized, skipping...');
      return;
    }

    try {
      console.log('NotificationHandler: Starting initialization...');
      await this.requestPermissions();

      await this.createNotificationChannel();

      this.setupForegroundMessageHandler();
      this.setupNotificationOpenedHandlers();
      this.setupExpoNotificationHandlers();

      this.initialized = true;
      console.log('NotificationHandler: ✅ Initialized successfully');

      console.log('NotificationHandler: Testing message handler registration...');
      console.log('NotificationHandler: onMessage handler should be active now');

    } catch (error) {
      console.error('NotificationHandler: ❌ Error initializing:', error);
      console.error('NotificationHandler: Error stack:', error.stack);
    }
  }

  async requestPermissions() {
    try {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (!enabled) {
        console.log('NotificationHandler: FCM permission denied');
        return false;
      }

      if (Notifications && typeof Notifications.requestPermissionsAsync === 'function') {
        const { status } = await Notifications.requestPermissionsAsync();

        if (status !== 'granted') {
          console.log('NotificationHandler: Expo notification permission denied');
          return false;
        }
      }

      console.log('NotificationHandler: Permissions granted');
      return true;

    } catch (error) {
      console.error('NotificationHandler: Error requesting permissions:', error);
      return false;
    }
  }

  setupForegroundMessageHandler() {
    try {
      console.log('NotificationHandler: Setting up foreground message handler...');

      if (this.foregroundUnsubscribe) {
        console.log('NotificationHandler: Removing existing foreground handler...');
        this.foregroundUnsubscribe();
        this.foregroundUnsubscribe = null;
      }

      console.log('NotificationHandler: Registering onMessage handler...');
      this.foregroundUnsubscribe = messaging().onMessage(async (remoteMessage) => {
        console.log('🔔🔔🔔 NotificationHandler: Foreground message received! 🔔🔔🔔');
        console.log('🔔 NotificationHandler: Message ID:', remoteMessage?.messageId);
        console.log('🔔 NotificationHandler: Has notification:', !!remoteMessage?.notification);
        console.log('🔔 NotificationHandler: Has data:', !!remoteMessage?.data);
        console.log('🔔 NotificationHandler: Full message:', JSON.stringify(remoteMessage, null, 2));
        
        const notificationTitle = remoteMessage?.notification?.title || remoteMessage?.data?.title;
        const notificationBody = remoteMessage?.notification?.body || remoteMessage?.data?.body;
        
        console.log('🔔 NotificationHandler: Title:', notificationTitle);
        console.log('🔔 NotificationHandler: Body:', notificationBody);
        
        if (remoteMessage?.data) {
          console.log('🔔 NotificationHandler: Data payload:', JSON.stringify(remoteMessage.data, null, 2));
        }
  
        const shouldShow = remoteMessage?.data?.showNotification === "true" || !!remoteMessage?.notification;
        
        if (shouldShow) {
          console.log('🔔 NotificationHandler: Calling showLocalNotification...');

          try {
            await this.showLocalNotification(remoteMessage);
            console.log('🔔 NotificationHandler: ✅ showLocalNotification completed');

          } catch (showError) {
            console.error('🔔 NotificationHandler: ❌ Error in showLocalNotification:', showError);
            console.error('🔔 NotificationHandler: Error stack:', showError.stack);
          }

        } else {
          console.log('🔔 NotificationHandler: Skipping notification display (showNotification flag not set)');
        }

        try {
          await this.saveNotificationToFirestore(remoteMessage);

        } catch (saveError) {
          console.log('NotificationHandler: Could not save to Firestore (non-critical):', saveError.message);
        }
      });
      
      console.log('NotificationHandler: ✅ Foreground message handler set up successfully');
      console.log('NotificationHandler: Handler is now listening for messages...');
      console.log('NotificationHandler: onMessage handler registered:', !!this.foregroundUnsubscribe);

      if (!this.foregroundUnsubscribe) {
        console.error('NotificationHandler: ⚠️ WARNING - onMessage handler returned null!');
      }
      
    } catch (error) {
      console.error('NotificationHandler: ❌ Error setting up foreground message handler:', error);
      console.error('NotificationHandler: Error stack:', error.stack);
    }
  }

  setupNotificationOpenedHandlers() {
    try {
      messaging().onNotificationOpenedApp((remoteMessage) => {
        console.log('NotificationHandler: Notification opened app:', remoteMessage);
        this.handleNotificationNavigation(remoteMessage);
      });

      messaging()
        .getInitialNotification()
        .then((remoteMessage) => {
          if (remoteMessage) {
            console.log('NotificationHandler: App opened from notification:', remoteMessage);
            this.handleNotificationNavigation(remoteMessage);
          }
        });

    } catch (error) {
      console.error('NotificationHandler: Error setting up notification opened handlers:', error);
    }
  }


  async showLocalNotification(remoteMessage) {
    try {
      console.log('NotificationHandler: showLocalNotification called with:', JSON.stringify(remoteMessage, null, 2));
      
      const { notification, data } = remoteMessage;
      
      const title = notification?.title || data?.title || 'New Notification';
      const body = notification?.body || data?.body || data?.message || 'You have a new message';
      
      console.log('NotificationHandler: 📱 Showing notification:', title, body);
      console.log('NotificationHandler: Notification data:', JSON.stringify(data, null, 2));
      
      let parsedData = data || {};
      if (typeof data === 'object' && data !== null) {
        parsedData = {};
        Object.keys(data).forEach(key => {
          try {
            if (typeof data[key] === 'string' && (data[key].startsWith('{') || data[key].startsWith('['))) {
              parsedData[key] = JSON.parse(data[key]);

            } else {
              parsedData[key] = data[key];
            }

          } catch {
            parsedData[key] = data[key];
          }
        });
      }

      const notificationId = await Notifications.scheduleNotificationAsync({
        content: {
          title: title,
          body: body,
          data: parsedData,
          sound: true,
          priority: Notifications.AndroidNotificationPriority.HIGH,
        },
        trigger: null,
      });
      
      console.log('NotificationHandler: ✅ Notification displayed successfully with ID:', notificationId);

    } catch (error) {
      console.error('NotificationHandler: ❌ Error showing local notification:', error);
      console.error('NotificationHandler: Error stack:', error.stack);

      if (remoteMessage?.notification || remoteMessage?.data) {
        try {
          const title = remoteMessage.notification?.title || remoteMessage.data?.title || 'Notification';
          const body = remoteMessage.notification?.body || remoteMessage.data?.body || remoteMessage.data?.message || 'You have a new message';
          
          console.log('NotificationHandler: Using Alert fallback:', title, body);
          Alert.alert(
            title,
            body,
            [{ text: 'OK' }]
          );
        } catch (fallbackError) {
          console.error('NotificationHandler: Fallback Alert also failed:', fallbackError);
        }
      }
    }
  }

  async saveNotificationToFirestore(remoteMessage) {
    try {
      const { notification, data } = remoteMessage;
      
      if (!notification) return;
      
      try {
        const db = getFirestore(app);
        const notificationData = {
          title: notification.title || 'New Notification',
          body: notification.body || 'You have a new message',
          data: data || {},
          timestamp: serverTimestamp(),
          type: data?.type || 'general',
          read: false,
          source: 'fcm',
        };

        await addDoc(collection(db, 'allNotifications'), notificationData);

        if (data?.userId) {
          await addDoc(collection(db, 'accounts', data.userId, 'userNotifications'), notificationData);
        }

        console.log('NotificationHandler: Notification saved to Firestore');

      } catch (firestoreError) {
        console.log('NotificationHandler: Could not save to Firestore (likely security rules) - this is OK, backend handles storage');
      }

    } catch (error) {
      console.log('NotificationHandler: Skipping Firestore save (permissions or rules)');
    }
  }

  handleNotificationNavigation(remoteMessage) {
    const { data } = remoteMessage;
    
    if (!data || !this.navigationRef) return;

    setTimeout(() => {
      try {
        switch (data.type) {
          case 'request_approved':
            this.navigationRef.navigate('OrdersScreen');
            break;

          case 'new_request':
            this.navigationRef.navigate('PendingRequestScreen');
            break;

          case 'request_rejected':
            this.navigationRef.navigate('OrdersScreen');
            break;

          case 'inventory_update':
            this.navigationRef.navigate('InventoryStocks');
            break;

          case 'capex_approved':
            this.navigationRef.navigate('CapexRequestScreen');
            break;

          case 'capex_rejected':
            this.navigationRef.navigate('CapexRequestScreen');
            break;

          default:
            this.navigationRef.navigate('Notifications');
            break;
        }

      } catch (error) {
        console.error('NotificationHandler: Error navigating:', error);
      }
    }, 1000);
  }

  setupExpoNotificationHandlers() {
    try {
      // Handle notification received in foreground
      Notifications.addNotificationReceivedListener((notification) => {
        console.log('NotificationHandler: Expo notification received:', notification);
      });

      // Handle notification response (when user taps notification)
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log('NotificationHandler: Expo notification response:', response);
        this.handleExpoNotificationResponse(response);
      });
    } catch (error) {
      console.error('NotificationHandler: Error setting up Expo notification handlers:', error);
    }
  }

  handleExpoNotificationResponse(response) {
    const { notification } = response;
    const data = notification.request.content.data;
    
    if (data) {
      this.handleNotificationNavigation({ data });
    }
  }

  async createNotificationChannel() {
    if (Platform.OS === 'android') {
      try {
        await Notifications.setNotificationChannelAsync('default', {
          name: 'Default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        });

        await Notifications.setNotificationChannelAsync('requests', {
          name: 'Request Notifications',
          importance: Notifications.AndroidImportance.HIGH,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        });

        await Notifications.setNotificationChannelAsync('inventory', {
          name: 'Inventory Notifications',
          importance: Notifications.AndroidImportance.HIGH,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        });

        console.log('NotificationHandler: ✅ Notification channels created');
      } catch (error) {
        console.error('NotificationHandler: Error creating notification channels:', error);
      }
    }
  }

  async sendTestNotification(title, body, data = {}) {
    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title,
          body,
          data,
          sound: true,
        },
        trigger: null,
      });
      console.log('NotificationHandler: ✅ Test notification sent');
    } catch (error) {
      console.error('NotificationHandler: Error sending test notification:', error);
    }
  }

  async getPermissionsStatus() {
    try {
      let fcmStatus = false;
      let expoStatus = { status: 'denied' };
      
      fcmStatus = await messaging().hasPermission();
      fcmStatus = fcmStatus === messaging.AuthorizationStatus.AUTHORIZED;
      
      if (Notifications && typeof Notifications.getPermissionsAsync === 'function') {
        expoStatus = await Notifications.getPermissionsAsync();
      }
      
      return {
        fcm: fcmStatus,
        expo: expoStatus.status === 'granted',
      };

    } catch (error) {
      console.error('NotificationHandler: Error getting permissions status:', error);
      return { fcm: false, expo: false };
    }
  }

  // async testHandler() {
  //   console.log('NotificationHandler: Testing handler registration...');
  //   console.log('NotificationHandler: Initialized:', this.initialized);
  //   console.log('NotificationHandler: Foreground unsubscribe exists:', !!this.foregroundUnsubscribe);
    
  //   try {
  //     await Notifications.scheduleNotificationAsync({
  //       content: {
  //         title: 'Test Handler',
  //         body: 'If you see this, expo-notifications is working',
  //         data: { test: true },
  //       },
  //       trigger: null,
  //     });
  //     console.log('NotificationHandler: ✅ Test notification sent via expo-notifications');
  //   } catch (error) {
  //     console.error('NotificationHandler: ❌ Test notification failed:', error);
  //   }
  // }
}

const notificationHandler = new NotificationHandler();

export default notificationHandler;
