import {View, Text, TouchableOpacity, Button} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {requestProductAction} from '../../../../store/action/userAction';
import {RootState} from '../../../../store/store';
import {HomeStyles} from '../HomeStyles';
import {OneSignal} from 'react-native-onesignal';
import {
  ONE_SIGNAL_API_KEY,
  ONE_SIGNAL_APP_ID,
  SEGMENT,
  ONE_SIGNAL_API_URL,
} from '../../../../utils/string';

// Constants for API
// Change this based on your segment

const GetStartedBlock = () => {
  const {user} = useSelector((state: RootState) => state.LoginData);
  const {apiOffset} = useSelector((state: RootState) => state.userData);
  const dispatch = useDispatch();
  const {t} = useTranslation();

  // Function to handle "Get Started" button press
  const handleGetStarted = () => {
    dispatch(requestProductAction(apiOffset));
  };
  return (
    <View style={[HomeStyles.content, HomeStyles.center]}>
      <Text style={HomeStyles.welcomeText}>
        {t('Welcome')}, {user || 'Guest'}!
      </Text>
      <Text style={HomeStyles.contentText}>
        {t('Explore our amazing app features!')}
      </Text>

      <TouchableOpacity style={HomeStyles.button} onPress={handleGetStarted}>
        <Text style={HomeStyles.buttonText}>{t('Get Started')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GetStartedBlock;
