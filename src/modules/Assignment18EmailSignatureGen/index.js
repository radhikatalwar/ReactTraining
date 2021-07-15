import { Fab, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Mainbar } from "./MainBar/Mainbar";
import { Sidebar } from "./SideBar/Sidebar";

const styles = makeStyles({
  mainContainer: {
    display: "flex",
    width: "100%",
  },
  fab: {
    position: "fixed",
    bottom: "2rem",
    right: "2rem",
    height: "4.5rem",
    width: "4.5rem",
    backgroundColor: "white",
    zIndex: "999",
  },
});

export const Assignment18EmailSignatureGen = () => {
  const classes = styles();
  return (
    <div className={classes.mainContainer}>
      <Sidebar />
      <Mainbar />
      <Fab className={classes.fab}>FAQs</Fab>
    </div>
  );
};
