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
  const dispatch = useDispatch();
  const profilePicture = useSelector(
    (state: RootState) => state.LoginData.profilePictureUrl,
  );
  const {t} = useTranslation();

  const handleLanguageChange = (language: string) => {
    dispatch(setLanguage(language)); // Dispatch action to change language
  };

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
      <Text style={profileStyles.languageText}>{t('Select Language')}</Text>

      {/* User Name */}

      <Picker
        selectedValue={useSelector(
          (state: RootState) => state.userData.currentLanguage,
        )}
        onValueChange={itemValue => handleLanguageChange(itemValue)} // Update language on selection
        style={profileStyles.picker}>
        <Picker.Item label="English" value="en" />
        <Picker.Item label="Hindi" value="hi" />
        <Picker.Item label="Gujarati" value="guj" />
      </Picker>
    </View>
  );
};

export default ProfileBlock;
