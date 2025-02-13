import {View, Text} from 'react-native';
import React from 'react';
import {HomeStyles} from '../HomeStyles';
import {useTranslation} from 'react-i18next';

const SignInBlock = () => {
  const {t} = useTranslation();
  return (
    <View style={[HomeStyles.container, HomeStyles.center]}>
      <Text style={HomeStyles.contentText}>{t('Please Sign In First')}</Text>
    </View>
  );
};

export default SignInBlock;
