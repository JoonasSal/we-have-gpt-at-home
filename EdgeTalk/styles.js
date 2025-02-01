import { StyleSheet } from 'react-native';

// Define common colors
const colors = {
  background: '#1a1a1a',
  primary: '#0A84FF',
  border: '#404040',
  text: '#ffffff',
  error: '#ff6b6b',
  overlay: 'rgba(0, 0, 0, 0.5)',
};

export const styles = StyleSheet.create({
  // Main container
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // Header styles
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 4,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 1,
  },
  settingsButton: {
    padding: 4,
    backgroundColor: colors.background,
    borderRadius: 4,
  },
  settingsButtonText: {
    fontSize: 30,
    color: colors.text,
    fontWeight: '300',
  },

  // Chat messages
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 16,
    paddingTop: 30,
  },
  responseContainer: {
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.background,
  },
  responseText: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.text,
  },
  error: {
    color: colors.error,
    marginBottom: 12,
    fontSize: 14,
    textAlign: 'center',
  },

  // Input area
  inputWrapper: {
    borderTopWidth: 1,
    borderTopColor: colors.background,
    backgroundColor: colors.background,
    paddingBottom: 16,
  },
  inputContainer: {
    padding: 12,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'flex-end',
  },
  inputWithButton: {
    flex: 1,
    backgroundColor: colors.background,
    borderRadius: 10,
    padding: 12,
    minHeight: 45,
    maxHeight: 90,
    textAlignVertical: 'top',
    color: colors.text,
    fontSize: 15,
    borderWidth: 1,
    borderColor: colors.border,
  },
  sendButton: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sendButtonText: {
    color: colors.text,
    fontSize: 18,
    marginBottom: 4,
  },
  buttonDisabled: {
    opacity: 0.7,
  },

  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: colors.overlay,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 20,
    width: '90%',
    maxWidth: 400,
  },
  modalTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalLabel: {
    color: colors.text,
    fontSize: 16,
    marginBottom: 8,
  },
  modalInput: {
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 12,
    color: colors.text,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  modalButton: {
    flex: 1,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  modalButtonPrimary: {
    backgroundColor: colors.primary,
  },
  modalButtonText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '600',
  },
}); 