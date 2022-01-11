import {
  FETCH_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS,
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

export const fetchdataRandom = (count) => {
  console.log(count);
  return (dispatch) => {
    dispatch(fetchRequest());
    axios
      .get(`https://goquotes-api.herokuapp.com/api/v1/random?count=${count}`)
      .then((res) => {
        const data = res.data.quotes;
        dispatch(fetchSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchFailure(error.message));
      });
  };
};

export const fetchdataSpecific = (val) => {
  return (dispatch) => {
    dispatch(fetchRequest());
    axios
      .get(
        `https://goquotes-api.herokuapp.com/api/v1/random/100?type=tag&val=${val}`
      )
      .then((res) => {
        const data = res.data.quotes;
        dispatch(fetchSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchFailure(error.message));
      });
  };
};
