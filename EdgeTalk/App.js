import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StatusBar, Keyboard } from 'react-native';
import { styles } from './styles';
import { API_URL } from '@env';
import SettingsModal from './components/SettingsModal';
import ChatInput from './components/ChatInput';
import ChatMessages from './components/ChatMessages';

// Use API_URL from env
const DEFAULT_API_URL = API_URL;

const App = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [apiUrl, setApiUrl] = useState(DEFAULT_API_URL);

  const fetchResponse = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt');
      return;
    }

    Keyboard.dismiss();
    setLoading(true);
    setError('');
    
    try {
      console.log('Attempting to fetch from:', apiUrl);
      
      const fetchOptions = { 
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ prompt }),
      };

      
      const res = await fetch(apiUrl, fetchOptions);
      
      console.log('Response status:', res.status);
      const data = await res.json();
      
      if (!data.success) {
        throw new Error(data.error || 'Failed to get response');
      }
      
      setError('');
      const fullResponse = `Q: ${prompt}\n\nA: ${data.response}`;
      setResponse(fullResponse);
      setPrompt('');
    } catch (err) {
      console.error('Fetch error details:', {
        message: err.message,
        stack: err.stack,
        name: err.name
      });
      setResponse('');
      setError(`Connection error:\n${err.message}\n${err.stack}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#1a1a1a"
        translucent={false}
      />
      
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.settingsButton}
          onPress={() => setShowSettings(true)}
        >
          <Text style={styles.settingsButtonText}>≡</Text>
        </TouchableOpacity>
      </View>

      <ChatMessages error={error} response={response} />
      
      <ChatInput 
        prompt={prompt}
        onChangePrompt={setPrompt}
        onSend={fetchResponse}
        loading={loading}
      />

      <SettingsModal
        visible={showSettings}
        onClose={() => setShowSettings(false)}
        apiUrl={apiUrl}
        onChangeApiUrl={setApiUrl}
      />
    </SafeAreaView>
  );
};

export default App;