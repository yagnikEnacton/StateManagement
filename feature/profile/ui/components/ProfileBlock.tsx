import {View, Text, Image} from 'react-native';
import React from 'react';
import {profileStyles} from '../ProfileStyles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../store/store';
import {setLanguage} from '../../../../store/action/userAction';
import {Picker} from '@react-native-picker/picker';
import {useTranslation} from 'react-i18next';

const ProfileBlock = () => {
  const userName = useSelector((state: RootState) => state.LoginData?.user);

  const profilePicture = useSelector(
    (state: RootState) => state.LoginData.profilePictureUrl,
  );
  const {t} = useTranslation();

  return (
    <View style={profileStyles.profileContainer}>
      {/* Profile Picture */}
      <View style={profileStyles.profilePictureContainer}>
        <Image
          style={profileStyles.profilePicture}
          source={{
            uri: profilePicture,
          }}
        />
      </View>
      <Text style={profileStyles.nameText}>{userName}</Text>
    </View>
  );
};

export default ProfileBlock;
