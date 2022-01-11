import React, { useState } from "react";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import SignUpScreen from "./SignUpScreen.js";
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
    backgroundColor: "#e8645a",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px",
  },
  button: {
    margin: "10px",
    fontWeight: "bold",
    fontSize: "20px",
    backgroundColor: "red",
    color: "white",
    "&:hover": {
      backgroundColor: "#a71f1f",
    },
  },
});

export default function Assignment6() {
  const classes = styles();

  const [isLogin, setIsLogin] = useState(false);
  const [isSign, setIsSign] = useState(false);

  const SetLogin = () => {
    setIsLogin(true);
  };

  const SetSign = () => {
    setIsSign(true);
  };

  if (!isLogin && !isSign) {
    return (
      <div className={classes.mainContainer}>
        <Paper className={classes.paper} elevation={3}>
          <Button
            variant="contained"
            className={classes.button}
            startIcon={<LockOpenIcon />}
            onClick={SetLogin}
          >
            {"Login"}
          </Button>
          <Button
            variant="contained"
            className={classes.button}
            startIcon={<ExitToAppIcon />}
            onClick={SetSign}
          >
            {"Sign up"}
          </Button>
        </Paper>
      </div>
    );
  } else if (isLogin) {
    return <LoginScreen />;
  } else if (isSign) {
    return <SignUpScreen />;
  }
}
