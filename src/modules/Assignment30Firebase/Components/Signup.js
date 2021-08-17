import React from "react";
import {
  Button,
  Divider,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useHistory } from "react-router";
import firebase from "firebase/app";

const styles = makeStyles({
  paper: {
    padding: "20px",
    width: "50%",
    margin: "30px auto",
    textAlign: "center",
  },
  button: {
    textTransform: "none",
    fontWeight: "900",
    backgroundColor: "#b03938",
    color: "white",
    fontSize: "14px",
    margin: "6px 5px",
    "&:hover": {
      color: "#b03938",
      backgroundColor: "white",
    },
  },
  title: {
    fontWeight: "900",
    letterSpacing: "2px",
    color: "#b03938",
    textAlign: "center",
    fontSize: "32px",
    margin: "13px",
  },
  or: {
    color: "#b03938",
    fontSize: "16px",
    margin: "13px",
  },
  option: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    width: "240px",
    backgroundColor: "#b03938",
  },
});

export const Signup = () => {
  const classes = styles();

  const history = useHistory();
  const googleSignup = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        var userName = result.user.displayName;
        var email = result.user.email;
        localStorage.setItem("name", userName);
        localStorage.setItem("email", email);
        history.push("/form");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const setUpRecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptchaContainer",
      {
        size: "invisible",
        callback: (response) => {
          onSignInSubmit();
        },
      }
    );
  };

  const onSignInSubmit = (event) => {
    event.preventDefault();
    setUpRecaptcha();
    const phoneNumber = "+911234567890";
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        const code = window.prompt("Enter OTP");
        confirmationResult
          .confirm(code)
          .then((result) => {
            history.push("/form");
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Paper className={classes.paper} elevation={4}>
      <div>
        <Button
          onClick={googleSignup}
          variant="contained"
          className={classes.button}
        >
          {"Sign up Via Google"}
        </Button>
        <div className={classes.option}>
          <Divider className={classes.divider} />
          <Typography className={classes.or}>{"OR"}</Typography>
          <Divider className={classes.divider} />
        </div>
        <div id={"recaptchaContainer"}></div>
        <Button
          onClick={onSignInSubmit}
          variant="contained"
          className={classes.button}
        >
          {"Sign up Via Phone No"}
        </Button>
      </div>
    </Paper>
  );
};
