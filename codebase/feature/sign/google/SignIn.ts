import {
  GoogleSignin,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from '@react-native-google-signin/google-signin';

export const signInWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices();

    const response = await GoogleSignin.signIn();
    if (isSuccessResponse(response)) {
      console.log('User Info:', response.data);
      return {type: true, data: response.data};
    }

    // Handle case when sign-in is cancelled by the user
    console.log('Sign-in was cancelled by the user');
    return {type: false, data: null};
  } catch (error) {
    // Log errors in a structured manner
    console.error(
      'Error during Google sign-in:',
      JSON.stringify(error, null, 2),
    );

    // Handle specific error cases
    if (isErrorWithCode(error)) {
      switch (error.code) {
        case statusCodes.IN_PROGRESS:
          console.log('Sign-in operation is already in progress.');
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          console.log(
            'Play services are not available or outdated on this device.',
          );
          break;
        default:
          console.log('An unknown error occurred during sign-in.');
      }
    } else {
      console.log('Unexpected error occurred during Google sign-in.');
    }

    return {type: false, data: null};
  }
};
