import {
  Linking,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {LoginStyle} from './LoginStyle';
import {
  requestLogInAction,
  saveReferralCodeAction,
} from '../../store/action/loginAction';
import {facebook, google} from '../../utils/string';
import LoadingIndicators from './components/LodingIndicators';
import {ProfileStack} from '../../navigator/ProfileStack';
import {requestMoviesAction} from '../../store/action/MoviesAction';

const LoginScreen = () => {
  const isSignedIn = useSelector(
    (state: RootState) => state.LoginData.isSignedIn,
  );
  const referralCode = useSelector(
    (state: RootState) => state.LoginData.referralCode,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestMoviesAction());
  }, []);
  const isLoading = useSelector(
    (state: RootState) => state.LoginData.isLoading,
  );
  useEffect(() => {
    Linking.getInitialURL().then(url => {
      const myarr = url?.split('/');
      const path = myarr ? myarr[myarr.length - 2] : '';
      const referral = myarr ? myarr[myarr.length - 1] : '';

      if (!isSignedIn) {dispatch(saveReferralCodeAction(referral));}
      else if (path == 'referral')
        {ToastAndroid.show("You can't use referral", 200);}
    });
  }, []);
  console.log(referralCode);
  if (isLoading) {
    return <LoadingIndicators />;
  }

  if (isSignedIn) {
    return <ProfileStack />;
  }

  return (
    <View style={LoginStyle.container}>
      <Text style={LoginStyle.title}>WelCome on IMDB!</Text>
      <Text style={LoginStyle.subtitle}>Sign in to continue</Text>
      {<Text style={LoginStyle.subtitle}>{referralCode}</Text>}

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
