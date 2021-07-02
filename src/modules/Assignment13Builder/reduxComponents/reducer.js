import { ADD_PRODUCT, CHANGE_COLOR, RESET_PRODUCT } from "../utils/actionNames";

const initialState = {
  products: [],
  color: "#177fe4",
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case RESET_PRODUCT:
      return {
        ...state,
        products: [],
      };
    case CHANGE_COLOR:
      return {
        ...state,
        color: action.payload,
      };
    default:
      return state;
  }
};
