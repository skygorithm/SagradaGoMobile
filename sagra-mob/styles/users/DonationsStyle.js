import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginTop: 40,
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Poppins_700Bold',
    color: '#333',
    marginBottom: -5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    fontFamily: 'Poppins_500Medium',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  contentText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    fontFamily: 'Poppins_500Medium',
  },

  donateButton: {
    backgroundColor: '#FFC942',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 20,
  },

  donateButtonText: {
    fontSize: 18,
    fontFamily: 'Poppins_700Bold',
    color: '#424242',
    textAlign: 'center',
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },

  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 0,
    padding: 10,
    width: '100%',
    maxWidth: 400,
  },

  modalTitle: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    color: '#000',
    textAlign: 'left',
    marginBottom: 10,
  },

  modalInput: {
    height: 35,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 0,
    paddingHorizontal: 6,
    marginBottom: 6,
    fontSize: 13,
    backgroundColor: '#fff',
    fontFamily: 'Poppins_400Regular',
  },

  modalInputMultiline: {
    height: 50,
    paddingTop: 4,
    paddingBottom: 4,
  },

  paymentMethodContainer: {
    flexDirection: 'row',
    gap: 4,
    marginBottom: 10,
  },

  paymentMethodOption: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 4,
    borderRadius: 0,
    backgroundColor: '#d0d0d0',
    alignItems: 'center',
  },

  paymentMethodOptionSelected: {
    backgroundColor: '#FFC942',
  },

  paymentMethodText: {
    fontSize: 11,
    fontFamily: 'Poppins_400Regular',
    color: '#333',
  },

  paymentMethodTextSelected: {
    color: '#000',
    fontFamily: 'Poppins_500Medium',
  },

  modalButtonContainer: {
    flexDirection: 'row',
    gap: 4,
  },

  modalButton: {
    flex: 1,
    height: 35,
    borderRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cancelButton: {
    backgroundColor: '#d0d0d0',
  },

  cancelButtonText: {
    color: '#000',
    fontSize: 12,
    fontFamily: 'Poppins_500Medium',
  },

  confirmButton: {
    backgroundColor: '#FFC942',
  },
  
  confirmButtonText: {
    color: '#000',
    fontSize: 12,
    fontFamily: 'Poppins_600SemiBold',
  },
});

export default styles;

