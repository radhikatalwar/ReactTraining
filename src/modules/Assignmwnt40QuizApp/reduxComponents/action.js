import {
  CLEAR_ANSWERS,
  FETCH_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  SET_SCORE,
  TRACK_ANSWERS,
} from "../utils/actionNames";
import axios from "axios";

export const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  };
};

export const fetchSuccess = (data) => {
  return {
    type: FETCH_SUCCESS,
    payload: data,
  };
};

export const fetchFailure = (error) => {
  return {
    type: FETCH_FAILURE,
    payload: error,
  };
};

export const trackAnswers = (payload) => {
  return {
    type: TRACK_ANSWERS,
    payload,
  };
};

export const clearAnswers = () => {
  return {
    type: CLEAR_ANSWERS,
  };
};

export const setScore = (score) => {
  return {
    type: SET_SCORE,
    payload: score,
  };
};

export const fetchdata = () => {
  return (dispatch) => {
    dispatch(fetchRequest());
    axios
      .get(
        "https://opentdb.com/api.php?amount=15&category=18&difficulty=easy&type=multiple"
      )
      .then((res) => {
        const data = res.data;
        dispatch(fetchSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchFailure(error.message));
      });
  };
};
