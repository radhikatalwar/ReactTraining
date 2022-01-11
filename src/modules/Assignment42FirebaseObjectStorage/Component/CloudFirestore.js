import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const styles = makeStyles({
  heading: {
    fontSize: "33px",
    letterSpacing: "2px",
    fontWeight: "800",
    margin: "60px 10px 0",
  },
  mainContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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
    margin: "10px",
  },
});

export const CloudFirestore = () => {
  const classes = styles();

  return (
    <>
      <Typography className={classes.heading}>{"Cloud Database"}</Typography>
      <div className={classes.mainContainer}>
        <div className={classes.leftMainContainer}>
          <Typography variant="h5" className={classes.subHeading}>
            {
              "Cloud Firestore is a flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud. Like Firebase Realtime Database, it keeps your data in sync across client apps through realtime listeners and offers offline support for mobile and web so you can build responsive apps that work regardless of network latency or Internet connectivity. "
            }
          </Typography>
          <Typography variant="h5" className={classes.subHeading}>
            {
              "Cloud Firestore is a cloud-hosted, NoSQL database that your iOS, Android, and web apps can access directly via native SDKs. Cloud Firestore is also available in native Node.js, Java, Python, Unity, C++ and Go SDKs, in addition to REST and RPC APIs."
            }
          </Typography>
          <Typography variant="h5" className={classes.subHeading}>
            {
              "Cloud Firestore also offers seamless integration with other Firebase and Google Cloud products, including Cloud Functions."
            }
          </Typography>
        </div>

        <div className={classes.rightMainContainer}>
          <img
            src="https://firebase.google.com/docs/firestore/images/structure-data.png"
            alt={"background"}
            width={"100%"}
            height={"100%"}
          />
        </div>
      </div>
    </>
  );
};
