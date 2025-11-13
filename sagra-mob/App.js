import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';

export default function App() {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleLoginSuccess = (user) => {
    console.log('User logged in:', user);
  };

  const handleSignUpSuccess = (user) => {
    console.log('User signed up:', user);
    setShowSignUp(false);
  };

  const handleSwitchToSignUp = () => {
    setShowSignUp(true);
  };

  const handleSwitchToLogin = () => {
    setShowSignUp(false);
  };

  return (
    <View style={styles.container}>
      {showSignUp ? (
        <SignUpScreen 
          onSignUpSuccess={handleSignUpSuccess}
          onSwitchToLogin={handleSwitchToLogin}
        />
      ) : (
        <LoginScreen 
          onLoginSuccess={handleLoginSuccess}
          onSwitchToSignUp={handleSwitchToSignUp}
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
