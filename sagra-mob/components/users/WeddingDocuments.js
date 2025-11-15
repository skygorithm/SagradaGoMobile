import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/users/WeddingDocumentsStyle';

let ImagePicker = null;
try {
  ImagePicker = require('expo-image-picker');
} catch (e) {
  console.warn('expo-image-picker not available');
}

export default function WeddingDocuments({ weddingForm, setWeddingForm }) {
  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length <= 4) return cleaned;
    if (cleaned.length <= 7) return `${cleaned.slice(0, 4)}-${cleaned.slice(4)}`;
    return `${cleaned.slice(0, 4)}-${cleaned.slice(4, 7)}-${cleaned.slice(7, 11)}`;
  };

  const handlePhoneChange = (text) => {
    const input = text.replace(/\D/g, '');
    if (input.length <= 11) {
      setWeddingForm({ ...weddingForm, contact_no: input });
    }
  };

  const pickImage = async (fieldName) => {
    if (!ImagePicker) {
      Alert.alert(
        'Image Picker Not Available',
        'Please install expo-image-picker: npx expo install expo-image-picker'
      );
      return;
    }

    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission needed', 'Please grant camera roll permissions to upload documents.');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 0.8,
      });

      if (!result.canceled && result.assets[0]) {
        setWeddingForm({
          ...weddingForm,
          [fieldName]: {
            ...result.assets[0],
            fileName: result.assets[0].uri.split('/').pop() || 'image.jpg',
          },
        });
      }
      
    } catch (error) {
      Alert.alert('Error', 'Failed to pick image. Please try again.');
      console.error('Image picker error:', error);
    }
  };

  const documentFields = [
    { key: 'groom_fullname', label: 'Groom Full Name', type: 'text' },
    { key: 'bride_fullname', label: 'Bride Full Name', type: 'text' },
    { key: 'marriage_license', label: 'Marriage License', type: 'file' },
    { key: 'marriage_contract', label: 'Marriage Contract', type: 'file' },
    { key: 'groom_1x1', label: 'Groom 1x1 Photo', type: 'file' },
    { key: 'bride_1x1', label: 'Bride 1x1 Photo', type: 'file' },
    { key: 'groom_baptismal_cert', label: 'Groom Baptismal Certificate', type: 'file' },
    { key: 'bride_baptismal_cert', label: 'Bride Baptismal Certificate', type: 'file' },
    { key: 'groom_confirmation_cert', label: 'Groom Confirmation Certificate', type: 'file' },
    { key: 'bride_confirmation_cert', label: 'Bride Confirmation Certificate', type: 'file' },
    { key: 'groom_cenomar', label: 'Groom CENOMAR', type: 'file' },
    { key: 'bride_cenomar', label: 'Bride CENOMAR', type: 'file' },
    { key: 'groom_banns', label: 'Groom Banns', type: 'file' },
    { key: 'bride_banns', label: 'Bride Banns', type: 'file' },
    { key: 'groom_permission', label: 'Groom Permission', type: 'file' },
    { key: 'bride_permission', label: 'Bride Permission', type: 'file' },
  ];

  return (
    <View style={styles.sacramentFormContainer}>
      <Text style={styles.sacramentFormTitle}>Wedding Information</Text>
      
      <View style={styles.inputWrapper}>
        <Text style={styles.inputLabel}>Contact Number</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="call-outline" size={20} color="#999" style={{ marginRight: 10 }} />
          <TextInput
            style={styles.textInput}
            value={formatPhoneNumber(weddingForm.contact_no)}
            onChangeText={handlePhoneChange}
            placeholder="09XX-XXX-XXXX"
            keyboardType="phone-pad"
            maxLength={13}
          />
        </View>
        <Text style={styles.inputHelperText}>Enter 11-digit PH mobile number (e.g., 09171234567)</Text>
      </View>

      {documentFields.map((field) => (
        <View key={field.key} style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>{field.label}</Text>
          {field.type === 'text' ? (
            <View style={styles.inputContainer}>
              <Ionicons name="person-outline" size={20} color="#999" style={{ marginRight: 10 }} />
              <TextInput
                style={styles.textInput}
                value={weddingForm[field.key] || ''}
                onChangeText={(text) => setWeddingForm({ ...weddingForm, [field.key]: text })}
                placeholder={`Enter ${field.label.toLowerCase()}`}
              />
            </View>
          ) : (
            <TouchableOpacity
              style={styles.fileUploadButton}
              onPress={() => pickImage(field.key)}
            >
              <Ionicons 
                name={weddingForm[field.key] ? "checkmark-circle" : "document-attach-outline"} 
                size={20} 
                color={weddingForm[field.key] ? "#4CAF50" : "#666"} 
                style={{ marginRight: 10 }} 
              />
              <Text style={[
                styles.fileUploadText,
                weddingForm[field.key] && styles.fileUploadTextSelected
              ]}>
                {weddingForm[field.key] 
                  ? weddingForm[field.key].fileName || 'File Selected' 
                  : `Upload ${field.label}`}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      ))}
    </View>
  );
}

