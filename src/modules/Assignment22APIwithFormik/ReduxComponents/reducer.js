import {
  FETCH_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  SET_DATA,
} from "../utils/actionNames";

const initialState = {
  data: [],
  error: "",
  graphDataWorld: {},
  graphDataIndia: {},
  IndiaCases: [],
  WorldCases: [],
  IndiaPlaces: [],
  filteredWorldCases: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: "",
      };
    case FETCH_FAILURE:
      return {
        ...state,
        data: [],
        error: action.payload,
      };
    case SET_DATA:
      Object.entries(action.payload["India"]).forEach(([city, covidData]) => {
        if (city !== "All") {
          state.IndiaPlaces.push(city);
          state.IndiaCases.push(covidData);
        }
      });

      state.graphDataIndia = {
        datasets: [
          {
            data: state.IndiaCases.map((val) => val["confirmed"]),
            backgroundColor: "#b03938",
            label: "Total Cases",
          },
        ],
        labels: state.IndiaPlaces.map((c) => c),
      };

      Object.entries(action.payload).forEach(([value, covidData]) => {
        state.WorldCases.push(covidData[Object.keys(covidData)[0]]);
      });

      state.filteredWorldCases = state.WorldCases.filter(
        (covidData) =>
          covidData["confirmed"] > 100000 && covidData["confirmed"] < 100000000
      );

      state.graphDataWorld = {
        datasets: [
          {
            data: state.filteredWorldCases.map((val) => val["confirmed"]),
            backgroundColor: "#b03938",
            label: "Total Cases",
          },
        ],
        labels: state.filteredWorldCases.map((c) => c["country"]),
      };

      console.log(state);
      return state;

    default:
      return state;
  }
};

export default dataReducer;
