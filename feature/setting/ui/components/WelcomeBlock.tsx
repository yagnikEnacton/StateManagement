import {Text} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../store/store';
import {SettingStyles} from '../SettingStyle';

const WelcomeBlock = () => {
  const userName = useSelector((state: RootState) => state.LoginData.user);
  const {t} = useTranslation();
  return (
    <>
      <Text style={SettingStyles.title}>{t('Settings')}</Text>
      <Text style={SettingStyles.greeting}>
        {t('Welcome')}, {userName || 'User'}!
      </Text>
    </>
  );
};

export default WelcomeBlock;
