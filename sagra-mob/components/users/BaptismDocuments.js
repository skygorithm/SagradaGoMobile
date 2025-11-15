import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/users/BaptismDocumentsStyle';

export default function BaptismDocuments({ baptismForm, setBaptismForm }) {
  const [showAddGodparent, setShowAddGodparent] = useState(false);

  const updateGodparent = (type, field, value) => {
    setBaptismForm({
      ...baptismForm,
      [type]: {
        ...baptismForm[type],
        [field]: value,
      },
    });
  };

  const addGodparent = () => {
    const newGodparent = { name: '', relationship: '' };
    setBaptismForm({
      ...baptismForm,
      additional_godparents: [...baptismForm.additional_godparents, newGodparent],
    });
    setShowAddGodparent(false);
  };

  const removeGodparent = (index) => {
    const updated = baptismForm.additional_godparents.filter((_, i) => i !== index);
    setBaptismForm({
      ...baptismForm,
      additional_godparents: updated,
    });
  };

  const updateAdditionalGodparent = (index, field, value) => {
    const updated = [...baptismForm.additional_godparents];
    updated[index] = { ...updated[index], [field]: value };
    setBaptismForm({
      ...baptismForm,
      additional_godparents: updated,
    });
  };

  return (
    <View style={styles.sacramentFormContainer}>
      <Text style={styles.sacramentFormTitle}>Baptism Information</Text>

      <View style={styles.inputWrapper}>
        <Text style={styles.inputLabel}>Main Godfather</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#999" style={{ marginRight: 10 }} />
          <TextInput
            style={styles.textInput}
            value={baptismForm.main_godfather?.name || ''}
            onChangeText={(text) => updateGodparent('main_godfather', 'name', text)}
            placeholder="Enter godfather's name"
          />
        </View>
        <View style={[styles.inputContainer, { marginTop: 10 }]}>
          <Ionicons name="link-outline" size={20} color="#999" style={{ marginRight: 10 }} />
          <TextInput
            style={styles.textInput}
            value={baptismForm.main_godfather?.relationship || ''}
            onChangeText={(text) => updateGodparent('main_godfather', 'relationship', text)}
            placeholder="Relationship"
          />
        </View>
      </View>

      <View style={styles.inputWrapper}>
        <Text style={styles.inputLabel}>Main Godmother</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#999" style={{ marginRight: 10 }} />
          <TextInput
            style={styles.textInput}
            value={baptismForm.main_godmother?.name || ''}
            onChangeText={(text) => updateGodparent('main_godmother', 'name', text)}
            placeholder="Enter godmother's name"
          />
        </View>

        <View style={[styles.inputContainer, { marginTop: 10 }]}>
          <Ionicons name="link-outline" size={20} color="#999" style={{ marginRight: 10 }} />
          <TextInput
            style={styles.textInput}
            value={baptismForm.main_godmother?.relationship || ''}
            onChangeText={(text) => updateGodparent('main_godmother', 'relationship', text)}
            placeholder="Relationship"
          />
        </View>
      </View>

      <View style={styles.inputWrapper}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <Text style={styles.inputLabel}>Additional Godparents</Text>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => setShowAddGodparent(true)}
          >
            <Ionicons name="add-circle-outline" size={20} color="#FFC942" />
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>

        {baptismForm.additional_godparents?.map((godparent, index) => (
          <View key={index} style={styles.additionalItemContainer}>
            <View style={styles.inputContainer}>
              <Ionicons name="person-outline" size={20} color="#999" style={{ marginRight: 10 }} />
              <TextInput
                style={styles.textInput}
                value={godparent.name || ''}
                onChangeText={(text) => updateAdditionalGodparent(index, 'name', text)}
                placeholder="Godparent name"
              />
            </View>

            <View style={[styles.inputContainer, { marginTop: 10 }]}>
              <Ionicons name="link-outline" size={20} color="#999" style={{ marginRight: 10 }} />
              <TextInput
                style={styles.textInput}
                value={godparent.relationship || ''}
                onChangeText={(text) => updateAdditionalGodparent(index, 'relationship', text)}
                placeholder="Relationship"
              />
            </View>
            
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => removeGodparent(index)}
            >
              <Ionicons name="trash-outline" size={18} color="#ff4444" />
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        ))}

        {showAddGodparent && (
          <View style={styles.addGodparentContainer}>
            <Text style={styles.inputLabel}>New Godparent</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="person-outline" size={20} color="#999" style={{ marginRight: 10 }} />
              <TextInput
                style={styles.textInput}
                placeholder="Enter name"
                onChangeText={(text) => {
                  const newGodparent = { name: text, relationship: '' };
                  setBaptismForm({
                    ...baptismForm,
                    additional_godparents: [...baptismForm.additional_godparents, newGodparent],
                  });
                  setShowAddGodparent(false);
                }}
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

