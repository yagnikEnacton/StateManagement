import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {persister, store} from './codebase/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import {ActivityIndicator, Vibration, View} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import LoginScreen from './codebase/feature/LoginScreen/LoginScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {OneSignal, LogLevel} from 'react-native-onesignal';

function App(): React.JSX.Element {
  GoogleSignin.configure({
    webClientId:
      '113251114482-dt13jlim8o0msm46gdg41vd8g1tm17tk.apps.googleusercontent.com',
    offlineAccess: true,
  });
  const linking = {
    prefixes: [
      'http://example.com',
      'https://example.com',
      'mychat://com.statemanagement',
    ],
    config: {
      screens: {
        Home: '',
        Details: 'details/:id',
        WatchList: 'watchlist',
      },
    },
  };
  OneSignal.Debug.setLogLevel(LogLevel.Verbose);
  OneSignal.initialize('dcf9cb3f-b280-4209-88d0-e04fd2ec9da1');
  OneSignal.Notifications.requestPermission(true);
  OneSignal.Notifications.addEventListener('click', () => {
    Vibration.vibrate([0, 2000, 100, 2000]);
  });
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
        <NavigationContainer linking={linking}>
          <LoginScreen />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
