import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  Platform,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logInAction, logOutAction} from '../../../store/action/userAction';
import {RootState} from '../../../store/store';
import {signInWithGoogle} from '../../sign/google/SignIn';
import {signOutWithGoogle} from '../../sign/google/Signout';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import {signInWithFb} from '../../sign/facebook/SignIn';
import {signOutWithFb} from '../../sign/facebook/SignOut';

const SettingScreen = () => {
  const isSignedIn = useSelector(
    (state: RootState) => state.userData.isSignedIn,
  );
  const userName = useSelector((state: RootState) => state.userData.user);

  const dispatch = useDispatch();

  const waitForSignInWithGoogle = async () => {
    const response = await signInWithGoogle();
    console.log(response);

    const type = response?.type;
    if (type) dispatch(logInAction(response.data));
  };
  const waitForSignInWithFb = async () => {
    const response = await signInWithFb();
    console.log(JSON.stringify(response, null, 2));
    const type = response?.type;
    if (type) dispatch(logInAction(response.data));
  };
  const waitForSignOutWithGoogle = async () => {
    const response = await signOutWithGoogle();
    if (response) dispatch(logOutAction());
  };
  if (!isSignedIn) {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.message}>Please Sign In First</Text>
        </View>
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={() => {
            // initiate sign in
            waitForSignInWithGoogle();
          }}
        />
        <View>
          {/* <LoginButton
            onLoginFinished={(error, result) => {
              if (error) {
                console.log('login has error: ' + result.error);
              } else if (result.isCancelled) {
                console.log('login is cancelled.');
              } else {
                AccessToken.getCurrentAccessToken().then(data => {
                  console.log(data.accessToken.toString());
                });
              }
            }}
            onLogoutFinished={() => console.log('logout.')}
          /> */}
          <Button
            title={'Login with Facebook'}
            onPress={() => {
              waitForSignInWithFb();
            }}
          />
        </View>

        {/* <TouchableOpacity style={styles.buttonPrimary} onPress={() => {}}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity> */}
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
        onPress={() => {
          waitForSignOutWithGoogle();
          signOutWithFb();
        }}>
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
