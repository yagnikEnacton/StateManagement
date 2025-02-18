import {View, Text, Button, TouchableOpacity, Pressable} from 'react-native';
import {useSelector} from 'react-redux';

import {RootState} from '../../store/store';
import React from 'react';
import {profileStyles} from './ProfileStyles';
import ProfileBlock from './components/ProfileBlock';
import {useTranslation} from 'react-i18next';
import SignOutBtn from './components/SignOutBtn';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
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
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 50,
          borderWidth: 1,
          borderColor: '#F44336',
          backgroundColor: 'white',
          height: 50,
          width: '90%',
          paddingHorizontal: 20,
          marginVertical: 10,
        }}
        onPress={() => {
          navigation.navigate('Setting');
        }}>
        <Icon name="settings-outline" size={30} color="#F44336" />
        <Text
          style={{
            marginLeft: 10,
            fontSize: 20,
            color: '#F44336',
            fontWeight: '600',
          }}>
          Setting
        </Text>
      </Pressable>

      <SignOutBtn />
    </View>
  );
};

export default ProfileScreen;
