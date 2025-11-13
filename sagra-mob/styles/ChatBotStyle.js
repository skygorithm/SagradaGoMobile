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
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: '#666',
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
  },

  chatContainer: {
    flex: 1,
    paddingVertical: 20,
  },

  messageBubble: {
    maxWidth: '80%',
    padding: 10,
    borderRadius: 15,
    marginBottom: 10,
  },

  userBubble: {
    backgroundColor: '#064eca',
    alignSelf: 'flex-end',
    borderTopRightRadius: 0,
  },

  botBubble: {
    backgroundColor: '#e0e0e0',
    alignSelf: 'flex-start',
    borderTopLeftRadius: 0,
  },

  messageText: {
    color: '#fff',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },

  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },

  sendButton: {
    marginLeft: 10,
    backgroundColor: '#064eca',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },

  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  
});

export default styles;

