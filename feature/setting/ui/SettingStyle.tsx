import {StyleSheet} from 'react-native';

export const SettingStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F0F4F8', // Softer background color
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  greeting: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonPrimary: {
    width: '80%',
    paddingVertical: 14,
    backgroundColor: '#4CAF50',
    borderRadius: 30,
    marginTop: 20,
    alignItems: 'center',
    shadowColor: '#4CAF50',
    shadowOpacity: 0.4,
    shadowOffset: {width: 2, height: 4},
    shadowRadius: 5,
    elevation: 5, // Shadow for Android
  },
  buttonSecondary: {
    width: '80%',
    paddingVertical: 14,
    backgroundColor: '#FF6F61',
    borderRadius: 30,
    marginTop: 20,
    alignItems: 'center',
    shadowColor: '#FF6F61',
    shadowOpacity: 0.4,
    shadowOffset: {width: 2, height: 4},
    shadowRadius: 5,
    elevation: 5, // Shadow for Android
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});
