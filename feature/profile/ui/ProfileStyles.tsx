import {StyleSheet} from 'react-native';

export const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  profilePictureContainer: {
    width: 110,
    height: 110,
    borderRadius: 55,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#4CAF50',
    marginBottom: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E0E0E0', // Placeholder background color
  },
  nameText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  bioText: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    width: 160,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#4CAF50',
    shadowOpacity: 0.4,
    shadowOffset: {width: 2, height: 4},
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  languageText: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: '500',
  },
  picker: {
    height: 50,
    width: '80%',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#4CAF50', // Matching the border color to the button color
    borderRadius: 25, // Matching the border radius of the button
    paddingLeft: 10,
    backgroundColor: '#fff', // White background to match other elements
    color: '#333', // Text color for better contrast
  },
});
