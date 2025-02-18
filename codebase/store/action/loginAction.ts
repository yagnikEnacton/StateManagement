import {LogInRequest, LogOutRequest} from '../../utils/types';

export const requestLogInAction = (loginType: string) => {
  return {type: LogInRequest, payload: {loginType: loginType, isLoading: true}};
};
export const requestLogOutAction = (loginType: string) => {
  return {
    type: LogOutRequest,
    payload: {loginType: loginType, isLoading: true},
  };
};
