import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollView: {
    flex: 1,
    padding: 20,
  },

  /* HEADER */
  header: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 50,
    marginBottom: 30,
  },

  title: {
    fontSize: 25,
    fontFamily: 'Poppins_700Bold',
    color: '#333',
    marginBottom: -5,
  },

  subtitle: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Poppins_500Medium',
  },

  /* SUMMARY CARD */
  summaryBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
    overflow: 'hidden',
  },

  summaryBar: {
    height: 4,
    width: '100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: '#4CAF50',
    marginBottom: 12,
  },

  summaryLabel: {
    fontSize: 14,
    color: '#555',
    fontFamily: 'Poppins_500Medium',
    letterSpacing: 0.2,
  },

  summaryAmount: {
    fontSize: 30,
    color: '#1A1A1A',
    fontFamily: 'Poppins_700Bold',
    marginTop: 6,
  },

  /* SECTION TITLE */
  sectionTitle: {
    fontSize: 15,
    fontFamily: 'Poppins_700Bold',
    color: '#333',
    marginBottom: 12,
    marginTop: 10,
  },

  /* HISTORY CARD LIST */
  historyContainer: {
    gap: 10,
    marginBottom: 20,
  },

  historyItemWrapper: {
    marginBottom: 5,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
    backgroundColor: 'transparent',
  },

  historyItem: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
  },

  historyAmount: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    color: '#333',
  },

  historyMethod: {
    fontSize: 15,
    color: '#666',
    fontFamily: 'Poppins_500Medium',
    marginTop: 2,
  },

  historyDate: {
    fontSize: 14,
    color: '#999',
    fontFamily: 'Poppins_400Regular',
    marginTop: 2,
  },

  historyItemRow: {
    flexDirection: 'row',
    borderRadius: 12,
    overflow: 'hidden',
  },

  historyItemColor: {
    width: 8,
    backgroundColor: '#FFC942',
  },

  historyItemContent: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 14,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },

  historyDateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },

  /* DONATE BUTTON */
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  donateButton: {
    backgroundColor: '#424242',
    paddingVertical: 10,
    borderRadius: 20,
    marginVertical: 5,
    width: '100%'
  },

  donateButtonText: {
    fontSize: 16,
    fontFamily: 'Poppins_700Bold',
    color: '#fff',
    textAlign: 'center',
  },

  /* MODAL */
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },

  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 15,
    width: '100%',
    maxWidth: 420,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },

  modalTitle: {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
    color: '#000',
    marginBottom: 12,
  },

  modalInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
  },

  modalInputMultiline: {
    height: 70,
    borderRadius: 8,
    paddingVertical: 6,
  },

  /* PAYMENT METHODS */
  paymentMethodContainer: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 15,
  },

  paymentMethodOption: {
    flex: 1,
    backgroundColor: '#e8e8e8',
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderRadius: 8,
    alignItems: 'center',
  },

  paymentMethodOptionSelected: {
    backgroundColor: '#FFC942',
  },

  paymentMethodText: {
    fontSize: 12,
    color: '#555',
    fontFamily: 'Poppins_500Medium',
  },

  paymentMethodTextSelected: {
    color: '#000',
    fontFamily: 'Poppins_600SemiBold',
  },

  /* MODAL OVERLAY */
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  /* MODAL CONTENT */
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },

  modalTitle: {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },

  modalInput: {
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 12,
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    backgroundColor: '#f9f9f9',
  },

  modalInputMultiline: {
    height: 70,
    paddingTop: 8,
    paddingBottom: 8,
  },

  paymentMethodContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },

  paymentMethodOption: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#eee',
    alignItems: 'center',
  },

  paymentMethodOptionSelected: {
    backgroundColor: '#FFC942',
  },

  paymentMethodText: {
    fontSize: 13,
    fontFamily: 'Poppins_500Medium',
    color: '#555',
  },

  paymentMethodTextSelected: {
    color: '#000',
    fontFamily: 'Poppins_600SemiBold',
  },

  /* MODAL BUTTONS */
  modalButtonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 15,
  },

  modalButton: {
    flex: 1,
    height: 45,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cancelButton: {
    backgroundColor: '#e0e0e0',
  },

  cancelButtonText: {
    color: '#424242',
    fontSize: 14,
    fontFamily: 'Poppins_700Bold',
  },

  confirmButton: {
    backgroundColor: '#FFC942',
  },

  confirmButtonText: {
    color: '#424242',
    fontSize: 14,
    fontFamily: 'Poppins_700Bold',
  },

});

export default styles;
