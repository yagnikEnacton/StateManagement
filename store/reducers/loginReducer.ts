import {
  LogInFailed,
  LogInRequest,
  LogInSuccess,
  LogOutFailed,
  LogOutRequest,
  LogOutSuccess,
} from '../../utils/types';
const initialState = {
  user: null,
  profilePictureUrl: null,
  isSignedIn: false,
  isLoading: false,
  loginType: null,
};
export default (
  state = initialState,
  {type, payload}: {type: string; payload: any},
) => {
  return {...state, ...payload};
};
