import { Button, makeStyles, Slide, Typography } from "@material-ui/core";
import React from "react";

const styles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    padding: "78px 0 50px 10%",
  },
  leftMainContainer: {
    width: "40%",
  },
  rightMainContainer: {
    width: "50%",
  },
  image: {
    width: "100%",
    marginLeft: "120px",
  },
  heading: {
    fontSize: "40px",
    letterSpacing: "1px",
    fontWeight: "700",
    color: "#4e5868",
    fontFamily: "ui-monospace",
    marginBottom: "15px",
  },
  subHeading: {
    fontSize: "25px",
    letterSpacing: "1px",
    fontFamily: "ui-monospace",
  },
  button: {
    margin: "20px 30px 0 0",
    borderRadius: "26px",
    fontSize: "17px",
    textTransform: "none",
    padding: "15px",
    width: "141px",
    color: "white",
    backgroundColor: "#a07cc5",
    fontWeight: "900",
    "&:hover": {
      color: "#a07cc5",
      backgroundColor: "white",
      position: "relative",
      bottom: "3px",
    },
  },
});

export const Introduction = () => {
  const classes = styles();

  return (
    <div className={classes.container}>
      <div className={classes.leftMainContainer}>
        <Slide direction="down" in={true} mountOnEnter unmountOnExit>
          <Typography className={classes.heading}>
            {"Just sit & relax while we take care of your business needs."}
          </Typography>
        </Slide>
        <Slide direction="down" in={true} mountOnEnter unmountOnExit>
          <Typography className={classes.subHeading}>
            {
              "We make your spending stress-free for you to have the perfect control."
            }
          </Typography>
        </Slide>
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
          <div className={classes.buttonContainer}>
            <Button variant={"contained"} className={classes.button}>
              {"Explore Now"}
            </Button>
            <Button variant={"contained"} className={classes.button}>
              {"Contact Us"}
            </Button>
          </div>
        </Slide>
      </div>
      <div className={classes.rightMainContainer}>
        <img
          className={classes.image}
          src="../images/assignment38/photo3.png"
          alt="Intro"
        />
      </div>
    </div>
  );
};
