import {
  FETCH_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  SET_DATA,
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

export const setData = (data) => {
  return {
    type: SET_DATA,
    payload: data,
  };
};

export const fetchdata = () => {
  return (dispatch) => {
    dispatch(fetchRequest());
    axios
      .get("https://covid-api.mmediagroup.fr/v1/cases")
      .then((res) => {
        const data = res.data;
        dispatch(fetchSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchFailure(error.message));
      });
  };
};
