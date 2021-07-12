import {
  ADD_INPUT,
  ADD_LANGUAGE,
  HANDLE_CHANGE,
  REMOVE_BOX,
  RESET_DATA,
} from "../utils/actionNames";

const initialState = {
  inputs: [],
  lang: [],
  inputinStringForm: [],
};

export const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INPUT:
      return {
        ...state,
        inputs: [...state.inputs, action.payload],
        lang: [...state.lang, ""],
        inputinStringForm: [...state.inputinStringForm, ""],
      };

    case HANDLE_CHANGE:
      return {
        ...state,
        inputs: state.inputs.map((input, index) =>
          index !== action.payload.id ? input : action.payload.arrayValue
        ),
        inputinStringForm: state.inputinStringForm.map((inputInString, index) =>
          index !== action.payload.id
            ? inputInString
            : action.payload.stringvalue
        ),
      };

    case ADD_LANGUAGE:
      return {
        ...state,
        lang: state.lang.map((language, index) =>
          index !== action.payload.id ? language : action.payload.value
        ),
      };

    case REMOVE_BOX:
      return {
        ...state,
        inputs: state.inputs.filter((input, index) => index !== action.payload),
        lang: state.lang.filter((language, index) => index !== action.payload),
        inputinStringForm: state.inputinStringForm.filter(
          (inputInString, index) => index !== action.payload
        ),
      };

    case RESET_DATA:
      return {
        ...state,
        inputs: [],
      };

    default:
      return state;
  }
};
