import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { auth } from '../config/FireBaseConfig';
import { sendPasswordResetEmail } from 'firebase/auth';
import { API_BASE_URL } from '../config/API';
import styles from '../styles/LoginStyle';

export default function ForgotPasswordModal({ visible, onClose }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async () => {
    if (!email.trim()) {
      Alert.alert('Error', 'Please enter your email address');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    setLoading(true);
    try {
      console.log('Checking if email exists:', email.trim());
      const checkResponse = await fetch(`${API_BASE_URL}/checkEmail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
        }),
      });

      const checkData = await checkResponse.json();

      if (!checkData.exists) {
        Alert.alert('Error', 'No account found with this email address. Please check your email and try again.');
        setLoading(false);
        return;
      }

      console.log('Email exists, sending password reset email...');
      await sendPasswordResetEmail(auth, email.trim());
    
      
      Alert.alert(
        'Success', 
        'Password reset email has been sent! Please check your inbox and spam folder for instructions to reset your password.\n\n⚠️ Note: After resetting your password, you may need to wait a few minutes for the system to sync, or contact support if login issues persist.',
        [
          {
            text: 'OK',
            onPress: () => {
              setEmail('');
              onClose();
            },
          },
        ]
      );

    } catch (error) {
      console.error('Forgot password error:', error);
      
      let errorMessage = 'Failed to send password reset email. Please try again.';

      if (error.message && error.message.includes('Network request failed')) {
        errorMessage = 'Network error. Please check your connection and try again.';

      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Invalid email address. Please check and try again.';

      } else if (error.code === 'auth/too-many-requests') {
        errorMessage = 'Too many requests. Please try again later.';

      } else if (error.message) {
        errorMessage = error.message;
      }
      
      Alert.alert('Error', errorMessage);
      
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (!loading) {
      setEmail('');
      onClose();
    }
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={handleClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.modalOverlay}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Forgot Password</Text>
          <Text style={styles.modalSubtitle}>
            Enter your email address and we'll send you instructions to reset your password.
          </Text>

          <TextInput
            style={styles.modalInputs}
            placeholder="Email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            editable={!loading}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.modalButton, styles.cancelButton]}
              onPress={handleClose}
              disabled={loading}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.modalButton, styles.submitButton, loading && styles.buttonDisabled]}
              onPress={handleForgotPassword}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.submitButtonText}>Send</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

