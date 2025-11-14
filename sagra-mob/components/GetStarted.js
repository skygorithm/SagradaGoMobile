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
} from 'react-native';
import styles from '../styles/GetStartedStyle';
import { Ionicons } from "@expo/vector-icons";

export default function GetStartedScreen({ onGetStarted }) {

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <View style={styles.container}>

                <Text style={styles.title}>Welcome to SagradaGo</Text>
                <Text style={styles.subtitle}>Your digital guide to connection, events, and the church.</Text>

                <TouchableOpacity style={styles.button} onPress={onGetStarted}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

