import {
  FETCH_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS,
} from "../utils/actionNames";

const initialState = {
  data: [],
  error: "",
  loading: false,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: "",
        loading: false,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        data: [],
        error: action.payload,
        loading: false,
      };
    default: {
      return state;
    }
  }
};

export default dataReducer;
