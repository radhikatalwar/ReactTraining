import {
  ADD_PRODUCT,
  CHANGE_COLOR,
  HANDLE_CHANGE,
  RESET_PRODUCT,
} from "../utils/actionNames";

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
    case HANDLE_CHANGE:
      return {
        ...state,
        products: state.products.map((product, index) =>
          index !== action.payload.id
            ? product
            : { ...product, [action.payload.name]: action.payload.value }
        ),
      };
    default:
      return state;
  }
};
