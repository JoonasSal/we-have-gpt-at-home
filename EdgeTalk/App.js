import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import { API_URL } from '@env';
import styles from './src/styles/AppStyles';

import Header from './src/components/Header';
import ResponseList from './src/components/ResponseList';
import PromptInput from './src/components/PromptInput';

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
      <View style={styles.mainContainer}>
        <Header />
        <ResponseList error={error} response={response} />
        <PromptInput 
          prompt={prompt}
          setPrompt={setPrompt}
          loading={loading}
          onSubmit={fetchResponse}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;