import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../feature/ProfileScreen/ProfileScreen';
import SettingScreen from '../feature/SettingScreen/SettingScreen';
import {HomeTab} from './HomeTab';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {requestMoviesAction} from '../store/action/userAction';
import DetailsScreen from '../feature/Deatils/DetailsScreen';

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
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerShown: true,
          headerTitle: '',
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            backgroundColor: 'transparent',
          },
        }}
      />
    </Stack.Navigator>
  );
};
