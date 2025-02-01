import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import { styles } from '../styles';

const SettingsModal = ({ visible, onClose, apiUrl, onChangeApiUrl, onReset }) => {
  // Store the initial URL when modal opens
  const [tempUrl, setTempUrl] = useState(apiUrl);

  // Update tempUrl when modal becomes visible with current apiUrl
  React.useEffect(() => {
    if (visible) {
      setTempUrl(apiUrl);
    }
  }, [visible, apiUrl]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Settings</Text>
          
          <Text style={styles.modalLabel}>API URL:</Text>
          <TextInput
            style={styles.modalInput}
            value={tempUrl}
            onChangeText={setTempUrl}
            placeholder="Enter API URL"
            placeholderTextColor="#888888"
          />

          <View style={styles.modalButtons}>
            <TouchableOpacity 
              style={styles.modalButton}
              onPress={() => {
                onClose();  // Just close without saving
              }}
            >
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.modalButton, styles.modalButtonPrimary]}
              onPress={() => {
                onChangeApiUrl(tempUrl);  // Save the new URL
                onClose();
              }}
            >
              <Text style={styles.modalButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SettingsModal; 