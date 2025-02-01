import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
  Keyboard,
  StatusBar,
  Modal,
  Pressable
} from 'react-native';
import { styles } from './styles';
import { API_URL } from '@env';  // Uncomment this line

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

      // For development/testing with self-signed certs
      if (__DEV__) {
        console.log('Development mode - allowing self-signed certificates');
      }
      
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
          <Text style={styles.settingsButtonText}>⚙️</Text>
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {error ? (
          <Text style={styles.error}>{error}</Text>
        ) : null}

        {response ? (
          <View style={styles.responseContainer}>
            <Text style={styles.responseText}>{response}</Text>
          </View>
        ) : null}
      </ScrollView>

      <View style={styles.inputWrapper}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your prompt..."
            placeholderTextColor="#888888"
            value={prompt}
            onChangeText={setPrompt}
            multiline
          />
          
          <TouchableOpacity 
            style={[styles.button, loading && styles.buttonDisabled]}
            onPress={fetchResponse}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#ffffff" />
            ) : (
              <Text style={styles.buttonText}>Send</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showSettings}
        onRequestClose={() => setShowSettings(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Settings</Text>
            
            <Text style={styles.modalLabel}>API URL:</Text>
            <TextInput
              style={styles.modalInput}
              value={apiUrl}
              onChangeText={setApiUrl}
              placeholder="Enter API URL"
              placeholderTextColor="#888888"
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity 
                style={styles.modalButton}
                onPress={() => {
                  setApiUrl(DEFAULT_API_URL);
                }}
              >
                <Text style={styles.modalButtonText}>Reset</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={[styles.modalButton, styles.modalButtonPrimary]}
                onPress={() => {
                  setShowSettings(false);
                }}
              >
                <Text style={styles.modalButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default App;