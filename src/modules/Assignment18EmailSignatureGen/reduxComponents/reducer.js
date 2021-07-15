import {
  HANDLE_CHANGE,
  HANDLE_COLOR,
  RESET_DATA,
  DEMO_VALUE,
  HANDLE_TEMPLATE,
  HANDLE_FONTSIZE,
  HANDLE_TEMPLATE_SOURCECODE,
} from "../utils/actionNames";

const initialValues = {
  fname: "",
  lname: "",
  jobTitle: "",
  department: "",
  companyName: "",
  officeNo: "",
  mobileNo: "",
  websiteURL: "",
  email: "",
  address: "",
  linkedin: "",
  facebook: "",
  twitter: "",
  linkedinIcon: "",
  facebookIcon: "",
  twitterIcon: "",
  profilePic: "",
  companyLogo: "",
};

const initialState = {
  user: initialValues,
  color: {
    themeColor: "#000000",
    textColor: "#000000",
    linkColor: "#000000",
  },
  sourceCode: {
    one: "",
    two: "",
    three: "",
  },
  demoValue: true,
  template: 1,
  size: "20px",
};

export const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE:
      return {
        ...state,
        user: { ...state.user, [action.payload.name]: action.payload.value },
      };
    case HANDLE_COLOR:
      return {
        ...state,
        color: { ...state.color, [action.payload.name]: action.payload.color },
      };
    case HANDLE_TEMPLATE:
      return {
        ...state,
        template: action.payload,
      };
    case HANDLE_FONTSIZE:
      return {
        ...state,
        size: action.payload,
      };
    case HANDLE_TEMPLATE_SOURCECODE:
      return {
        ...state,
        sourceCode: {
          ...state.sourceCode,
          [action.payload.name]: action.payload.code,
        },
      };
    case DEMO_VALUE:
      return {
        ...state,
        demoValue: action.payload,
      };
    case RESET_DATA:
      return initialState;
    default:
      return state;
  }
};
