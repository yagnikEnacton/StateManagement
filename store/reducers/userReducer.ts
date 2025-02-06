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

export let initialState = {
  user: 'John Doe',
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
      return {...state, isSignedIn: payload};
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
