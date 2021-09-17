import { Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const styles = makeStyles({
  rightContainer: {
    width: "75%",
    padding: "90px 15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    margin: "22px 0",
    fontSize: "30px",
    color: "#2d81f7",
  },
  subHeading: {
    letterSpacing: "1px",
    fontSize: "20px",
    margin: "0 50px",
  },
  link: {
    textDecoration: "none",
  },
  button: {
    margin: "40px 20px",
    backgroundColor: "#2d81f7",
    color: "white",
    textTransform: "none",
    padding: "7px 20px",
    fontWeight: "900",
    "&:hover": {
      backgroundColor: "#2d81f7",
      color: "white",
    },
  },
});

export const Right = () => {
  const classes = styles();

  return (
    <div className={classes.rightContainer}>
      <Typography className={classes.heading}>
        {"Support distance and in-person learning."}
      </Typography>
      <Typography className={classes.subHeading}>
        {
          "Our App plans are designed to support students and teachers through distance learning and in the transition back to the classroom.Every quiz and lesson on Quizizz can be accessed from any device, live or asynchronously, and teachers always get great data."
        }
      </Typography>
      <Link to={`/1`} className={classes.link}>
        <Button className={classes.button}>{"Start Test"}</Button>
      </Link>
    </div>
  );
};
