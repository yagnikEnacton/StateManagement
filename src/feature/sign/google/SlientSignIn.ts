import {
  GoogleSignin,
  isNoSavedCredentialFoundResponse,
  isSuccessResponse,
} from '@react-native-google-signin/google-signin';

export const getCurrentUserWithGoogle = async () => {
  try {
    const response: any = await GoogleSignin.signInSilently();

    if (isSuccessResponse(response)) {
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
