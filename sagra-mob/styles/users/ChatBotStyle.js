import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  chatbotMainContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },

  chatbotScrollView: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },

  chatbotHeaderContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 24,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },

  chatbotTitleText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 8,
    letterSpacing: 0.5,
  },

  chatbotSubtitleText: {
    fontSize: 15,
    color: '#6c757d',
    fontWeight: '400',
  },

  chatbotMessagesContainer: {
    flex: 1,
    paddingBottom: 20,
  },

  chatbotMessageBubble: {
    maxWidth: '80%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 18,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },

  chatbotUserMessageBubble: {
    backgroundColor: '#007AFF',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 4,
  },

  chatbotBotMessageBubble: {
    backgroundColor: '#ffffff',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 4,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },

  chatbotUserMessageText: {
    fontSize: 15,
    color: '#ffffff',
    lineHeight: 20,
    fontWeight: '400',
  },

  chatbotBotMessageText: {
    fontSize: 15,
    color: '#1a1a1a',
    lineHeight: 20,
    fontWeight: '400',
  },

  chatbotInputWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },

  chatbotTextInput: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 24,
    paddingHorizontal: 18,
    paddingVertical: 12,
    fontSize: 15,
    color: '#1a1a1a',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    maxHeight: 100,
  },

  chatbotSendButton: {
    backgroundColor: '#007AFF',
    borderRadius: 24,
    paddingHorizontal: 24,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#007AFF',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },

  chatbotSendButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.5,
  },

  chatbotContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  
  chatbotContentText: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center',
  },
});

export default styles;

