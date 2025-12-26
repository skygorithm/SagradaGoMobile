import { registerRootComponent } from 'expo';
import messaging from '@react-native-firebase/messaging';
import * as Notifications from 'expo-notifications';

import App from './App';

// Register background message handler - MUST be at top level before app registration
messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log('🔔 Background message received:', remoteMessage);
  console.log('🔔 Background message ID:', remoteMessage?.messageId);
  console.log('🔔 Background message data:', JSON.stringify(remoteMessage, null, 2));
  // Background notifications with notification payload are automatically displayed by FCM
  // This handler is mainly for data-only messages or additional processing
});

// NOTE: onMessage handler is set up in NotificationHandler.js
// DO NOT set it here - React Native Firebase only allows ONE onMessage handler
// Having multiple handlers causes conflicts and messages may not be received

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
