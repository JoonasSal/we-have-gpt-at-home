import React from 'react';
import { View, TextInput, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { styles } from '../styles';

const ChatInput = ({ prompt, onChangePrompt, onSend, loading }) => {
  return (
    <View style={styles.inputWrapper}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputWithButton}
          placeholder="Enter your prompt..."
          placeholderTextColor="#888888"
          value={prompt}
          onChangeText={onChangePrompt}
          multiline
        />
        
        <TouchableOpacity 
          style={[styles.sendButton, loading && styles.buttonDisabled]}
          onPress={onSend}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#ffffff" size="small" />
          ) : (
            <Text style={styles.sendButtonText}>➤</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatInput; 