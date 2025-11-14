import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    marginTop: 70,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  sectionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#424242',
  },
  sectionButtonText: {
    color: '#424242',
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
  },
  activeSectionButton: {
    backgroundColor: '#424242',
    color: '#f9f9f9',
  },
  title: {
    fontSize: 35,
    color: '#424242',
    fontFamily: 'Poppins_700Bold',
  },
  userName: {
    fontSize: 18,
    color: '#dba826ff',
    marginBottom: -5,
    fontFamily: 'Poppins_600SemiBold',
  },
  appName: {
    fontSize: 13,
    color: '#666',
    fontFamily: 'Poppins_500Medium',
  },
  shortcutsContainer: {
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#333',
    marginBottom: 15,
    fontFamily: 'Poppins_600SemiBold',
  },
  shortcutsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  shortcutCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  shortcutIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  shortcutIconText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  shortcutTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  shortcutDescription: {
    fontSize: 12,
    color: '#666',
  },
  logoutButton: {
    backgroundColor: '#007AFF',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  floatingButton: {
    position: 'absolute',
    right: 20,
    bottom: 100,
    width: 55,
    height: 55,
    borderRadius: 100,
    backgroundColor: '#FFC942',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000a9',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  floatingButtonText: {
    fontSize: 28,
  },
});

export default styles;

