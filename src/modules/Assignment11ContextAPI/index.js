import { makeStyles } from "@material-ui/core";
import axios from "axios";
import React, { createContext, useEffect, useReducer, useState } from "react";
import MainScreen from "./Components/MainScreen";
import {
  fetchError,
  fetchRequest,
  fetchSuccess,
} from "./screens/APIData/actions";
import { initialState, reducer } from "./screens/APIData/reducer";

const styles = makeStyles({
  smallContainer: {
    margin: "100px auto 20px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const usersContext = createContext();

const ContextAPI = () => {
  const classes = styles();

  const [mode, setMode] = useState("light");
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch(fetchRequest());
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        const data = res.data;
        dispatch(fetchSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  }, []);

  return (
    <div className={classes.mainContainer}>
      <usersContext.Provider
        value={{
          state,
          dispatch,
          mode,
          setMode: () => setMode(mode === "dark" ? "light" : "dark"),
        }}
      >
        <MainScreen />
      </usersContext.Provider>
    </div>
  );
};

export default ContextAPI;
