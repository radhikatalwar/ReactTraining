import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import VisibilityIcon from "@material-ui/icons/Visibility";
import LoginScreen from "./LoginScreen.js";
import Paper from "@material-ui/core/Paper";

const img = "./images/assignment6/background.jpeg";

const styles = makeStyles({
  mainContainer: {
    background: `url(${img}) no-repeat center`,
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    width: "30%",
    minheight: "30%",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px",
  },
  button: {
    color: "white",
    margin: "10px",
    fontWeight: "bold",
    fontSize: "15px",
    backgroundColor: "#d01717",
    "&:hover": {
      backgroundColor: "#a71f1f",
    },
  },
});

export default function SignUpScreen() {
  const classes = styles();
  const [isLogin, setIsLogin] = useState(false);
  const [isError, setIsError] = useState(false);

  const usernameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const sendValue = () => {
    const username = usernameRef.current.value === "" ? setIsError(true) : true;
    const email = emailRef.current.value === "" ? setIsError(true) : true;
    const password = passwordRef.current.value === "" ? setIsError(true) : true;
    if (email && password && username) {
      setIsLogin(true);
    }
  };

  if (!isLogin) {
    return (
      <div className={classes.mainContainer}>
        <Paper className={classes.paper} elevation={3}>
          <LockOpenIcon className={classes.icon} fontSize="large" />
          <TextField
            id="input-with-icon-textfield"
            label="Username"
            required
            error={isError}
            helperText={isError ? "Required Field" : ""}
            inputRef={emailRef}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <br />
          <TextField
            id="input-with-icon-textfield"
            label="Email ID"
            required
            error={isError}
            helperText={isError ? "Required Field" : ""}
            inputRef={passwordRef}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutlineIcon />
                </InputAdornment>
              ),
            }}
          />
          <br />
          <TextField
            id="input-with-icon-textfield"
            label="Password"
            required
            error={isError}
            helperText={isError ? "Required Field" : ""}
            inputRef={usernameRef}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VisibilityIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            className={classes.button}
            startIcon={<ExitToAppIcon />}
            onClick={sendValue}
          >
            {"Sign up"}
          </Button>
        </Paper>
      </div>
    );
  } else {
    return <LoginScreen />;
  }
}
