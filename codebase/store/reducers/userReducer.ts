import {
  ModalVisibility,
  ReceiveEmptyProducts,
  ReceiveProducts,
  ReceiveProductsError,
  RequestProducts,
  UpdateName,
} from '../../utils/types';
const initialState = {
  userProducts: [],
  isModalVisible: false,
  isLoading: false,
  isEmptyProducts: false,
  apiOffset: 0,
  currentLanguage: 'en',
};
export default (
  state = initialState,
  {type, payload}: {type: string; payload: any},
) => {
  switch (type) {
    case ReceiveProducts:
      const userProducts = state.userProducts.concat(payload.userProducts);
      return {
        ...state,
        userProducts: userProducts,
        isLoading: false,
        apiOffset: payload.apiOffset,
      };
    default:
      return {...state, ...payload};
  }
};
