import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styles from '../../styles/users/ChatBotStyle';
import CustomNavbar from '../../customs/CustomNavbar';

export default function ChatBotScreen({ user, onNavigate }) {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const scrollViewRef = useRef();

  const getBotResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();
    if (msg.includes('hello') || msg.includes('hi')) return 'Hello! How can I help you today?';
    if (msg.includes('how are you')) return "I'm just a bot, but I'm doing great!";
    if (msg.includes('bye')) return 'Goodbye! Have a nice day!';
    return "Sorry, I don't understand. Can you rephrase?";
  };

  const sendMessage = () => {
    if (!inputText.trim()) return;

    const messageText = inputText.trim();
    const userMsg = { id: Date.now(), text: messageText, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');

    setTimeout(() => {
      const botMsg = { id: Date.now() + 1, text: getBotResponse(messageText), sender: 'bot' };
      setMessages(prev => [...prev, botMsg]);
    }, 500);
  };

  return (
    <>
      <KeyboardAvoidingView
        style={styles.chatbotMainContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
      >
        <ScrollView
          style={styles.chatbotScrollView}
          ref={scrollViewRef}
          onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.chatbotHeaderContainer}>
            <Text style={styles.chatbotTitleText}>Chat Bot</Text>
            <Text style={styles.chatbotSubtitleText}>Ask me anything!</Text>
          </View>

          <View style={styles.chatbotMessagesContainer}>
            {messages.map(msg => (
              <View
                key={msg.id}
                style={[
                  styles.chatbotMessageBubble,
                  msg.sender === 'user' ? styles.chatbotUserMessageBubble : styles.chatbotBotMessageBubble,
                ]}
              >
                <Text style={msg.sender === 'user' ? styles.chatbotUserMessageText : styles.chatbotBotMessageText}>
                  {msg.text}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>

        <View style={styles.chatbotInputWrapper}>
          <TextInput
            style={styles.chatbotTextInput}
            placeholder="Type a message..."
            placeholderTextColor="#999"
            value={inputText}
            onChangeText={setInputText}
            onSubmitEditing={sendMessage}
            returnKeyType="send"
            multiline={false}
          />
          <TouchableOpacity style={styles.chatbotSendButton} onPress={sendMessage}>
            <Text style={styles.chatbotSendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

      <CustomNavbar currentScreen="ChatBotScreen" onNavigate={onNavigate} />
    </>

  );
}
