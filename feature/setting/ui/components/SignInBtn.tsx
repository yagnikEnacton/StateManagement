import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {requestLogInAction} from '../../../../store/action/loginAction';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import {facebook, google} from '../../../../utils/string';
import {SettingStyles} from '../SettingStyle';
import {useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';

const SignInBtn = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  return (
    <View style={SettingStyles.container}>
      <View>
        <Text style={SettingStyles.message}>{t('Please Sign In First')}</Text>
      </View>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => {
          // initiate sign in
          dispatch(requestLogInAction(google));
        }}
      />
      <TouchableOpacity
        style={SettingStyles.buttonPrimary}
        onPress={() => {
          dispatch(requestLogInAction(facebook));
        }}>
        <Text style={SettingStyles.buttonText}>Sign In With Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInBtn;

const styles = StyleSheet.create({});
