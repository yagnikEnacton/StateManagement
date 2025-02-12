import {
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import updateNameCmp from './components/updateNameCmp';
import {useDispatch, useSelector} from 'react-redux';

import {RootState} from '../../../store/store';
import React from 'react';
import UpdateNameCmp from './components/updateNameCmp';
import {profileStyles} from './ProfileStyles';
import ProfileBlock from './components/ProfileBlock';
// import { UpdateName } from '../../../store/types';

const ProfileScreen = () => {
  const isSignedIn = useSelector(
    (state: RootState) => state.LoginData.isSignedIn,
  );
  if (!isSignedIn) {
    return (
      <View style={profileStyles.container}>
        <Text style={profileStyles.bioText}>Please Sign In First</Text>
      </View>
    );
  }

  return <ProfileBlock />;
};

export default ProfileScreen;
