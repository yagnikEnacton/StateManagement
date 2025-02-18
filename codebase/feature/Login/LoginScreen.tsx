import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {HomeTab} from '../../navigator/HomeTab';
import {LoginStyle} from './LoginStyle';
import {requestLogInAction} from '../../store/action/loginAction';
import {facebook, google} from '../../utils/string';
import LoadingIndicators from './components/LodingIndicators';

const LoginScreen = () => {
  const isSignedIn = useSelector(
    (state: RootState) => state.LoginData.isSignedIn,
  );
  const dispatch = useDispatch();
  const isLoading = useSelector(
    (state: RootState) => state.LoginData.isLoading,
  );
  if (isLoading) {
    return <LoadingIndicators />;
  }

  if (isSignedIn) {
    return <HomeTab />;
  }

  return (
    <View style={LoginStyle.container}>
      <Text style={LoginStyle.title}>BookMyShow Clone</Text>
      <Text style={LoginStyle.subtitle}>Sign in to continue</Text>

      {/* Google Login Button */}
      <TouchableOpacity
        style={LoginStyle.button}
        onPress={() => {
          dispatch(requestLogInAction(google));
        }}>
        <Text style={LoginStyle.buttonText}>Sign in with Google</Text>
      </TouchableOpacity>

      {/* Facebook Login Button */}
      <TouchableOpacity
        style={LoginStyle.button}
        onPress={() => {
          dispatch(requestLogInAction(facebook));
        }}>
        <Text style={LoginStyle.buttonText}>Sign in with Facebook</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={LoginStyle.footer}>
        <Text style={LoginStyle.footerText}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={LoginStyle.footerLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
