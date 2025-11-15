import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: '#333',
    fontFamily: 'Poppins_700Bold'
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    fontFamily: 'Poppins_500Medium'
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
    fontFamily: 'Poppins_500Medium'
  },
  volunteerButton: {
    backgroundColor: '#E1D5B8',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 30,
    width: '100%',
    maxWidth: 300,
  },
  volunteerButtonText: {
    fontSize: 18,
    fontFamily: 'Poppins_700Bold',
    color: '#424242',
    textAlign: 'center',
  },
});

export default styles;

