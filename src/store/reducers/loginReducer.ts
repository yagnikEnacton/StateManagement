const initialState = {
  user: null,
  profilePictureUrl: null,
  isSignedIn: false,
  isLoading: false,
  loginType: null,
  referralCode: '',
};
export default (
  state = initialState,
  {type, payload}: {type: string; payload: any},
) => {
  return {...state, ...payload};
};
