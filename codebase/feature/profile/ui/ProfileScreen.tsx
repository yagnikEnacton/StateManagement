import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

import {RootState} from '../../../store/store';
import React from 'react';
import {profileStyles} from './ProfileStyles';
import ProfileBlock from './components/ProfileBlock';
import {useTranslation} from 'react-i18next';
import SignOutBtn from './components/SignOutBtn';
import SendNotification from './components/SendNotification';

const ProfileScreen = () => {
  const isSignedIn = useSelector(
    (state: RootState) => state.LoginData.isSignedIn,
  );
  const {t} = useTranslation();
  if (!isSignedIn) {
    return (
      <View style={profileStyles.container}>
        <Text style={profileStyles.bioText}>{t('Please Sign In First')}</Text>
      </View>
    );
  }

  return (
    <View style={profileStyles.container}>
      <ProfileBlock />
      <SendNotification />
      <SignOutBtn />
    </View>
  );
};

export default ProfileScreen;
