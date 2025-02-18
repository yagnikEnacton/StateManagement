import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../feature/ProfileScreen/ProfileScreen';
import SettingScreen from '../feature/SettingScreen/SettingScreen';
import {HomeTab} from './HomeTab';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {requestProductAction} from '../store/action/userAction';

const Stack = createStackNavigator();

export const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeTab">
      <Stack.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};
