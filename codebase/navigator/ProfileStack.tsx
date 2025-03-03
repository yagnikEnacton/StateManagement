import {createStackNavigator} from '@react-navigation/stack';
import SettingScreen from '../feature/SettingScreen/SettingScreen';
import {HomeTab} from './HomeTab';
import DetailsScreen from '../feature/Deatils/DetailsScreen';
import WactchlistScreen from '../feature/ProfileScreen/WactchlistScreen';
import FavoriteScreen from '../feature/ProfileScreen/FavoriteScreen';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {requestMoviesAction} from '../store/action/MoviesAction';

const Stack = createStackNavigator();

export const ProfileStack = () => {
  const dispatch = useDispatch();

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
      <Stack.Screen
        name="
        "
        component={WactchlistScreen}
        options={{
          headerShown: true,
          headerTitle: 'Your Watchlists!!',
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            backgroundColor: 'white',
          },
        }}
      />
      <Stack.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          headerShown: true,
          headerTitle: 'Your Favorites!!',
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            backgroundColor: 'white',
          },
        }}
      />
    </Stack.Navigator>
  );
};
