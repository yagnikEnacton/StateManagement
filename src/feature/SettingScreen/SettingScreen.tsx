import React from 'react';
import WelcomeBlock from './components/WelcomeBlock';
import LanguageSetting from './components/LanguageSetting';
import {View} from 'react-native';
import {SettingStyles} from './SettingStyle';

const SettingScreen = () => {
  return (
    <View style={SettingStyles.container}>
      <WelcomeBlock />
      <LanguageSetting />
    </View>
  );
};

export default SettingScreen;
