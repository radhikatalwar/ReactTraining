import { Fab, makeStyles } from "@material-ui/core";
import React from "react";
import { db } from "../firebase";
import { CloudFirestore } from "./CloudFirestore";
import { ConnectApp } from "./ConnectApp";
import { CreateFirebase } from "./CreateFirebase";
import { Introduction } from "./Introduction";
import { ReadData } from "./ReadData";
import { UpdateData } from "./Update Data";
import MessageIcon from "@material-ui/icons/Message";
import { Datatype } from "./Datatype";
import { Beautify } from "./Beautify";

const styles = makeStyles({
  mainContainer: {
    padding: "29px 5%",
  },
  fab: {
    position: "fixed",
    bottom: "3rem",
    right: "3rem",
    height: "4.5rem",
    width: "4.5rem",
    backgroundColor: "white",
    color: "black",
    zIndex: "999",
    fontSize: "30px",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
      height: "5.5rem",
      width: "5.5rem",
    },
  },
});

const obj = {
  style: "hello",
  main: ["main1", "main2"],
  sub: "subhello",
};

export const Main = () => {
  const classes = styles();

  const handleSubmit = () => {
    var DocRef = db.collection("Test4").doc("sample1");
    // DocRef.set({ style: "hello", main: ["main1", "main2"], sub: "subhello" });
    DocRef.set(obj);
    console.log(obj);
  };

  return (
    <div className={classes.mainContainer}>
      <Introduction />
      <ConnectApp />
      <CloudFirestore />
      <CreateFirebase />
      <ReadData />
      <UpdateData />
      <Datatype />
      <Beautify />
      <Fab className={classes.fab} onClick={handleSubmit}>
        <MessageIcon />
      </Fab>
    </div>
  );
};
