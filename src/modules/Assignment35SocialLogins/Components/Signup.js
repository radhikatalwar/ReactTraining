import React, { useState } from "react";
import {
  Button,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { auth } from "./firebase";
import { useHistory } from "react-router";
import firebase from "firebase/app";
import { Seperator } from "./Divider";
// import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";

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
    backgroundColor: "#275d7f",
    color: "white",
    fontSize: "14px",
    margin: "6px 5px",
    "&:hover": {
      color: "#275d7f",
      backgroundColor: "white",
    },
  },
  title: {
    fontWeight: "900",
    letterSpacing: "2px",
    color: "#275d7f",
    textAlign: "center",
    fontSize: "28px",
    margin: "13px",
  },
  input: {
    margin: "5px 0",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export const Signup = () => {
  const classes = styles();

  const history = useHistory();
  const inputInitialValues = {
    email: "",
    password: "",
  };
  const [inputValues, setInputValues] = useState(inputInitialValues);

  const handleChange = (event) => {
    console.log(inputValues);
    setInputValues({ ...inputValues, [event.target.name]: event.target.value });
  };

  const HandleInputSubmit = (event) => {
    event.preventDefault();
    console.log(inputValues);
    auth
      .createUserWithEmailAndPassword(inputValues.email, inputValues.password)
      .then((user) => {
        history.push("/done");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  // const auth = getAuth();
  const signInWithFacebook = () => {
    const FacebookAuthProvider = new firebase.auth.FacebookAuthProvider();
    FacebookAuthProvider.addScope("user_birthday,email");
    firebase.auth().useDeviceLanguage();
    firebase
      .auth()
      .signInWithRedirect(FacebookAuthProvider)
      .then((result) => {
        const user = result.user;
        history.push("/done");
      })
      .catch(err => {
        alert(err.message);
      });
  };

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const googleSignup = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((result) => {
        var userName = result.user.displayName;
        var email = result.user.email;
        localStorage.setItem("name", userName);
        localStorage.setItem("email", email);
        history.push("/done");
      })
      .catch((err) => {
        alert(err.message);
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
            history.push("/done");
          })
          .catch((err) => {
            alert(err.message);
          });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Paper className={classes.paper} elevation={4}>
      <div>
        <Typography className={classes.title}>
          {"Hello! Please authenticate youself!"}
        </Typography>
        <form onSubmit={HandleInputSubmit} className={classes.form}>
          <TextField
            className={classes.input}
            label="Email"
            value={inputValues.email}
            name="email"
            onChange={handleChange}
          />
          <TextField
            className={classes.input}
            type={"password"}
            label="Password"
            value={inputValues.password}
            name="password"
            onChange={handleChange}
          />
          <Button variant="contained" className={classes.button} type="submit">
            {"Sign Up"}
          </Button>
        </form>
        <Seperator />
        <Button
          onClick={googleSignup}
          variant="contained"
          className={classes.button}
        >
          {"Sign up Via Google"}
        </Button>
        <Seperator />
        <div id={"recaptchaContainer"}></div>
        <Button
          onClick={onSignInSubmit}
          variant="contained"
          className={classes.button}
        >
          {"Sign up Via Phone No"}
        </Button>
        <Seperator />
        <div id={"recaptchaContainer"}></div>
        <Button
          onClick={signInWithFacebook}
          variant="contained"
          className={classes.button}
        >
          {"Sign up via Facebook"}
        </Button>
      </div>
    </Paper>
  );
};
