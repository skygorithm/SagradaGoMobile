import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Image,
  Modal
} from 'react-native';
import styles from '../styles/LoginStyle';
import ForgotPasswordModal from './ForgotPasswordModal';
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from '../contexts/AuthContext';

export default function LoginScreen({ onLoginSuccess, onSwitchToSignUp, onBack }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const { login, loading } = useAuth();

  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Conntected to MongoDB Atlas - temporarily disabled for testing
  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      // Alert.alert('Error', 'Please enter both email and password');
      setErrorMessage('Please enter both email and password. Thank you!');
      setErrorModalVisible(true);
      return;
    }

    const result = await login(email, password);

    if (result.success) {
      setEmail('');
      setPassword('');
      if (onLoginSuccess) {
        onLoginSuccess(result.user);
      }

    } else {
      // Alert.alert('Login Failed', result.message || 'Invalid email or password');
      setErrorMessage(result.message || 'Invalid email or password.');
      setErrorModalVisible(true);
    }
  };

  // Testing
  // const handleLogin = async () => {
  //   if (onLoginSuccess) {
  //     onLoginSuccess({
  //       uid: 'test-uid',
  //       email: email.trim() || 'test@example.com',
  //       first_name: 'Test',
  //       last_name: 'User',
  //     });
  //   }
  //   return;
  // };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Ionicons name="chevron-back" size={28} color="#333" />
      </TouchableOpacity>

      <View style={styles.formContainer}>
        <Image
          source={require('../assets/sagrada.png')}
          style={{ width: 100, height: 100, marginBottom: 10, alignSelf: 'center' }}
          resizeMode="contain"
        />
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.subtitle}>Sign In to continue</Text>

        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#999" style={styles.inputIcon} />

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            editable={!loading}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#999" style={styles.inputIcon} />

          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Password"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            editable={!loading}
          />

          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-outline" : "eye-off-outline"}
              size={22}
              color="#999"
              style={{ paddingHorizontal: 4 }}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.yellowButton, loading && styles.buttonDisabled]}
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.yellowButtonText}>Login</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.forgotPasswordButton}
          onPress={() => setShowForgotPassword(true)}
          disabled={loading}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={styles.separatorContainer}>
          <View style={styles.line} />
          <View>
            <Text style={styles.separatorText}>OR</Text>
          </View>
          <View style={styles.line} />
        </View>

        <TouchableOpacity
          style={styles.switchButton}
          onPress={onSwitchToSignUp}
          disabled={loading}
        >
          <Text style={styles.switchText}>
            Don't have an account? <Text style={styles.switchTextBold}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>

      <ForgotPasswordModal
        visible={showForgotPassword}
        onClose={() => setShowForgotPassword(false)}
      />

      <Modal
        visible={errorModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setErrorModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>

            <Text style={[styles.modalTitle, { textAlign: 'center' }]}>Login Error</Text>

            <Text style={styles.modalSubtitle}>
              {errorMessage}
            </Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setErrorModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>OK</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal>

    </KeyboardAvoidingView>
  );
}