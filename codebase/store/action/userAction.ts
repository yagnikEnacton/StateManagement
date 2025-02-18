import {
  CurrentLanguage,
  ModalVisibility,
  RequestProducts,
  UpdateName,
} from '../../utils/types';

// export const updateNameAction = (userName: string) => {
//   // updateOneData('State', {user: userName});
//   return {
//     type: UpdateName,
//     payload: userName,
//   };
// };
// export const modelVisibilityAction = (isModalVisible: boolean) => {
//   return {
//     type: ModalVisibility,
//     payload: isModalVisible,
//   };
// };
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
  return {type: RequestProducts, payload: {apiOffset: apiOffset}};
};

export const setLanguage = (currentLanguage: string) => {
  return {
    type: CurrentLanguage,
    payload: {currentLanguage: currentLanguage},
  };
};
