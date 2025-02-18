import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {persister, store} from './codebase/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import {ActivityIndicator, View} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import LoginScreen from './codebase/feature/LoginScreen/LoginScreen';

function App(): React.JSX.Element {
  GoogleSignin.configure({
    webClientId:
      '113251114482-dt13jlim8o0msm46gdg41vd8g1tm17tk.apps.googleusercontent.com',
    offlineAccess: true,
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
        <NavigationContainer>
          <LoginScreen />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
