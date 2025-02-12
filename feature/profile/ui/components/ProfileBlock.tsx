import {View, Text, Image} from 'react-native';
import React from 'react';
import {profileStyles} from '../ProfileStyles';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../store/store';

const ProfileBlock = () => {
  const userName = useSelector((state: RootState) => state.LoginData?.user);
  const profilePicture = useSelector(
    (state: RootState) => state.LoginData.profilePictureUrl,
  );
  return (
    <View style={profileStyles.container}>
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
