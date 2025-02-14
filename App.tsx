import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {persister, store} from './store/store';
import {PersistGate} from 'redux-persist/integration/react';
import {ActivityIndicator, View} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LogLevel, OneSignal} from 'react-native-onesignal';
import LoginScreen from './feature/Login/LoginScreen';

function App(): React.JSX.Element {
  useEffect(() => {
    // Configure Google Sign-In
    GoogleSignin.configure({
      webClientId:
        '113251114482-dt13jlim8o0msm46gdg41vd8g1tm17tk.apps.googleusercontent.com',
      offlineAccess: true,
    });
    OneSignal.Debug.setLogLevel(LogLevel.Verbose); // Set the log level to verbose for debugging
    OneSignal.initialize('dcf9cb3f-b280-4209-88d0-e04fd2ec9da1');
    OneSignal.Notifications.requestPermission(true);
    // OneSignal configuration
    OneSignal.Notifications.addEventListener('click', (ids: any) => {
      console.log(ids);
    });
    // Log when a notification is received
  }, []); // Empty dependency array ensures it runs only once on mount

  const LoadingIndicator = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F5F5F5', // Light background color for contrast
          padding: 20,
        }}>
        <ActivityIndicator size="large" color="#333" />
      </View>
    );
  };

  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingIndicator />} persistor={persister}>
        <NavigationContainer>
          <LoginScreen />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
