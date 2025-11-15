import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 8,
    marginBottom: 10,
    fontSize: 14,
  },
  submitButton: {
    backgroundColor: '#ddd',
    padding: 10,
    marginTop: 5,
  },
  submitButtonText: {
    fontSize: 14,
    textAlign: 'center',
  },
  logContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#000',
    paddingTop: 10,
  },
  logTitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  logItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 8,
  },
  logText: {
    fontSize: 12,
    marginBottom: 2,
  },
  logDate: {
    fontSize: 11,
    color: '#666',
    marginTop: 4,
  },
  emptyText: {
    fontSize: 12,
    color: '#999',
    fontStyle: 'italic',
  },
});

export default styles;

