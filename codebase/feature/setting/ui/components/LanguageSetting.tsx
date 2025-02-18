import {View, Text} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {t} from 'i18next';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../store/store';
import {profileStyles} from '../../../profile/ui/ProfileStyles';
import {setLanguage} from '../../../../store/action/userAction';
import {SettingStyles} from '../SettingStyle';

const LanguageSetting = () => {
  const dispatch = useDispatch();
  const handleLanguageChange = (language: string) => {
    dispatch(setLanguage(language)); // Dispatch action to change language
  };
  return (
    <View
      style={{
        width: 300,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}>
      <Text style={SettingStyles.languageText}>{t('Select Language')}</Text>

      <Picker
        selectedValue={useSelector(
          (state: RootState) => state.userData.currentLanguage,
        )}
        onValueChange={itemValue => handleLanguageChange(itemValue)} // Update language on selection
        style={SettingStyles.picker}>
        <Picker.Item label="English" value="en" />
        <Picker.Item label="Hindi" value="hi" />
        <Picker.Item label="Gujarati" value="guj" />
      </Picker>
    </View>
  );
};

export default LanguageSetting;
