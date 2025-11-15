import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/users/BurialDocumentsStyle';

export default function BurialDocuments({ burialForm, setBurialForm }) {
  const burialServices = [
    { key: 'funeral_mass', label: 'Funeral Mass' },
    { key: 'death_anniversary', label: 'Death Anniversary' },
    { key: 'funeral_blessing', label: 'Funeral Blessing' },
    { key: 'tomb_blessing', label: 'Tomb Blessing' },
  ];

  const toggleService = (key) => {
    setBurialForm({
      ...burialForm,
      [key]: !burialForm[key],
    });
  };

  return (
    <View style={styles.sacramentFormContainer}>
      <Text style={styles.sacramentFormTitle}>Burial Services</Text>
      <Text style={styles.sacramentFormSubtitle}>Select the services you need:</Text>

      {burialServices.map((service) => (
        <TouchableOpacity
          key={service.key}
          style={[
            styles.checkboxContainer,
            burialForm[service.key] && styles.checkboxContainerSelected
          ]}
          onPress={() => toggleService(service.key)}
        >
          <View style={[
            styles.checkbox,
            burialForm[service.key] && styles.checkboxSelected
          ]}>
            {burialForm[service.key] && (
              <Ionicons name="checkmark" size={16} color="#fff" />
            )}
          </View>
          <Text style={[
            styles.checkboxLabel,
            burialForm[service.key] && styles.checkboxLabelSelected
          ]}>
            {service.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

