import {
  HANDLE_BRANCH,
  HANDLE_CATEGORY,
  HANDLE_LOCATION,
  RESET_VALUES,
} from "../utils/actionNames";

export const HandleLocation = (payload) => {
  return {
    type: HANDLE_LOCATION,
    payload,
  };
};

export const HandleBranch = (payload) => {
  return {
    type: HANDLE_BRANCH,
    payload,
  };
};

export const HandleCategory = (payload) => {
  return {
    type: HANDLE_CATEGORY,
    payload,
  };
};

export const ResetValues = (payload) => {
  return {
    type: RESET_VALUES,
    payload,
  };
};
