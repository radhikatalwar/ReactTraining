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
  HANDLE_DRAWER,
} from "../utils/actionNames";
import uuid from "uuid/dist/v4";

const initialValues = {
  name: true,
  contactdetails: true,
  skills: true,
  language: false,
  hobbies: false,
  goal: true,
  experience: true,
  history: true,
  cocurriculam: false,
};

const initialWorkExperience = {
  position: "Position",
  companyName: "Company Name",
  dates: "From - to",
  description: "Please Describe Your Work!",
};

const initialAcademicHistory = {
  institute: "Institution Name",
  level: "Level",
  percentage: "Percentage/CGPA",
  passingyear: "Paasing Year",
};

const infoValues = {
  name: "Your Name",
  mobile: "9876543210",
  email: "abcd@gmail.com",
  address: "Your House-No., <br> Your Colony, <br> Your District,Your State",
  skills: "-> React.js <br> -> Java  <br> -> Data & Structures <br> -> MySQL",
  language:
    "-> English <br> -> Punjabi  <br> -> Hindi <br> -> German <br><br> Write All Languages You Know!",
  hobbies:
    "-> Outdoor activities.<br> -> Playing an instrument.<br> -> Team or individual sports. <br> -> Painting",
  goal: "A resourceful individual with a proven track record in implementing successful marketing strategies, boosting organic traffic, and improving search rankings seeks a position of Marketing Associate at ABC company to maximize brand awareness and revenue through integrated marketing communications.",
  cocurriculam:
    "Co-curricular activities are activities that take place outside the classroom but reinforce or supplement classroom curriculum in some way. <br><br>They are ungraded and do not offer any form of academic credit, but they do provide complementary learning of some form.<br><br> ",
};

const initialState = {
  download: false,
  parts: initialValues,
  details: infoValues,
  color: "black",
  experience: [
    { ...initialWorkExperience, id: uuid() },
    { ...initialWorkExperience, id: uuid() },
    { ...initialWorkExperience, id: uuid() },
  ],
  history: [
    { ...initialAcademicHistory, id: uuid() },
    { ...initialAcademicHistory, id: uuid() },
    { ...initialAcademicHistory, id: uuid() },
  ],
  drawer: true,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE:
      return {
        ...state,
        parts: {
          ...state.parts,
          [action.payload.value]: action.payload.newValue,
        },
      };

    case HANDLE_DETAILS:
      return {
        ...state,
        details: {
          ...state.details,
          [action.payload.name]: action.payload.currVal,
        },
      };

    case HANDLE_COLOR:
      return {
        ...state,
        color: action.payload,
      };

    case ADD_WORK_EXPERIENCE:
      return {
        ...state,
        experience: [
          ...state.experience,
          { ...initialWorkExperience, id: uuid() },
        ],
      };

    case HANDLE_WORK_EXPERIENCE:
      return {
        ...state,
        experience: state.experience.map((experienceInner) =>
          experienceInner.id !== action.payload.id
            ? experienceInner
            : {
                ...experienceInner,
                [action.payload.key]: action.payload.value,
              }
        ),
      };

    case REMOVE_WORK_EXPERIENCE:
      return {
        ...state,
        experience: state.experience.filter(
          (experienceInner) => experienceInner.id !== action.payload.id
        ),
      };

    case ADD_ACADEMIC_HISTORY:
      return {
        ...state,
        history: [...state.history, { ...initialAcademicHistory, id: uuid() }],
      };

    case HANDLE_DRAWER:
      return {
        ...state,
        drawer: action.payload,
      };

    case HANDLE_ACADEMIC_HISTORY:
      return {
        ...state,
        history: state.history.map((historyInner) =>
          historyInner.id !== action.payload.id
            ? historyInner
            : {
                ...historyInner,
                [action.payload.key]: action.payload.value,
              }
        ),
      };

    case REMOVE_ACADEMIC_HISTORY:
      return {
        ...state,
        history: state.history.filter(
          (historyInner) => historyInner.id !== action.payload.id
        ),
      };

    case HANDLE_DOWNLOAD:
      return {
        ...state,
        download: action.payload,
      };

    default:
      return state;
  }
};

export default dataReducer;
