import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const styles = makeStyles({
  heading: {
    fontSize: "33px",
    letterSpacing: "2px",
    fontWeight: "800",
  },
  mainContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0 0 30px",
  },
  leftMainContainer: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    padding: "40px 0",
    backgroundColor: "#f9f9f9",
  },
  rightMainContainer: {
    width: "45%",
  },
  subHeading: {
    fontSize: "18px",
    margin: "10px 0",
  },
});

export const Introduction = () => {
  const classes = styles();

  return (
    <>
      <Typography className={classes.heading}>
        {"Introduction to Firebase"}
      </Typography>
      <div className={classes.mainContainer}>
        <div className={classes.leftMainContainer}>
          <Typography variant="h5" className={classes.subHeading}>
            {
              "The Firebase Local Emulator Suite consists of individual service emulators built to accurately mimic the behavior of Firebase services. This means you can connect your app directly to these emulators to perform integration testing or QA without touching production data.For example, you could connect your app to the Cloud Firestore emulator to safely read and write documents in testing. "
            }
          </Typography>
          <Typography variant="h5" className={classes.subHeading}>
            {
              "These writes may trigger functions in the Cloud Functions emulator. However your app will still continue to communicate with production Firebase services when emulators are not available or configured."
            }
          </Typography>
          <Typography variant="h5" className={classes.subHeading}>
            {
              "These writes may trigger functions in the Cloud Functions emulator. However your app will still continue to communicate with production Firebase services when emulators are not available or configured."
            }
          </Typography>
        </div>

        <div className={classes.rightMainContainer}>
          <img
            src="https://firebase.google.com/docs/emulator-suite/images/emulator-suite-usecase.png"
            alt={"background"}
            width={"100%"}
            height={"100%"}
          />
        </div>
      </div>
    </>
  );
};
