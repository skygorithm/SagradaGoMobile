import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Image
} from 'react-native';
import styles from '../../styles/users/DonationsStyle';
import CustomNavbar from '../../customs/CustomNavbar';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function DonationsScreen({ user, onNavigate }) {
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [amount, setAmount] = useState('');
  const [intercession, setIntercession] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const recentDonations = [
    { id: 1, amount: 500, method: "GCash", date: "Oct 12, 2025" },
    { id: 2, amount: 1000, method: "Cash", date: "Nov 02, 2025" },
    { id: 3, amount: 1000, method: "GCash", date: "Dec 01, 2025" },
  ];

  const paymentMethods = ['GCash', 'Cash', 'In Kind'];

  const handleConfirmDonation = () => {
    if (!amount || !paymentMethod) {
      Alert.alert('Error', 'Please enter amount and select payment method');
      return;
    }

    Alert.alert('Success', 'Donation submitted successfully!', [
      {
        text: 'OK',
        onPress: () => {
          setShowDonationModal(false);
          setAmount('');
          setIntercession('');
          setPaymentMethod('');
        },
      },
    ]);
  };

  const handleCloseModal = () => {
    setShowDonationModal(false);
    setAmount('');
    setIntercession('');
    setPaymentMethod('');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>

        {/* HEADER */}
        <View style={styles.header}>
          <Image
            source={require('../../assets/sagrada.png')}
            style={{ width: 60, height: 60, alignSelf: 'center' }}
            resizeMode="contain"
          />
          <View>
            <Text style={styles.title}>Donations</Text>
            <Text style={styles.subtitle}>Make a donation to support our cause.</Text>
          </View>
        </View>

        {/* SUMMARY SECTION */}
        <View style={styles.summaryBox}>
          <View style={styles.summaryBar} />
          <Text style={styles.summaryLabel}>You have donated a total of:</Text>
          <Text style={styles.summaryAmount}>PHP 2,500.00</Text>
        </View>

        {/* RECENT DONATIONS */}
        <Text style={styles.sectionTitle}>Your Donation History</Text>
        <View style={styles.historyContainer}>
          {recentDonations.map((item) => (
            <View key={item.id} style={styles.historyItemWrapper}>
              <View style={styles.historyItemRow}>
                <View style={styles.historyItemColor} />
                <View style={styles.historyItemContent}>
                  <Text style={styles.historyAmount}>PHP {item.amount.toFixed(2)}</Text>
                  <Text style={styles.historyMethod}>{item.method}</Text>
                  <View style={styles.historyDateRow}>
                    <Ionicons name="calendar-outline" size={14} color="#999" style={{ marginRight: 4 }} />
                    <Text style={styles.historyDate}>{item.date}</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* DONATE BUTTON */}
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.donateButton}
            onPress={() => setShowDonationModal(true)}
          >
            <Text style={styles.donateButtonText}>Make a Donation</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* DONATION MODAL */}
      <Modal
        visible={showDonationModal}
        transparent
        animationType="slide"
        onRequestClose={handleCloseModal}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.modalOverlay}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Make a Donation</Text>

            <TextInput
              style={styles.modalInput}
              placeholder="Enter Amount"
              placeholderTextColor="#999"
              value={amount}
              onChangeText={setAmount}
              keyboardType="numeric"
            />

            <TextInput
              style={[styles.modalInput, styles.modalInputMultiline]}
              placeholder="Donation Intercession (Optional)"
              placeholderTextColor="#999"
              value={intercession}
              onChangeText={setIntercession}
              multiline
              numberOfLines={2}
              textAlignVertical="top"
            />

            <View style={styles.paymentMethodContainer}>
              {paymentMethods.map((method) => (
                <TouchableOpacity
                  key={method}
                  style={[
                    styles.paymentMethodOption,
                    paymentMethod === method && styles.paymentMethodOptionSelected,
                  ]}
                  onPress={() => setPaymentMethod(method)}
                >
                  <Text
                    style={[
                      styles.paymentMethodText,
                      paymentMethod === method && styles.paymentMethodTextSelected,
                    ]}
                  >
                    {method}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={handleCloseModal}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.confirmButton]}
                onPress={handleConfirmDonation}
              >
                <Text style={styles.confirmButtonText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>

      <CustomNavbar currentScreen="DonationsScreen" onNavigate={onNavigate} />
    </View>
  );
}
