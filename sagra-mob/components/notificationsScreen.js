import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/notificationStyle';
import CustomNavbar from '../customs/CustomNavbar';
import { Ionicons } from '@expo/vector-icons';

export default function NotificationsScreen({ user, onNavigate }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Notifications</Text>
          <Text style={styles.subtitle}>Stay updated with your latest notifications</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.contentText}>
            Notifications will be displayed here.
          </Text>
        </View>
      </ScrollView>

      <CustomNavbar
        currentScreen="NotificationsScreen"
        onNavigate={onNavigate}
      />
    </View>
  );
}

