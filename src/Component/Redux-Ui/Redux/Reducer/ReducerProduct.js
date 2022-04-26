import { ActionTypes } from '../Action/Actiontype';

const intial = {
  products: [],
  Multiproducts: []
};

export const ReducerProduct = (state = intial, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCT:
      return { ...state, products: action.payload };
    case ActionTypes.ADD_PRODUCT:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export const Multiproductreducer = (state = intial, action) => {
  switch (action.type) {
    case ActionTypes.SET_MULTIPRODUCT:
      return { ...state, Multiproducts: action.payload };
    case ActionTypes.ADD_MULTIPRODUCT:
      return { ...state, Multiproducts: action.payload };
    default:
      return state;
  }
};
