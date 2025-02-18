import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {persister, store} from './codebase/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import {ActivityIndicator, Vibration, View} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LogLevel, OneSignal} from 'react-native-onesignal';
import LoginScreen from './codebase/feature/Login/LoginScreen';

function App(): React.JSX.Element {
  OneSignal.Debug.setLogLevel(LogLevel.Verbose);
  OneSignal.initialize('dcf9cb3f-b280-4209-88d0-e04fd2ec9da1');
  OneSignal.Notifications.requestPermission(true);
  GoogleSignin.configure({
    webClientId:
      '113251114482-dt13jlim8o0msm46gdg41vd8g1tm17tk.apps.googleusercontent.com',
    offlineAccess: true,
  });

  useEffect(() => {
    const onForegroundNotification = (notification: any) => {
      console.log('foregroundWillDisplay', notification);
      Vibration.vibrate(2000);
    };

    OneSignal.Notifications.addEventListener('click', onForegroundNotification);

    return () => {
      OneSignal.Notifications.removeEventListener(
        'foregroundWillDisplay',
        onForegroundNotification,
      );
    };
  }, []);

  const LoadingIndicator = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F5F5F5',
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
