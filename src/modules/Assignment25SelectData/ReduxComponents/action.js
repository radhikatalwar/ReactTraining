import { ADD_DATA, SELECT_DONE, SELECT_IMAGE } from "../utils/actionNames";

export const addData = (data) => {
  return {
    type: ADD_DATA,
    payload: data,
  };
};

export const selectImage = (index) => {
  return {
    type: SELECT_IMAGE,
    payload: index,
  };
};

export const selectDone = (payload) => {
  return {
    type: SELECT_DONE,
    payload,
  };
};
