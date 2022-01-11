import { makeStyles } from "@material-ui/core";
import React from "react";
import TodoList from "./Components/TodoList";

const styles = makeStyles({
  mainContainer: {
    minHeight: "100vh",
    width: "100%",
    background:
      "linear-gradient(90deg,rgba(48, 16, 255, 1) 0%,rgba(100, 115, 255, 1) 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  toDoApp: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    width: "80%",
    minHeight: "400px",
    background: "#161a2b",
    textAlign: "center",
    borderRadius: "10px",
    padding: "20px 30px",
    margin: "30px auto",
  },
});

export const Assignment26Todo = () => {
  const classes = styles();
  return (
    <div className={classes.mainContainer}>
      <div className={classes.toDoApp}>
        <TodoList />
      </div>
    </div>
  );
};
