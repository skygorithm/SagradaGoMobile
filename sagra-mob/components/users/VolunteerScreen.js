import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import styles from '../../styles/users/VolunteerStyle';
import CustomNavbar from '../../customs/CustomNavbar';
import CustomPicker from '../../customs/CustomPicker';

const volunteerRoles = [
  { label: 'Choir Member', value: 'Choir Member' },
  { label: 'Usher', value: 'Usher' },
  { label: 'Catechist', value: 'Catechist' },
  { label: 'Tech Team', value: 'Tech Team' },
  { label: 'Others', value: 'Others' },
];

export default function VolunteerScreen({ user, onNavigate }) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [role, setRole] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [volunteerLog, setVolunteerLog] = useState([]);

  const handleSubmit = () => {
    if (!name || !contact || !role) {
      setErrorMessage('Please fill all required fields.');
      return;
    }

    const newVolunteer = {
      id: Date.now().toString(),
      name: name,
      contact: contact,
      role: role,
      date: new Date().toLocaleDateString(),
    };
    
    setVolunteerLog([newVolunteer, ...volunteerLog]);

    Alert.alert(
      'Success',
      `Thank you ${name}! You've signed up as ${role}.`,
      [
        {
          text: 'OK',
          onPress: () => {
            setName('');
            setContact('');
            setRole('');
            setErrorMessage('');
          },
        },
      ]
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Volunteer</Text>
        
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Contact"
          value={contact}
          onChangeText={setContact}
          keyboardType="phone-pad"
        />

        <CustomPicker
          value={role}
          onValueChange={setRole}
          options={volunteerRoles}
          placeholder="Role"
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>

        <View style={styles.logContainer}>
          <Text style={styles.logTitle}>Volunteer Log</Text>
          {volunteerLog.length === 0 ? (
            <Text style={styles.emptyText}>No volunteer records yet</Text>
          ) : (
            volunteerLog.map((item) => (
              <View key={item.id} style={styles.logItem}>
                <Text style={styles.logText}>{item.name} - {item.role}</Text>
                <Text style={styles.logText}>{item.contact}</Text>
                <Text style={styles.logDate}>{item.date}</Text>
              </View>
            ))
          )}
        </View>
      </ScrollView>

      <CustomNavbar
        currentScreen="VolunteerScreen"
        onNavigate={onNavigate}
      />
    </KeyboardAvoidingView>
  );
}

