import { makeStyles, Typography } from "@material-ui/core";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import BrushIcon from "@material-ui/icons/Brush";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import NotesIcon from "@material-ui/icons/Notes";
import { Template } from "./Templates/Template";
import { Details } from "./Details/Details";
import { ColorSet } from "./ColorSet/ColorSet";
import { Photo } from "./Photo./Photo";
import { useState } from "react";

const styles = makeStyles({
  sideBarContainer: {
    backgroundColor: "#33475b",
    width: "25%",
    color: "white",
    maxHeight: "100vh",
    overflow: "auto",
  },
  navIconBox: {
    backgroundColor: "#33475b",
    height: "5rem",
    position: "fixed",
    display: "flex",
    width: "25%",
    justifyContent: "space-between",
    zIndex: "999",
  },
  navIcon: {
    backgroundColor: "#425b76",
    width: "24.7%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "#33475b",
    },
  },
  ending: {
    margin: "30px 63px 20px",
    fontSize: "13px",
  },
});

export const Sidebar = () => {
  const classes = styles();
  const [value, setValue] = useState("template");

  return (
    <div className={classes.sideBarContainer}>
      <div className={classes.navIconBox}>
        <div className={classes.navIcon} onClick={() => setValue("template")}>
          <LocalMallIcon />
        </div>
        <div className={classes.navIcon} onClick={() => setValue("details")}>
          <NotesIcon />
        </div>
        <div className={classes.navIcon} onClick={() => setValue("colorSet")}>
          <BrushIcon />
        </div>
        <div className={classes.navIcon} onClick={() => setValue("photo")}>
          <PhotoLibraryIcon />
        </div>
      </div>
      {value === "template" ? <Template /> : ""}
      {value === "details" ? <Details /> : ""}
      {value === "colorSet" ? <ColorSet /> : ""}
      {value === "photo" ? <Photo /> : ""}
      <Typography className={classes.ending}>
        {"Copyright © 2021 HubSpot, Inc."}
      </Typography>
    </div>
  );
};
