import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  ONE_SIGNAL_API_KEY,
  ONE_SIGNAL_APP_ID,
  SEGMENT,
  ONE_SIGNAL_API_URL,
} from '../../../../utils/string';
import {SettingStyles} from '../../../setting/ui/SettingStyle';

const SendNotification = () => {
  // Function to send push notification via OneSignal
  const sendNotification = () => {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        Authorization: ONE_SIGNAL_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        app_id: ONE_SIGNAL_APP_ID,
        contents: {en: 'Your message body here.'},
        included_segments: [SEGMENT],
        sound: 'none',
      }),
    };

    fetch(ONE_SIGNAL_API_URL, options)
      .then(res => res.json())
      .then(json => console.log('Notification response:', json))
      .catch(err => console.error('Error sending notification:', err));
  };
  return (
    <>
      <TouchableOpacity
        style={SettingStyles.buttonSecondary}
        onPress={sendNotification}>
        <Text style={SettingStyles.buttonText}>Send Notification</Text>
      </TouchableOpacity>
    </>
  );
};

export default SendNotification;
