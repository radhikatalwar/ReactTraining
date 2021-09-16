import {
  CLEAR_ANSWERS,
  FETCH_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  SET_SCORE,
  TRACK_ANSWERS,
} from "../utils/actionNames";

const initialState = {
  loading: false,
  data: [],
  error: "",
  track: new Array(15).fill(""),
  trackAnswers: new Array(15).fill(""),
  trackOptions: new Array(15).fill(""),
  score: 0,
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

    case TRACK_ANSWERS:
      return {
        ...state,
        track: state.track.map((val, i) =>
          i !== action.payload.id - 1 ? val : action.payload.status
        ),
        trackAnswers: state.trackAnswers.map((val, i) =>
          i !== action.payload.id - 1 ? val : action.payload.selectedOption
        ),
        trackOptions: state.trackOptions.map((val, i) =>
          i !== action.payload.id - 1 ? val : action.payload.selectedIndex
        ),
      };

    case SET_SCORE:
      return {
        ...state,
        score: action.payload,
      };

    case CLEAR_ANSWERS:
      return {
        ...state,
        track: new Array(15).fill(""),
        trackAnswers: new Array(15).fill(""),
        trackOptions: new Array(15).fill(""),
        score: 0,
      };

    default:
      return state;
  }
};

export default dataReducer;
