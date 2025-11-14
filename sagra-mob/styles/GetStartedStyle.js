import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A2E',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 260,
    height: 260,
    marginBottom: 20,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 28,
    fontFamily: 'Poppins_700Bold',
    color: '#fff',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 15,
    fontFamily: 'Poppins_400Regular',
    color: '#ddd',
    textAlign: 'center',
    marginBottom: 40
  },
  button: {
    backgroundColor: '#1772FF',
    paddingHorizontal: 30,
    paddingVertical: 14,
    borderRadius: 12
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    color: '#fff',
  }
});