import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import styles from '../styles/GetStartedStyle';
import { Ionicons } from "@expo/vector-icons";

export default function GetStartedScreen({ onLoginPress, onSignUpPress }) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello!</Text>
            <Text style={styles.subtitle}>Your digital guide to connection, events, and the church.</Text>

            <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.yellowButton} onPress={onLoginPress}>
        <Text style={styles.yellowButtonText}>Log In with Account</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.darkButton} onPress={onSignUpPress}>
        <Text style={styles.darkButtonText}>Sign Up</Text>
    </TouchableOpacity>
</View>

        </View>
    );
}

