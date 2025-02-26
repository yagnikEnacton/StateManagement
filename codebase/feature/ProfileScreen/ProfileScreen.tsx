import {View, Text, Button, TouchableOpacity, Pressable} from 'react-native';
import {useSelector} from 'react-redux';

import {RootState} from '../../store/store';
import React from 'react';
import {profileStyles} from './ProfileStyles';
import ProfileBlock from './components/ProfileBlock';
import {useTranslation} from 'react-i18next';
import SignOutBtn from './components/SignOutBtn';
import {useNavigation} from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/Ionicons';
const ProfileScreen = () => {
  const isSignedIn = useSelector(
    (state: RootState) => state.LoginData.isSignedIn,
  );
  const navigation = useNavigation();
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

      <Pressable
        style={profileStyles.button2}
        onPress={() => {
          navigation.navigate('Setting');
        }}>
        {/* <Icon name="settings-outline" size={30} color="#F44336" /> */}
        <Text style={profileStyles.button2Text}>Setting</Text>
      </Pressable>
      <Pressable
        style={profileStyles.button2}
        onPress={() => {
          navigation.navigate('WatchList');
        }}>
        {/* <Icon name="videocam-outline" size={30} color="#F44336" /> */}
        <Text style={profileStyles.button2Text}>WatchList</Text>
      </Pressable>
      <Pressable
        style={profileStyles.button2}
        onPress={() => {
          navigation.navigate('Favorites');
        }}>
        {/* <Icon name="heart-outline" size={30} color="#F44336" /> */}
        <Text style={profileStyles.button2Text}>Favorites</Text>
      </Pressable>
      <SignOutBtn />
    </View>
  );
};

export default ProfileScreen;
