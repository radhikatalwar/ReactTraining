import { ADD_DATA, SELECT_DONE, SELECT_IMAGE } from "../utils/actionNames";

const initialState = {
  data: {},
  select: new Array(12).fill(false),
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        data: { ...state.data, [action.payload]: [] },
      };
    case SELECT_IMAGE:
      return {
        ...state,
        select: state.select.map((val, i) =>
          i === action.payload ? !val : val
        ),
      };
    case SELECT_DONE:
      const found = Object.keys(state.data).indexOf(action.payload.val);
      if (found === -1) {
        state.data = { ...state.data, [action.payload.val]: [] };
      }

      for (const [key, value] of Object.entries(state.data)) {
        if (key === action.payload.val) {
          state.select.map((boolVal, i) => {
            boolVal === true && value.push(action.payload.imageURL[i]);
          });
        }
      }
      return {
        ...state,
        data: state.data,
        select: new Array(12).fill(false),
      };

    default:
      return state;
  }
};

export default dataReducer;
