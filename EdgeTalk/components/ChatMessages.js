import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles } from '../styles';

const ChatMessages = ({ error, response }) => {
  return (
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
  );
};

export default ChatMessages; 