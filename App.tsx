import {NavigationContainer} from '@react-navigation/native';
import React, {createContext, useEffect} from 'react';
import {Provider} from 'react-redux';
import {persister, store} from './store/store';
import {PersistGate} from 'redux-persist/integration/react';
import {ActivityIndicator, View} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useTranslation} from 'react-i18next';
import {LogLevel, OneSignal} from 'react-native-onesignal';
import i18n from './feature/i18next/i18n';
import {RootTab} from './navigator/navigator';

function App(): React.JSX.Element {
  const {t, i18n} = useTranslation();
  // const [isAllData, setAllData] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const value = await getOneData('State');
  //     if (value != null) {
  //       setAllData(true);
  //       initialState.isSignedIn = value.isSignIn;
  //       initialState.user = value.user;
  //     }
  //   };

  //   fetchData();
  // }, []);

  // return !isAllData ? (
  //
  // ) :

  // OneSignal.Debug.setLogLevel(LogLevel.Verbose);
  // OneSignal.initialize('dcf9cb3f-b280-4209-88d0-e04fd2ec9da1');
  // OneSignal.Notifications.requestPermission(true);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '113251114482-dt13jlim8o0msm46gdg41vd8g1tm17tk.apps.googleusercontent.com',
      offlineAccess: true,
    });

    // Notification event listen
  }, []);
  OneSignal.Debug.setLogLevel(LogLevel.Verbose);
  OneSignal.initialize('dcf9cb3f-b280-4209-88d0-e04fd2ec9da1');
  OneSignal.Notifications.requestPermission(true);
  OneSignal.Notifications.addEventListener('click', (event: any) => {
    console.log('OneSignal: notification clicked:', event);
  });
  const LoadingIndicator = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#4CAF50" />
      </View>
    );
  };

  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingIndicator />} persistor={persister}>
        <NavigationContainer>
          <RootTab></RootTab>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
export default App;
