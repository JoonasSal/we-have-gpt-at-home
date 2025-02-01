import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StatusBar, Keyboard } from 'react-native';
import { styles } from './styles';
import { API_URL } from '@env';
import SettingsModal from './components/SettingsModal';
import ChatInput from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import { sendPrompt } from './services/api';

// Use API_URL from env
const DEFAULT_API_URL = API_URL;

const App = () => {
  // Chat state
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Settings state
  const [showSettings, setShowSettings] = useState(false);
  const [apiUrl, setApiUrl] = useState(DEFAULT_API_URL);

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

  const handleSettingsClose = () => setShowSettings(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#1a1a1a"
        translucent={false}
      />
      
      <Header onSettingsPress={() => setShowSettings(true)} />

      <ChatMessages error={error} response={response} />
      
      <ChatInput 
        prompt={prompt}
        onChangePrompt={setPrompt}
        onSend={handleSendPrompt}
        loading={loading}
      />

      <SettingsModal
        visible={showSettings}
        onClose={handleSettingsClose}
        apiUrl={apiUrl}
        onChangeApiUrl={setApiUrl}
      />
    </SafeAreaView>
  );
};

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