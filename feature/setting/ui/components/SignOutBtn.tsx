import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SettingStyles} from '../SettingStyle';
import {useDispatch, useSelector} from 'react-redux';
import { requestLogOutAction } from '../../../../store/action/loginAction';
import { RootState } from '../../../../store/store';

const SignOutBtn = () => {
  const userName = useSelector((state: RootState) => state.LoginData.user);
  const loginType = useSelector(
    (state: RootState) => state.LoginData.loginType,
  );
  const dispatch = useDispatch();
  return (
    <View style={SettingStyles.container}>
      {/* Title */}
      <Text style={SettingStyles.title}>Settings</Text>
      <Text style={SettingStyles.greeting}>Welcome, {userName || 'User'}!</Text>

      {/* Sign Out Button */}
      <TouchableOpacity
        style={SettingStyles.buttonSecondary}
        onPress={() => {
          // waitForSignOutWithGoogle();
          dispatch(requestLogOutAction(loginType));
          // signOutWithFb();
        }}>
        <Text style={SettingStyles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignOutBtn;
