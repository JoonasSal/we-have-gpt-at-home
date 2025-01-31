import React from 'react';
import { 
  View, 
  TextInput, 
  TouchableOpacity, 
  Text, 
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Keyboard 
} from 'react-native';
import styles, { colors } from '../styles/AppStyles';

const PromptInput = ({ prompt, setPrompt, loading, onSubmit }) => {
  const InputContainer = ({ children }) => (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Ask anything..."
        placeholderTextColor={colors.placeholder}
        value={prompt}
        onChangeText={setPrompt}
        multiline
      />
      
      <TouchableOpacity 
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={() => {
          Keyboard.dismiss();
          onSubmit();
        }}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color={colors.text} />
        ) : (
          <Text style={styles.buttonText}>Send</Text>
        )}
      </TouchableOpacity>
      {children}
    </View>
  );

  return Platform.OS === 'ios' ? (
    <KeyboardAvoidingView behavior="padding">
      <InputContainer />
    </KeyboardAvoidingView>
  ) : (
    <InputContainer />
  );
};

export default PromptInput; 