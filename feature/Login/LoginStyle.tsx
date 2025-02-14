import {StyleSheet} from 'react-native';

export const LoginStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5', // Light background color
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333', // Dark text color for better contrast
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#888', // Subtle gray for subtitle
    marginBottom: 30,
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#ff4b2b', // Accent color for the button
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  footerText: {
    color: '#333', // Dark text for footer
    fontSize: 14,
  },
  footerLink: {
    color: '#ff4b2b', // Accent color for the footer link
    fontSize: 14,
    marginLeft: 5,
  },
});
