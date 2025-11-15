import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  scrollView: {
    flex: 1,
    padding: 20,
    paddingTop: 0
  },

  header: {
    marginTop: 60,
    marginBottom: -15,
    alignItems: 'center'
  },

  title: {
    fontSize: 24,
    color: '#1a1a1a',
    fontFamily: 'Poppins_700Bold',
  },

  subtitle: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    marginBottom: 30,
    color: '#666',
  },

  filterContainer: {
    marginBottom: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    height: 110
  },

  filterLabel: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    paddingTop: 5,
    fontFamily: 'Poppins_600SemiBold'
  },

  content: {
    flex: 1,
  },

  noResultsContainer: {
    paddingVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  noResultsText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    fontFamily: 'Poppins_500Medium'
  },

  sacramentCard: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },

  sacramentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },

  sacramentInfo: {
    flex: 1,
    marginRight: 12,
  },

  sacramentName: {
    fontSize: 18,
    fontFamily: 'Poppins_700Bold',
    color: '#1a1a1a',
    marginBottom: 4,
  },

  minBookingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },

  minBookingText: {
    marginLeft: 6,
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
    color: '#333',
  },

  bookIconButton: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  spacer: {
    height: 4,
  },

  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  requirementsIconButton: {
    backgroundColor: '#424242',
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bookNowButton: {
    backgroundColor: '#FFC942',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },

  bookNowButtonText: {
    fontSize: 14,
    fontFamily: 'Poppins_700Bold',
    color: '#424242',
  },

  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 0,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    maxWidth: 400,
    maxHeight: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  modalTitle: {
    fontSize: 22,
    fontFamily: 'Poppins_700Bold',
    color: '#1a1a1a',
    textAlign: 'center',
  },

  requirementsList: {
    maxHeight: 300,
    marginBottom: 20,
  },

  requirementCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#979797ff',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },

  requirementCardText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: '#333',
    lineHeight: 20,
    fontFamily: 'Poppins_500Medium',
  },

  requirementItem: {
    flexDirection: 'row',
    marginBottom: 12,
    paddingRight: 10,
  },

  closeButton: {
    backgroundColor: '#FFC942',
    paddingVertical: 9,
    borderRadius: 20,
    marginVertical: 5,
    width: '100%'
  },

  closeButtonText: {
    fontSize: 16,
    fontFamily: 'Poppins_700Bold',
    color: '#424242',
    textAlign: 'center',
  },
});

export default styles;

