import {
  GoogleSignin,
  isNoSavedCredentialFoundResponse,
  isSuccessResponse,
  SignInSilentlyResponse,
} from '@react-native-google-signin/google-signin';

export const getCurrentUserWithGoogle = async () => {
  try {
    const response: SignInSilentlyResponse =
      await GoogleSignin.signInSilently();

    if (isSuccessResponse(response)) {
      console.log({userInfo: response.data});
      return {type: true, data: response.data};
    } else if (isNoSavedCredentialFoundResponse(response)) {
      // user has not signed in yet, or they have revoked access
      return {type: false, data: null};
    }
  } catch (error) {
    console.error('Error in signInSilently:', error);
  }

  return {type: false, data: null};
};
