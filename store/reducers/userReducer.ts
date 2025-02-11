import {
  LogIn,
  LogOut,
  ModalVisibility,
  ReceiveEmptyProducts,
  ReceiveProducts,
  ReceiveProductsError,
  RequestProducts,
  UpdateName,
} from '../types';

export const initialState = {
  user: '',
  profilePictureUrl: '',
  isSignedIn: false,
  userProducts: [],
  isModalVisible: false,
  isLoading: false,
  isEmptyProducts: false,
  apiOffset: 0,
};

export default (
  state = initialState,
  {type, payload}: {type: string; payload: any},
) => {
  switch (type) {
    case LogIn:
      console.log('log in reducer');
      console.log(payload);
      return {
        ...state,
        isSignedIn: true,
        user: !payload.userInfo.hasOwnProperty('user')
          ? payload.userInfo.name
          : payload.userInfo.user.givenName +
            ' ' +
            payload.userInfo.user.familyName,
        profilePictureUrl: !payload.userInfo.hasOwnProperty('user')
          ? payload.userInfo.imageURL
          : payload.userInfo.user.photo,
      };
    case LogOut:
      return {...state, isSignedIn: payload};
    case UpdateName:
      return {...state, user: payload};
    case RequestProducts:
      // console.log('RequestProducts in reducer');
      return {...state, isLoading: true};
    case ReceiveProducts:
      // console.log('ReceiveProducts in reducer');
      const currentProducts = state.userProducts.concat(payload.data);
      return {
        ...state,
        userProducts: currentProducts,
        isLoading: false,
        apiOffset: payload.offset,
      };
    case ReceiveEmptyProducts:
      return {
        ...state,
        isLoading: false,
        isEmptyProducts: true,
      };

    case ReceiveProductsError:
      // console.log('ReceiveProductsError in reducer');
      return {...state, isLoading: false};
    case ModalVisibility:
      return {...state, isModalVisible: payload};
  }
  return state;
};
