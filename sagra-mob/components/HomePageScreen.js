import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import styles from '../styles/HomePageStyle';
import CustomNavbar from '../customs/CustomNavbar';
import { Ionicons } from '@expo/vector-icons';

export default function HomePageScreen({ user, onLogout, onNavigate }) {
  const [selectedSection, setSelectedSection] = useState('Quick Access');

  const shortcuts = [
    {
      id: 'donation',
      title: 'Donation',
      description: 'Make a donation',
      screen: 'DonationsScreen',
      color: '#FF6B6B',
    },
    {
      id: 'announcement',
      title: 'Announcement',
      description: 'View announcements',
      screen: 'AnnouncementsScreen',
      color: '#4ECDC4',
    },
    {
      id: 'virtualtour',
      title: 'Virtual Tour',
      description: 'Explore virtually',
      screen: 'VirtualTourScreen',
      color: '#95E1D3',
    },
  ];

  const upcomingEvents = [
    {
      id: 'event1',
      title: 'Community Cleanup',
      date: 'Nov 20, 2025',
      description: 'Join us for a community cleanup event.',
    },
    {
      id: 'event2',
      title: 'Fundraising Gala',
      date: 'Dec 5, 2025',
      description: 'Attend our annual fundraising gala.',
    },
  ];

  const handleShortcutPress = (screen) => {
    if (onNavigate) onNavigate(screen);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>

        <View style={styles.header}>
          {user && (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
              <Image
                source={user.profilePicture ? { uri: user.profilePicture } : require('../assets/defaultpfp.jpg')}
                style={{ width: 35, height: 35, borderRadius: 25, marginRight: 15 }}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.userName}>
                  Welcome back, {user.first_name}!
                </Text>
                <Text style={styles.appName}>SagradaGo</Text>
              </View>
            </View>
          )}
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20, marginBottom: 20, gap: 10 }}
        >
          <TouchableOpacity
            style={[styles.sectionButton, selectedSection === 'Quick Access' && styles.activeSectionButton]}
            onPress={() => setSelectedSection('Quick Access')}
          >
            <Ionicons
              name="flash-outline"
              size={20}
              color={selectedSection === 'Quick Access' ? '#fff' : '#424242'}
              style={{ marginRight: 8 }}
            />
            <Text style={[styles.sectionButtonText, selectedSection === 'Quick Access' && { color: '#fff' }]}>
              Quick Access
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.sectionButton, selectedSection === 'Upcoming Events' && styles.activeSectionButton]}
            onPress={() => setSelectedSection('Upcoming Events')}
          >
            <Ionicons
              name="calendar-outline"
              size={20}
              color={selectedSection === 'Upcoming Events' ? '#fff' : '#424242'}
              style={{ marginRight: 8 }}
            />
            <Text style={[styles.sectionButtonText, selectedSection === 'Upcoming Events' && { color: '#fff' }]}>
              Upcoming Events
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.sectionButton, selectedSection === 'Upcoming Events' && styles.activeSectionButton]}
            onPress={() => setSelectedSection('Upcoming Events')}
          >
            <Ionicons
              name="calendar-outline"
              size={20}
              color={selectedSection === 'Upcoming Events' ? '#fff' : '#424242'}
              style={{ marginRight: 8 }}
            />
            <Text style={[styles.sectionButtonText, selectedSection === 'Upcoming Events' && { color: '#fff' }]}>
              Upcoming Events
            </Text>
          </TouchableOpacity>
        </ScrollView>


        {/* Render Section Content */}
        {selectedSection === 'Quick Access' && (
          <View style={styles.shortcutsContainer}>
            <Text style={styles.sectionTitle}>Quick Access</Text>
            <View style={styles.shortcutsGrid}>
              {shortcuts.map((shortcut) => (
                <TouchableOpacity
                  key={shortcut.id}
                  style={[styles.shortcutCard, { borderLeftColor: shortcut.color }]}
                  onPress={() => handleShortcutPress(shortcut.screen)}
                >
                  <View style={[styles.shortcutIcon, { backgroundColor: shortcut.color }]}>
                    <Text style={styles.shortcutIconText}>{shortcut.title.charAt(0)}</Text>
                  </View>
                  <Text style={styles.shortcutTitle}>{shortcut.title}</Text>
                  <Text style={styles.shortcutDescription}>{shortcut.description}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {selectedSection === 'Upcoming Events' && (
          <View style={styles.shortcutsContainer}>
            <Text style={styles.sectionTitle}>Upcoming Events</Text>
            {upcomingEvents.map((event) => (
              <View key={event.id} style={styles.eventCard}>
                <Text style={styles.eventTitle}>{event.title}</Text>
                <Text style={styles.eventDate}>{event.date}</Text>
                <Text style={styles.eventDescription}>{event.description}</Text>
              </View>
            ))}
          </View>
        )}

      </ScrollView>

      <CustomNavbar
        currentScreen="HomePageScreen"
        onNavigate={onNavigate}
      />

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => handleShortcutPress('ChatBotScreen')}
      >
        <Ionicons name="chatbubble-ellipses-outline" size={24} color="#424242" />
      </TouchableOpacity>

    </View>
  );
}
