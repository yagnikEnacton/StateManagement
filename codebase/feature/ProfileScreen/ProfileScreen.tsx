import {View, Text, Pressable, Share, Alert} from 'react-native';
import {useSelector} from 'react-redux';
import {crashlytics} from '../../utils/env';
import {RootState} from '../../store/store';
import React from 'react';
import {profileStyles} from './ProfileStyles';
import ProfileBlock from './components/ProfileBlock';
import {useTranslation} from 'react-i18next';
import SignOutBtn from './components/SignOutBtn';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {crash} from '@react-native-firebase/crashlytics';
const ProfileScreen = () => {
  const isSignedIn = useSelector(
    (state: RootState) => state.LoginData.isSignedIn,
  );
  const referralCode = useSelector(
    (state: RootState) => state.LoginData.referralCode,
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

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `http://onelink.to/b5umrs/referral/${referralCode}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log(result);
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        console.log(result);
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <View style={profileStyles.container}>
      <ProfileBlock />

      <Pressable
        style={profileStyles.button2}
        onPress={() => {
          navigation.navigate('Setting');
        }}>
        <Icon name="settings-outline" size={30} color="#F44336" />
        <Text style={profileStyles.button2Text}>Setting</Text>
      </Pressable>
      <Pressable
        style={profileStyles.button2}
        onPress={() => {
          navigation.navigate('WatchList');
        }}>
        <Icon name="videocam-outline" size={30} color="#F44336" />
        <Text style={profileStyles.button2Text}>WatchList</Text>
      </Pressable>
      <Pressable
        style={profileStyles.button2}
        onPress={() => {
          navigation.navigate('Favorites');
        }}>
        <Icon name="heart-outline" size={30} color="#F44336" />
        <Text style={profileStyles.button2Text}>Favorites</Text>
      </Pressable>
      <Pressable
        style={profileStyles.button2}
        onPress={() => {
          console.log('Crashing');
          crash(crashlytics);
        }}>
        <Icon name="ban-outline" size={30} color="#F44336" />
        <Text style={profileStyles.button2Text}>Crash</Text>
      </Pressable>
      <SignOutBtn />
      <View style={{flexDirection: 'row', width: '90%', marginVertical: 20}}>
        <View
          style={{
            // flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
            borderWidth: 1,
            borderColor: 'grey',
            backgroundColor: 'white',
            // height: 50,
            padding: 10,

            marginHorizontal: 5,
          }}>
          <Text style={{fontSize: 20, color: 'lightgrey', fontWeight: '600'}}>
            Refer & Earn: {referralCode}
          </Text>
        </View>
        <Pressable
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
            borderWidth: 1,
            borderColor: 'grey',
            backgroundColor: 'white',
            // height: 50,
            padding: 10,
          }}
          onPress={() => {
            onShare();
          }}>
          <Icon name="share-social-outline" size={30} color="grey" />
        </Pressable>
      </View>
    </View>
  );
};

export default ProfileScreen;
