import {
  DEMO_VALUE,
  HANDLE_CHANGE,
  HANDLE_COLOR,
  HANDLE_FONTSIZE,
  HANDLE_TEMPLATE,
  HANDLE_TEMPLATE_SOURCECODE,
  RESET_DATA,
} from "../utils/actionNames";

export const HandleChange = (payload) => {
  return {
    type: HANDLE_CHANGE,
    payload,
  };
};

export const HandleColor = (payload) => {
  return {
    type: HANDLE_COLOR,
    payload,
  };
};

export const DemoValue = (value) => {
  return {
    type: DEMO_VALUE,
    payload: value,
  };
};

export const handleTemplate = (value) => {
  return {
    type: HANDLE_TEMPLATE,
    payload: value,
  };
};

export const handleFontSize = (value) => {
  return {
    type: HANDLE_FONTSIZE,
    payload: value,
  };
};

export const handleSourceCode = (payload) => {
  return {
    type: HANDLE_TEMPLATE_SOURCECODE,
    payload,
  };
};

export const resetData = () => {
  return {
    type: RESET_DATA,
  };
};
