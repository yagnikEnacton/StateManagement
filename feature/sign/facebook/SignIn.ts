import {Platform} from 'react-native';
import {AccessToken, LoginManager, Profile} from 'react-native-fbsdk-next';

export const signInWithFb = async () => {
  try {
    // Request login with public profile and email permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);
    console.log(result);

    if (result.isCancelled) {
      // User cancelled the login attempt
      console.log('Login was cancelled');
      return {type: false, data: null};
    }

    // If login is successful, retrieve the access token
    const accessToken = await AccessToken.getCurrentAccessToken();
    console.log('Access Token:', accessToken);

    if (!accessToken) {
      // No access token received, something went wrong
      console.error('Access token not received');
      return {type: false, data: null};
    }

    // Fetch the Facebook profile
    const profile = await Profile.getCurrentProfile();
    if (!profile) {
      // Profile couldn't be fetched
      console.error('Profile not found');
      return {type: false, data: null};
    }

    console.log('Facebook Profile:', profile);

    // Fetch user data from the Graph API using the access token
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${accessToken.accessToken}&fields=id,email`,
    );
    const data = await response.json();
    console.log('Facebook Data:', data);

    if (!data.email) {
      // If no email is found in the response
      console.error('No email found in the response');
      return {type: false, data: null};
    }

    // Successfully retrieved profile and email
    return {type: true, data: {...profile, email: data.email}};
  } catch (error) {
    // Handle any errors that occur during the process
    console.error('Error logging in with Facebook: ', error);
    return {type: false, data: null};
  }
};
