import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  LogIn,
  LogOut,
  ModalVisibility,
  RequestProducts,
  UpdateName,
} from '../types';
import {
  clearData,
  setOneData,
  updateOneData,
} from '../AsyncStorage/aynncStorageFn';

export const logInAction = () => {
  setOneData('State', {isSignedIn: true});
  return {
    type: LogIn,
    payload: true,
  };
};
export const logOutAction = () => {
  clearData();
  setOneData('State', {isSignedIn: false});
  return {
    type: LogOut,
    payload: false,
  };
};
export const updateNameAction = (userName: string) => {
  updateOneData('State', {user: userName});
  return {
    type: UpdateName,
    payload: userName,
  };
};
export const modelVisibilityAction = (isModalVisible: boolean) => {
  return {
    type: ModalVisibility,
    payload: isModalVisible,
  };
};

// export const isLoadingAction = (isLoading: boolean) => {
//   return {
//     type: 'IsLoading',
//     payload: isLoading,
//   };
// }

// when thunk is used
// export const getUserProductsAction = () => {
//   return async (dispatch: Dispatch) => {
//     try {
//       const URL = 'https://fakestoreapi.com/products/';
//       //   let response = await fetch(URL);
//       //   let data = await response.json();

//       const {data} = await axios.get(URL);

//       dispatch({
//         type:GetUserProducts,
//         payload:data
//       })
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };

// when saga is used
// export const getUserProductsAction = () => {
//   console.log('getUserProductsAction in action');
//   return {type: GetUserProducts};
// };

export const requestProductAction = (apiOffset: number) => {
  // console.log('requestProductAction in action');
  return {type: RequestProducts, payload: apiOffset};
};
