import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import styles from '../styles/AppStyles';

const ResponseList = ({ error, response }) => (
  <ScrollView 
    style={styles.responseScroll}
    contentContainerStyle={styles.responseScrollContent}
    keyboardShouldPersistTaps="handled"
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

export default ResponseList; 