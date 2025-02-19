import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../feature/HomeScreen/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTranslation} from 'react-i18next';
import {ProfileStack} from './ProfileStack';

import ProfileScreen from '../feature/ProfileScreen/ProfileScreen';
import DiscoverScreen from '../feature/Discover/DiscoverScreen';
const Tab = createBottomTabNavigator();

export const HomeTab = () => {
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopColor: 'transparent',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="home-outline" size={size} color={color} />
          ),
        }}
        name={t('Home')}
        component={HomeScreen}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <Icon name="person-circle-outline" size={size} color={color} />
          ),
        }}
        name={'Discover'}
        component={DiscoverScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <Icon name="person-circle-outline" size={size} color={color} />
          ),
        }}
        name={'Profile'}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
