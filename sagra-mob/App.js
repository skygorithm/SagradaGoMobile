import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';
import HomePageScreen from './components/HomePageScreen';

export default function App() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLoginSuccess = (user) => {
    console.log('User logged in:', user);
    setCurrentUser(user);
    setIsLoggedIn(true);
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

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <HomePageScreen user={currentUser} onLogout={handleLogout} />
      ) : showSignUp ? (
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
