import {
  HANDLE_BRANCH,
  HANDLE_CATEGORY,
  HANDLE_LOCATION,
  RESET_VALUES,
} from "../utils/actionNames";
import { data } from "../utils/data";

const initialState = {
  location: "defaultLocation",
  branch: "defaultBranch",
  selectedCategory: "",
  selected: false,
  BranchArray: {},
  CategoryArray: {},
  SubCategoryArray: {},
  branches: [],
  category: [],
  subcategory: [],
};

export const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_LOCATION:
      let BranchArray = data.data.locations.find((val) => {
        return val.name === action.payload.location;
      });

      return {
        ...state,
        location: action.payload.location,
        selected: action.payload.selected,
        BranchArray: BranchArray,
        branches: BranchArray.branches,
        branch: action.payload.branch,
      };

    case HANDLE_BRANCH:
      let CategoryArray = state.BranchArray.branches.find((val) => {
        return val.name === action.payload.branch;
      });
      return {
        ...state,
        branch: action.payload.branch,
        CategoryArray: CategoryArray,
        category: CategoryArray.categories,
      };

    case HANDLE_CATEGORY:
      let SubCategoryArray = state.CategoryArray.categories.find((val) => {
        return val.name === action.payload.category;
      });

      return {
        ...state,
        selectedCategory: action.payload.category,
        subcategory: SubCategoryArray.subcategories,
      };

    case RESET_VALUES:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
