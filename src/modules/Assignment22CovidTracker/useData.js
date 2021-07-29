import { useSelector } from "react-redux";

const useData = (place) => {
  const { data } = useSelector((state) => {
    return state.dataReducer;
  });

  var IndiaPlaces = [];
  var IndiaCases = [];

  Object.entries(data["India"]).forEach(([city, covidData]) => {
    if (city !== "All") {
      IndiaPlaces.push(city);
      IndiaCases.push(covidData);
    }
  });

  const graphDataIndia = {
    datasets: [
      {
        data: IndiaCases.map((val) => val["confirmed"]),
        backgroundColor: place === "India" ? "#123123" : "#b50d12",
        label: "Total Cases",
      },
    ],
    labels: IndiaPlaces.map((c) => c),
  };

  var WorldCases = [];

  Object.entries(data).forEach(([value, covidData]) => {
    WorldCases.push(covidData[Object.keys(covidData)[0]]);
  });

  var filteredWorldCases = WorldCases.filter(
    (covidData) =>
      covidData["confirmed"] > 100000 && covidData["confirmed"] < 100000000
  );

  const graphDataWorld = {
    datasets: [
      {
        data: filteredWorldCases.map((val) => val["confirmed"]),
        backgroundColor: place === "India" ? "#123123" : "#b50d12",
        label: "Total Cases",
      },
    ],
    labels: filteredWorldCases.map((c) => c["country"]),
  };
  console.log(IndiaPlaces, IndiaCases);
  return {
    graphDataWorld,
    graphDataIndia,
    IndiaCases,
    WorldCases,
    IndiaPlaces,
  };
};

export default useData;
