import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SettingStyles} from '../../../setting/ui/SettingStyle';
import {useDispatch, useSelector} from 'react-redux';
import {requestLogOutAction} from '../../../../store/action/loginAction';
import {RootState} from '../../../../store/store';
import {useTranslation} from 'react-i18next';

const SignOutBtn = () => {
  const loginType = useSelector(
    (state: RootState) => state.LoginData.loginType,
  );
  const {t} = useTranslation();
  const dispatch = useDispatch();
  return (
    <>
      {/* Sign Out Button */}
      <TouchableOpacity
        style={SettingStyles.buttonSecondary}
        onPress={() => {
          // waitForSignOutWithGoogle();
          dispatch(requestLogOutAction(loginType));
          // signOutWithFb();
        }}>
        <Text style={SettingStyles.buttonText}>{t('Sign Out')}</Text>
      </TouchableOpacity>
    </>
  );
};

export default SignOutBtn;
