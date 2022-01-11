import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import VisibilityIcon from "@material-ui/icons/Visibility";
import MovieHomeScreen from "./MovieHomeScreen.js";
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

export default function LoginScreen() {
  const classes = styles();

  const [isMovie, setIsMovie] = useState(false);
  const [isError, setIsError] = useState(false);

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const sendValue = () => {
    const login = emailRef.current.value === "" ? setIsError(true) : true;
    const sign = passwordRef.current.value === "" ? setIsError(true) : true;
    if (login && sign) {
      setIsMovie(true);
    }
  };


  if (!isMovie) {
    return (
      <div className={classes.mainContainer}>
        <Paper className={classes.paper} elevation={3}>
          <LockOpenIcon className={classes.icon} fontSize="large" />
          <TextField
            id="input-with-icon-textfield"
            label="Email ID"
            required
            inputRef={emailRef}
            error={isError}
            helperText={isError ? "Required Field" : ""}
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
            inputRef={passwordRef}
            error={isError}
            helperText={isError ? "Required Field" : ""}
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
            startIcon={<LockOpenIcon />}
            onClick={sendValue}
          >
            {"Login"}
          </Button>
        </Paper>
      </div>
    );
  } else if (isMovie) {
    return <MovieHomeScreen />;
  }
}
