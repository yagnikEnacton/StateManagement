import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import LoadingIndicators from './components/LodingIndicators';
import SignInBtn from './components/SignInBtn';
import SignOutBtn from './components/SignOutBtn';

const SettingScreen = () => {
  const isSignedIn = useSelector(
    (state: RootState) => state.LoginData.isSignedIn,
  );

  const isLoading = useSelector(
    (state: RootState) => state.LoginData.isLoading,
  );
  if (isLoading) {
    return <LoadingIndicators />;
  }
  if (!isSignedIn) {
    return <SignInBtn />;
  }

  return <SignOutBtn />;
};

export default SettingScreen;
