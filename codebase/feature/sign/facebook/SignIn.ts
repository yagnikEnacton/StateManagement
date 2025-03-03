import {AccessToken, LoginManager, Profile} from 'react-native-fbsdk-next';

export const signInWithFb = async () => {
  try {
    // Request login with public profile and email permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      // User cancelled the login attempt

      return {type: false, data: null};
    }

    // If login is successful, retrieve the access token
    const accessToken = await AccessToken.getCurrentAccessToken();

    if (!accessToken) {
      return {type: false, data: null};
    }

    // Fetch the Facebook profile
    const profile = await Profile.getCurrentProfile();
    if (!profile) {
      // Profile couldn't be fetched

      return {type: false, data: null};
    }

    // Fetch user data from the Graph API using the access token
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${accessToken.accessToken}&fields=id,email`,
    );
    const data = await response.json();

    if (!data.email) {
      // If no email is found in the response

      return {type: false, data: null};
    }

    // Successfully retrieved profile and email
    return {type: true, data: {...profile, email: data.email}};
  } catch (error) {
    // Handle any errors that occur during the process
    return {type: false, data: null};
  }
};
