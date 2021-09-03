import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { BackgroundImages } from "../../utils/images";
import { ImageContainer } from "./ImageContainer";

const styles = makeStyles({
  mainContainer: {
    background: `url(${BackgroundImages.HOMEBACKGROUND}) no-repeat center`,
    backgroundSize: "cover",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "space-around",
  },
  contentContainer: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  content: {
    color: "white",
    fontFamily: "sans-seriff",
    textAlign: "left",
  },
  heading: {
    fontSize: "76px",
  },
  subHeading: {
    fontSize: "40px",
  },
});

export const Home = () => {
  const classes = styles();

  return (
    <div className={classes.mainContainer}>
      <div className={classes.contentContainer}>
        <Typography className={`${classes.content} ${classes.heading}`}>
          {"Welcome to XRentals!"}
        </Typography>
        <Typography className={`${classes.content} ${classes.subHeading}`}>
          {"Please Select Location"}
        </Typography>
      </div>
      <ImageContainer />
    </div>
  );
};
