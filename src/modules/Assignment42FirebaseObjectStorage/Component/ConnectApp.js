import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { twilight } from "react-syntax-highlighter/dist/esm/styles/prism";

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
    margin: "30px 0",
  },
  leftMainContainer: {
    width: "50%",
  },
  rightMainContainer: {
    width: "45%",
    padding: "40px 0",
    backgroundColor: "#f9f9f9",
  },
  subHeading: {
    fontSize: "18px",
    margin: "15px 0",
  },
  title: {
    fontSize: "18px",
    margin: "15px 0",
    fontWeight: "bold",
  },
});

export const ConnectApp = () => {
  const classes = styles();

  return (
    <>
      <Typography className={classes.heading}>
        {"Connect to Firebase Database"}
      </Typography>
      <div className={classes.mainContainer}>
        <div className={classes.leftMainContainer}>
          <img
            src="https://firebase.google.com/docs/emulator-suite/images/emulator-suite-helloworld-firestore.png"
            alt={"background"}
            width={"100%"}
            height={"300px"}
          />
        </div>

        <div className={classes.rightMainContainer}>
          <Typography variant="h5" className={classes.subHeading}>
            {
              "1. Prototype features interactively with the emulators and Emulator Suite UI."
            }
          </Typography>
          <Typography variant="h5" className={classes.subHeading}>
            {
              "2. If you're using a database emulator or the Cloud Functions emulator, perform a one-time step to connect your app to the emulators."
            }
          </Typography>
          <Typography variant="h5" className={classes.subHeading}>
            {"3. Automate your tests with the emulators and custom scripts."}
          </Typography>
        </div>
      </div>
      <div>
        <Typography className={classes.title}>
          {"Create Firebase Configuration File"}
        </Typography>
        <SyntaxHighlighter
          className={classes.code}
          language="javascript"
          style={twilight}
        >
          {
            "import firebase from 'firebase/app';\nimport 'firebase/firestore';\n\nconst firebaseConfig = **Your Project Configuration**\n\nif (!firebase.apps.length) {\nfirebase.initializeApp(firebaseConfig);\n} else {\nfirebase.app(); // if already initialized, use that one\n}\n\nexport const db = firebase.firestore();"
          }
        </SyntaxHighlighter>
      </div>
    </>
  );
};
