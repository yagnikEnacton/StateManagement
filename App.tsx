import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';

import RootTab from './navigator/navigator';
import {Provider} from 'react-redux';
import {persister, store} from './store/store';
import {PersistGate} from 'redux-persist/integration/react';
import {ActivityIndicator, View} from 'react-native';
import {getAllData, getOneData} from './store/AsyncStorage/aynncStorageFn';
import {initialState} from './store/reducers/userReducer';

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

  const LoadingIndicator = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#4CAF50" />
      </View>
    );
  };
  return (
    <Provider store={store}>
      {/* PersistGate ensures Redux persists */}
      <PersistGate loading={<LoadingIndicator />} persistor={persister}>
        <NavigationContainer>
          <RootTab></RootTab>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
