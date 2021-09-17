import { Fab, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "./Components/Navbar";
import { fetchdata } from "./reduxComponents/action";
import MessageIcon from "@material-ui/icons/Message";
import { Route, Switch } from "react-router";
import { Start } from "./screens/Start";
import { Home } from "./screens/Home";

const styles = makeStyles({
  mainContainer: {
    maxWidth: "100vw",
  },
  fab: {
    position: "fixed",
    bottom: "3rem",
    right: "3rem",
    height: "4.5rem",
    width: "4.5rem",
    backgroundColor: "#3887f6",
    color: "white",
    zIndex: "999",
    fontSize: "30px",
    "&:hover": {
      backgroundColor: "#3887f6",
      color: "white",
      height: "5.5rem",
      width: "5.5rem",
    },
  },
});

export const Assignment40QuizApp = () => {
  const classes = styles();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchdata());
  }, []);

  const { loading } = useSelector((state) => {
    return state.dataReducer;
  });

  return (
    <div className={classes.mainContainer}>
      <Navbar />

      {loading ? (
        <Typography>{""}</Typography>
      ) : (
        <Switch>
          <Route exact path="/" component={Start} />
          <Route exact path="/:id" component={Home} />
        </Switch>
      )}
      <Fab className={classes.fab}>
        <MessageIcon />
      </Fab>
    </div>
  );
};
