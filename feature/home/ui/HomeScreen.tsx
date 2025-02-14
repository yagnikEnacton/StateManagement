import React from 'react';
import {Button, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {HomeStyles} from './HomeStyles';
import LoadingIndictor from './components/LoadingIndictor';
import ItemList from './components/ItemList';
import GetStartedBlock from './components/GetStartedBlock';
import i18n from '../../i18next/i18n';
import {useTranslation} from 'react-i18next';
const initI18n = i18n;

const HomeScreen = () => {
  const isSignedIn = useSelector(
    (state: RootState) => state.LoginData.isSignedIn,
  );
  const userProducts = useSelector(
    (state: RootState) => state.userData.userProducts || [],
  );
  const isLoading = useSelector((state: RootState) => state.userData.isLoading);
  const apiOffset = useSelector((state: RootState) => state.userData.apiOffset);
  const {t} = useTranslation();

  // Ensure that hooks are not conditionally rendered.

  if (isLoading && apiOffset == 0) {
    return <LoadingIndictor />;
  }

  return (
    <View style={HomeStyles.container}>
      <View style={HomeStyles.header}>
        <Text style={HomeStyles.headerText}>{t('Home')}</Text>
      </View>
      {userProducts.length === 0 ? <GetStartedBlock /> : <ItemList />}
    </View>
  );
};

export default HomeScreen;
