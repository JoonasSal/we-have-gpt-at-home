import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StatusBar, Keyboard } from 'react-native';
import { styles } from './styles';
import { API_URL } from '@env';
import SettingsModal from './components/SettingsModal';
import ChatInput from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import { sendPrompt } from './services/api';

// Default API URL from environment variables
const DEFAULT_API_URL = API_URL;

const App = () => {
  // State for chat functionality
  const [prompt, setPrompt] = useState('');        // Current user input
  const [response, setResponse] = useState('');    // AI response
  const [loading, setLoading] = useState(false);   // Loading state for API calls
  const [error, setError] = useState('');          // Error messages
  
  // State for settings
  const [showSettings, setShowSettings] = useState(false);  // Controls settings modal visibility
  const [apiUrl, setApiUrl] = useState(DEFAULT_API_URL);   // Current API endpoint

  // Handle sending prompts to the AI
  const handleSendPrompt = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt');
      return;
    }

    Keyboard.dismiss();
    setLoading(true);
    setError('');
    
    try {
      const responseText = await sendPrompt(apiUrl, prompt.trim());
      // Format the response to include both question and answer
      const fullResponse = `Q: ${prompt}\n\nA: ${responseText}`;
      
      setResponse(fullResponse);
      setPrompt('');
      setError('');
    } catch (err) {
      console.error('Fetch error:', err);
      setResponse('');
      setError(`Connection error:\n${err.message}\n${err.stack}`);
    } finally {
      setLoading(false);
    }
  };

  // Close settings modal
  const handleSettingsClose = () => setShowSettings(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Status bar configuration */}
      <StatusBar
        barStyle="light-content"
        backgroundColor="#1a1a1a"
        translucent={false}
      />
      
      {/* Settings button in header */}
      <Header onSettingsPress={() => setShowSettings(true)} />

      {/* Chat messages display area */}
      <ChatMessages error={error} response={response} />
      
      {/* Input area with send button */}
      <ChatInput 
        prompt={prompt}
        onChangePrompt={setPrompt}
        onSend={handleSendPrompt}
        loading={loading}
      />

      {/* Settings modal */}
      <SettingsModal
        visible={showSettings}
        onClose={handleSettingsClose}
        apiUrl={apiUrl}
        onChangeApiUrl={setApiUrl}
      />
    </SafeAreaView>
  );
};

// Header component with settings button
const Header = ({ onSettingsPress }) => (
  <View style={styles.header}>
    <TouchableOpacity 
      style={styles.settingsButton}
      onPress={onSettingsPress}
    >
      <Text style={styles.settingsButtonText}>≡</Text>
    </TouchableOpacity>
  </View>
);

export default App;