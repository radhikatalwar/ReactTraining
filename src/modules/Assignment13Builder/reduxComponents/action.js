import { ADD_PRODUCT, CHANGE_COLOR, RESET_PRODUCT } from "../utils/actionNames";

export const addProduct = (initialValues) => {
  return {
    type: ADD_PRODUCT,
    payload: initialValues,
  };
};

export const resetProducts = () => {
  return {
    type: RESET_PRODUCT,
  };
};

export const changeColor = (color) => {
  return {
    type: CHANGE_COLOR,
    payload: color,
  };
};

