import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  Button
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';
import { sacramentRequirements } from '../utils/sacramentRequirements';
import styles from '../styles/users/CustomBookingStyle';

export default function CustomUploadPDF({
  visible,
  onClose,
  sacrament,
  uploadedDocs = {},
  onUpload,
  onRemove,
  isCivillyMarried = false,
}) {

  let requirements = sacramentRequirements[sacrament] || [];

  if (sacrament === 'Wedding') {
    requirements = requirements.filter((req) => {
      if (req.onlyIfCivillyMarried) {
        return isCivillyMarried === true || isCivillyMarried === 'yes';
      }
      
      return true;
    });
  }

  const handlePickDocument = async (requirement) => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "application/pdf",
        copyToCacheDirectory: true
      });

      if (result.canceled) return;

      const asset = result.assets[0];

      const fileInfo = {
        uri: asset.uri,
        name: asset.name || `${requirement.id}.pdf`,
        size: asset.size,
        mimeType: asset.mimeType || "application/pdf",
      };

      console.log("Uploaded PDF:", fileInfo);

      onUpload?.(requirement.id, fileInfo);

    } catch (error) {
      console.error("PDF upload error:", error);
      Alert.alert("Upload Failed", "Could not select a PDF. Please try again.");
    }
  };

  const renderRequirementItem = (requirement) => {
    if (!requirement.requiresUpload) return null;

    const uploadedFile = uploadedDocs[requirement.id];
    const isOptional = (requirement.optionalIfCivillyMarried && (isCivillyMarried === true || isCivillyMarried === 'yes')) ||
                       requirement.optionalIfApplicable;

    return (
      <View key={requirement.id} style={styles.uploadRequirementItem}>
        <View style={styles.uploadRequirementInfo}>
          <Text style={styles.inputLabel}>
            {requirement.label}
            {isOptional && <Text style={{ color: '#666', fontSize: 12 }}> (Optional)</Text>}
          </Text>

          {uploadedFile ? (
            <View style={styles.uploadFileInfo}>
              <Ionicons name="document-attach-outline" size={18} color="#4CAF50" />
              <Text style={styles.uploadFileName}>{uploadedFile.name}</Text>
            </View>
          ) : (
            <Text style={styles.uploadHelperText}>No file uploaded yet. PDF only.</Text>
          )}
        </View>

        {/* Upload / Replace / Remove buttons */}
        <View style={styles.uploadRequirementActionsRow}>
          {/* Upload / Replace Button */}
          <TouchableOpacity
            style={[styles.uploadButton, uploadedFile && styles.uploadButtonActive]}
            onPress={() => handlePickDocument(requirement)}
            activeOpacity={0.8}
          >
            <Ionicons
              name="cloud-upload-outline"
              size={18}
              color={uploadedFile ? '#fff' : '#424242'}
              style={{ marginRight: 6 }}
            />
            <Text style={[styles.uploadButtonText, uploadedFile && styles.uploadButtonTextActive]}>
              {uploadedFile ? "Replace PDF" : "Upload PDF"}
            </Text>
          </TouchableOpacity>

          {/* Remove Button */}
          {uploadedFile && (
            <TouchableOpacity
              style={styles.removeButtonInline}
              onPress={() => onRemove?.(requirement.id)}
              activeOpacity={0.8}
            >
              <Ionicons name="trash-outline" size={18} color="#ff4444" style={{ marginRight: 6 }} />
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.uploadModalOverlay}>
        <View style={styles.uploadModalContent}>

          {/* HEADER */}
          <View style={styles.uploadModalHeader}>
            <View>
              <Text style={styles.modalTitle}>Upload Documents</Text>
              <Text style={styles.uploadModalSubtitle}>
                {sacrament ? `Required PDFs for ${sacrament}` : "Select a sacrament first."}
              </Text>
            </View>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={28} color="#333" />
            </TouchableOpacity>
          </View>

          {/* LIST OF REQUIREMENTS */}
          {requirements.length === 0 ? (
            <View style={styles.uploadEmptyState}>
              <Ionicons name="cloud-offline-outline" size={48} color="#999" />
              <Text style={styles.uploadHelperText}>No requirements for this sacrament.</Text>
            </View>
          ) : (
            <ScrollView showsVerticalScrollIndicator={false}>
              {requirements.map(renderRequirementItem)}
            </ScrollView>
          )}

          {/* DONE BUTTON */}
          <TouchableOpacity style={[styles.darkButton, { marginTop: 20 }]} onPress={onClose}>
            <Text style={styles.darkButtonText}>Done</Text>
          </TouchableOpacity>

          {/*
          <Button
            title="Test PDF Pick"
            onPress={async () => {
              try {
                const res = await DocumentPicker.getDocumentAsync({
                  type: "application/pdf",
                });

                if (!res.canceled) {
                  const asset = res.assets[0];
                  Alert.alert("Selected", asset.name);
                }
              } catch (err) {
                Alert.alert("Error", err.message);
              }
            }}
          /> */}
        </View>
      </View>
    </Modal>
  );
}
