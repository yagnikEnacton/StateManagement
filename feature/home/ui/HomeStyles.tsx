import {StyleSheet} from 'react-native';

export const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4', // Light background for a modern feel
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    backgroundColor: '#F44336', // Red background for the header
    paddingVertical: 20,
    paddingHorizontal: 25,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
    textTransform: 'uppercase',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  contentText: {
    fontSize: 18,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#F44336', // Red button
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  footerText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
  },
  loadingIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
