import { ADD_TO_CART } from "../action/shop.type";

const initialState = {
  exams: [],
};

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
      };
    default:
      return state;
  }
};