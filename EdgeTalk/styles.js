import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 16,
    paddingTop: 40,
  },
  inputWrapper: {
    borderTopWidth: 1,
    borderTopColor: '#333333',
    backgroundColor: '#2a2a2a',
    paddingBottom: 16,
  },
  inputContainer: {
    padding: 12,
    gap: 8,
  },
  input: {
    backgroundColor: '#333333',
    borderRadius: 10,
    padding: 12,
    minHeight: 45,
    maxHeight: 90,
    textAlignVertical: 'top',
    color: '#ffffff',
    placeholderTextColor: '#888888',
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#404040',
  },
  button: {
    backgroundColor: '#0A84FF',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  error: {
    color: '#ff6b6b',
    marginBottom: 12,
    fontSize: 14,
    textAlign: 'center',
  },
  responseContainer: {
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#404040',
  },
  responseText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#ffffff',
  },
}); 