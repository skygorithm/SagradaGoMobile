import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '90%',
    paddingBottom: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  modalTitle: {
    fontSize: 22,
    fontFamily: 'Poppins_700Bold',
    color: '#1a1a1a',
  },
  modalScrollView: {
    padding: 20,
  },
  formSubtitle: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  sacramentDisplayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e8f5e9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#4CAF50',
  },
  sacramentDisplayText: {
    fontSize: 18,
    fontFamily: 'Poppins_700Bold',
    color: '#2e7d32',
    marginLeft: 10,
  },
  noSacramentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  noSacramentText: {
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
    color: '#666',
    textAlign: 'center',
    marginTop: 15,
  },

  // Input Styles
  inputWrapper: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontFamily: 'Poppins_600SemiBold',
    color: '#333',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    color: '#333',
  },
  inputText: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    color: '#333',
  },
  placeholderText: {
    color: '#999',
  },
  inputHelperText: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#666',
    marginTop: 5,
    marginLeft: 5,
  },

  // Info Container
  infoContainer: {
    backgroundColor: '#fff9e6',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    borderLeftWidth: 3,
    borderLeftColor: '#FFC942',
  },
  infoText: {
    fontSize: 13,
    fontFamily: 'Poppins_500Medium',
    color: '#666',
    marginBottom: 4,
  },

  // Error Styles
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffebee',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    borderLeftWidth: 3,
    borderLeftColor: '#ff4444',
  },
  errorText: {
    flex: 1,
    fontSize: 13,
    fontFamily: 'Poppins_500Medium',
    color: '#ff4444',
    marginLeft: 8,
  },

  // File Upload Styles
  fileUploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    borderWidth: 2,
    borderColor: '#e0e0e0',
    borderStyle: 'dashed',
  },
  fileUploadText: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
    color: '#666',
  },
  fileUploadTextSelected: {
    color: '#4CAF50',
  },

  // Sacrament Form Styles
  sacramentFormContainer: {
    marginTop: 10,
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fafafa',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  sacramentFormTitle: {
    fontSize: 18,
    fontFamily: 'Poppins_700Bold',
    color: '#1a1a1a',
    marginBottom: 15,
  },
  sacramentFormSubtitle: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#666',
    marginBottom: 15,
  },

  // Checkbox Styles
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  checkboxContainerSelected: {
    borderColor: '#FFC942',
    backgroundColor: '#fff9e6',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#ccc',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxSelected: {
    backgroundColor: '#FFC942',
    borderColor: '#FFC942',
  },
  checkboxLabel: {
    flex: 1,
    fontSize: 15,
    fontFamily: 'Poppins_500Medium',
    color: '#333',
  },
  checkboxLabelSelected: {
    color: '#1a1a1a',
    fontFamily: 'Poppins_600SemiBold',
  },

  // Additional Items (Baptism)
  additionalItemContainer: {
    marginBottom: 15,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  addButtonText: {
    fontSize: 14,
    fontFamily: 'Poppins_600SemiBold',
    color: '#FFC942',
    marginLeft: 5,
  },
  removeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#ffebee',
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  removeButtonText: {
    fontSize: 13,
    fontFamily: 'Poppins_500Medium',
    color: '#ff4444',
    marginLeft: 5,
  },
  addGodparentContainer: {
    marginTop: 10,
    padding: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },

  // Date Picker Modal
  datePickerModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  datePickerModalContent: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '100%',
    maxWidth: 400,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  datePickerCloseButton: {
    backgroundColor: '#FFC942',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  datePickerCloseButtonText: {
    fontSize: 16,
    fontFamily: 'Poppins_700Bold',
    color: '#424242',
  },

  // Time Picker Styles
  timePickerModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timePickerModalContent: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '90%',
    maxWidth: 400,
    maxHeight: '70%',
  },
  timePickerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  timePickerTitle: {
    fontSize: 20,
    fontFamily: 'Poppins_700Bold',
    color: '#1a1a1a',
  },
  timePickerBody: {
    padding: 20,
  },
  timePickerScroll: {
    maxHeight: 300,
  },
  timePickerRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  timePickerColumn: {
    flex: 1,
    alignItems: 'center',
  },
  timePickerLabel: {
    fontSize: 14,
    fontFamily: 'Poppins_600SemiBold',
    color: '#666',
    marginBottom: 10,
  },
  timePickerList: {
    maxHeight: 200,
    width: '100%',
  },
  timePickerItem: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 2,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  timePickerItemSelected: {
    backgroundColor: '#FFC942',
  },
  timePickerItemText: {
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
    color: '#333',
  },
  timePickerItemTextSelected: {
    color: '#fff',
    fontFamily: 'Poppins_700Bold',
  },
  timePickerFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  timePickerCancelButton: {
    flex: 1,
    paddingVertical: 12,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  timePickerCancelText: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    color: '#666',
  },
  timePickerConfirmButton: {
    flex: 1,
    paddingVertical: 12,
    marginLeft: 10,
    borderRadius: 10,
    backgroundColor: '#FFC942',
    alignItems: 'center',
  },
  timePickerConfirmText: {
    fontSize: 16,
    fontFamily: 'Poppins_700Bold',
    color: '#424242',
  },

  // Submit Button
  submitButton: {
    backgroundColor: '#FFC942',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  submitButtonText: {
    fontSize: 16,
    fontFamily: 'Poppins_700Bold',
    color: '#424242',
  },
});

export default styles;

