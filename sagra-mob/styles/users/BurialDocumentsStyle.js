import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
  inputWrapper: {
    marginBottom: 15,
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
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  textInput: {
    flex: 1,
    fontSize: 15,
    fontFamily: 'Poppins_400Regular',
    color: '#333',
  },
});

export default styles;

