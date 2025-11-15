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
} from 'react-native';
import styles from '../../styles/users/DonationsStyle';
import CustomNavbar from '../../customs/CustomNavbar';

export default function DonationsScreen({ user, onNavigate }) {
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [amount, setAmount] = useState('');
  const [intercession, setIntercession] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

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
        <View style={styles.header}>
          <Text style={styles.title}>Donations</Text>
          <Text style={styles.subtitle}>Make a donation to support our cause</Text>
        </View>

        <View style={styles.content}>
          <TouchableOpacity
            style={styles.donateButton}
            onPress={() => setShowDonationModal(true)}
          >
            <Text style={styles.donateButtonText}>Make a Donation</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal
        visible={showDonationModal}
        transparent={true}
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

      <CustomNavbar
        currentScreen="DonationsScreen"
        onNavigate={onNavigate}
      />
    </View>
  );
}

