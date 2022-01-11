import React, { useState } from "react";
import { Button, Divider, Fade, makeStyles } from "@material-ui/core";
import { Modal, Paper, Typography } from "@material-ui/core";
import { auth, provider } from "./firebase";
import firebase from "firebase/app";

const styles = makeStyles({
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    padding: "20px",
    width: "50%",
    margin: "30px auto",
    textAlign: "center",
  },
  button: {
    textTransform: "none",
    fontWeight: "900",
    backgroundColor: "#20919d",
    color: "white",
    fontSize: "14px",
    margin: "6px 5px",
    "&:hover": {
      color: "#20919d",
      backgroundColor: "white",
    },
  },
  title: {
    fontWeight: "900",
    letterSpacing: "2px",
    color: "#20919d",
    textAlign: "center",
    fontSize: "32px",
    margin: "13px",
  },
  or: {
    color: "#20919d",
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
    backgroundColor: "#20919d",
  },
});

export const Signup = () => {
  const classes = styles();
  const [open, setOpen] = useState(true);
  const googleSignup = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        var userName = result.user.displayName;
        var email = result.user.email;
        localStorage.setItem("name", userName);
        localStorage.setItem("email", email);
        setOpen(false);
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
            setOpen(false);
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
    <Modal className={classes.modal} open={open} closeAfterTransition>
      <Fade in={open}>
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
      </Fade>
    </Modal>
  );
};
