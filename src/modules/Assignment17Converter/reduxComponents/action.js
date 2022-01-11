import {
  ADD_INPUT,
  ADD_LANGUAGE,
  HANDLE_CHANGE,
  RESET_DATA,
  REMOVE_BOX,
} from "../utils/actionNames";

export const addInput = (payload) => {
  return {
    type: ADD_INPUT,
    payload: payload,
  };
};

export const HandleChange = (payload) => {
  return {
    type: HANDLE_CHANGE,
    payload: payload,
  };
};

export const addLanguage = (payload) => {
  return {
    type: ADD_LANGUAGE,
    payload: payload,
  };
};

export const removeBox = (payload) => {
  return {
    type: REMOVE_BOX,
    payload: payload,
  };
};

export const resetData = () => {
  return {
    type: RESET_DATA,
  };
};
