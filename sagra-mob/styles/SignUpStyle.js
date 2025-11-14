import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  formContainer: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#fff',
    borderRadius: 10,
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

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 5,
    fontSize: 16,
    backgroundColor: '#fff',
  },

  inputError: {
    borderColor: '#ff3b30',
    borderWidth: 1.5,
  },

  errorText: {
    color: '#ff3b30',
    fontSize: 12,
    marginBottom: 10,
    marginTop: -5,
    marginLeft: 5,
  },

  pickerContainer: {
    marginBottom: 5,
  },

  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },

  picker: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 5,
  },

  pickerError: {
    borderColor: '#ff3b30',
    borderWidth: 1.5,
  },

  datePickerButton: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 5,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  
  datePickerText: {
    fontSize: 16,
    color: '#333',
  },

  datePickerPlaceholder: {
    color: '#999',
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    maxWidth: 400,
    maxHeight: '80%',
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },

  datePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  pickerColumn: {
    flex: 1,
    marginHorizontal: 5,
  },

  pickerLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
    color: '#666',
  },
  
  datePicker: {
    height: 150,
  },

  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  modalButton: {
    flex: 1,
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },

  modalButtonCancel: {
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#ddd',
  },

  modalButtonConfirm: {
    backgroundColor: '#007AFF',
  },

  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  modalButtonTextCancel: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },

  button: {
    backgroundColor: '#007AFF',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  buttonDisabled: {
    opacity: 0.6,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  switchButton: {
    marginTop: 15,
    alignItems: 'center',
  },

  switchText: {
    color: '#666',
    fontSize: 14,
  },

  switchTextBold: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
});

export default styles;

