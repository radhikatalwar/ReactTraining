import {
  ADD_WORK_EXPERIENCE,
  HANDLE_CHANGE,
  HANDLE_COLOR,
  HANDLE_DETAILS,
  HANDLE_WORK_EXPERIENCE,
  REMOVE_WORK_EXPERIENCE,
  HANDLE_ACADEMIC_HISTORY,
  REMOVE_ACADEMIC_HISTORY,
  ADD_ACADEMIC_HISTORY,
  HANDLE_DOWNLOAD,
} from "../utils/actionNames";

export const HandleChange = (payload) => {
  return {
    type: HANDLE_CHANGE,
    payload,
  };
};

export const HandleDetails = (payload) => {
  return {
    type: HANDLE_DETAILS,
    payload,
  };
};

export const changeColor = (color) => {
  return {
    type: HANDLE_COLOR,
    payload: color,
  };
};

export const handleWorkExperience = (payload) => {
  return {
    type: HANDLE_WORK_EXPERIENCE,
    payload,
  };
};

export const addWorkExperience = () => {
  return {
    type: ADD_WORK_EXPERIENCE,
  };
};

export const removeWorkExperience = (payload) => {
  return {
    type: REMOVE_WORK_EXPERIENCE,
    payload,
  };
};

export const handleAcademicHistory = (payload) => {
  return {
    type: HANDLE_ACADEMIC_HISTORY,
    payload,
  };
};

export const addAcademicHistory = () => {
  return {
    type: ADD_ACADEMIC_HISTORY,
  };
};

export const removeAcademicHistory = (payload) => {
  return {
    type: REMOVE_ACADEMIC_HISTORY,
    payload,
  };
};

export const handleDownload = (download) => {
  return {
    type: HANDLE_DOWNLOAD,
    payload: download,
  };
};
