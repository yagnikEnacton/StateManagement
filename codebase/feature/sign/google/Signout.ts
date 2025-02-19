import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const signOutWithGoogle = async () => {
  try {
    await GoogleSignin.signOut();
    return true;
  } catch (error) {
    console.error(error);
  }
  return false;
};
