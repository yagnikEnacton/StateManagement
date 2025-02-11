import {LoginManager} from 'react-native-fbsdk-next';

export const signOutWithFb = () => {
  console.log('User logged out from Facebook');
  try {
    LoginManager.logOut();
    console.log('sign out');
    return true;
  } catch (error) {
    console.error(error);
  }
  return false;
};
