import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const signOutWithGoogle = async () => {
  try {
    await GoogleSignin.signOut();
    console.log('sign out');
    return true;
  } catch (error) {
    console.error(error);
  }
  return false;
};
