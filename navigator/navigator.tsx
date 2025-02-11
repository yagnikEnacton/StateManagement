import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../feature/profile/ui/ProfileScreen';
import HomeScreen from '../feature/home/ui/HomeScreen';
import SettingScreen from '../feature/setting/ui/SettingScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {logInAction} from '../store/action/userAction';
import {getCurrentUser} from '../feature/sign/google/SlientSignIn';
import {useDispatch} from 'react-redux';
const Tab = createBottomTabNavigator();

const RootTab = () => {
  const dispatch = useDispatch();
  const waitForSignIn = async () => {
    const response = await getCurrentUser();
    console.log(response);
    const type = response?.type;
    if (type) dispatch(logInAction(response.data));
  };

  waitForSignIn();
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
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="settings-outline" size={size} color={color} />
          ),
        }}
        name="Settings"
        component={SettingScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="person-circle-outline" size={size} color={color} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default RootTab;
