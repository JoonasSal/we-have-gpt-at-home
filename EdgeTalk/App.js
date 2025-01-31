import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
  Keyboard
} from 'react-native';
import { styles } from './styles';

// You might want to store this in a config file or environment variable
const API_URL = 'http://192.168.1.223:5000/generate';

const App = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchResponse = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt');
      return;
    }

    Keyboard.dismiss();
    setLoading(true);
    setError('');
    
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      
      const data = await res.json();
      
      if (!data.success) {
        throw new Error(data.error || 'Failed to get response');
      }
      
      setResponse(data.response);
    } catch (err) {
      setError(err.message || 'Failed to connect to the server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
};

export default App;