import { StyleSheet, Platform, StatusBar } from 'react-native';

export const colors = {
  background: '#1A1A1A',
  surface: '#2A2A2A',
  input: '#333333',
  primary: '#4A9EFF',
  primaryDisabled: '#2A5A8F',
  error: '#FF6B6B',
  text: '#FFFFFF',
  placeholder: '#666666'
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  mainContainer: {
    flex: 1,
    padding: 16,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 16 : 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: colors.text,
    letterSpacing: 0.5,
  },
  responseScroll: {
    flex: 1,
    marginBottom: 10,
  },
  responseScrollContent: {
    paddingBottom: 20,
  },
  inputContainer: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 12,
  },
  input: {
    backgroundColor: colors.input,
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    minHeight: 60,
    maxHeight: 100,
    textAlignVertical: 'top',
    color: colors.text,
    fontSize: 16,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  buttonDisabled: {
    backgroundColor: colors.primaryDisabled,
  },
  buttonText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '600',
  },
  error: {
    color: colors.error,
    marginBottom: 10,
    fontSize: 14,
    textAlign: 'center',
  },
  responseContainer: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  responseText: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.text,
  },
}); 