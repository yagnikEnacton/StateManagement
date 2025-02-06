import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logInAction, logOutAction} from '../../../store/action/userAction';
import {RootState} from '../../../store/store';

const SettingScreen = () => {
  const isSignedIn = useSelector((state: RootState) => state.userData.isSignedIn);
  const userName = useSelector((state: RootState) => state.userData.user);
  const dispatch = useDispatch();

  if (!isSignedIn) {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.message}>Please Sign In First</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={() => {
            dispatch(logInAction());
          }}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.greeting}>Welcome, {userName || 'User'}!</Text>

      {/* Sign Out Button */}
      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => dispatch(logOutAction())}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
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
