import { StyleSheet } from "react-native";

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
    backgroundColor: '#4CAF50', // Green background for header
    paddingVertical: 20,
    paddingHorizontal: 25,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
  },
  headerText: {
    fontSize: 32, // Slightly larger font size for better hierarchy
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
    fontSize: 24, // Slightly larger welcome text
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  contentText: {
    fontSize: 18, // Increase text size for readability
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingTop: 15,
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
