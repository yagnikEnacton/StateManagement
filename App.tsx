import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';

import RootTab from './navigator/navigator';
import {Provider} from 'react-redux';
import {persister, store} from './store/store';
import {PersistGate} from 'redux-persist/integration/react';
import {ActivityIndicator, View} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

function App(): React.JSX.Element {
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

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '113251114482-dt13jlim8o0msm46gdg41vd8g1tm17tk.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);
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
