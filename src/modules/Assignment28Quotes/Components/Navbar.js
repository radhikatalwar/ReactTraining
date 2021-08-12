import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";

const styles = makeStyles({
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: "1",
    width: "100%",
  },
  upperContainer: {
    backgroundColor: "#223c50",
    padding: "10px 7%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "37px",
  },
  logo: {
    height: "23px",
    width: "191px",
    cursor: "pointer",
  },
  logo2: {
    height: "28px",
    width: "200px",
  },
  appbar: {
    backgroundColor: "white",
    position: "fixed",
    top: "55px",
    height: "56px",
  },
  toolbar: {
    backgroundColor: "white",
    display: "flex",
    boxShadow: "0px 8px 14px 0px rgba(0,0,0,0.29)",
  },
  option: {
    color: "#223c50",
    cursor: "pointer",
    letterSpacing: "-0.5px",
    marginRight: "22px",
    fontSize: "17px",
    "&:hover": {
      color: "#96dde7",
    },
  },
  optionBox: {
    display: "flex",
    marginLeft: "50px",
  },
  button: {
    backgroundColor: "white",
    letterSpacing: "-0.5px",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#c7c1c1",
    },
  },
});

export const Navbar = () => {
  const classes = styles();

  const history = useHistory();

  const gotoHome = () => {
    history.push("/");
  };

  const gotoQuote = () => {
    history.push("/quote");
  };

  const gotoMotivational = () => {
    history.push("/motivate");
  };

  const gotoBeauty = () => {
    history.push("/beauty");
  };

  const gotoNature = () => {
    history.push("/nature");
  };

  const gotoPeace = () => {
    history.push("/peace");
  };

  const gotoOthers = () => {
    history.push("/others");
  };

  return (
    <div className={classes.container}>
      <div className={classes.upperContainer}>
        <img
          onClick={gotoHome}
          className={classes.logo}
          src="https://images.careerfoundry.com/public/logo/cf_logo_min_full.svg"
          alt="web-logo"
        />
        <Button className={classes.button} onClick={gotoQuote}>
          {"Quote of the day"}
        </Button>
      </div>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <img
            className={classes.logo2}
            src="https://images.careerfoundry.com/public/icons/CF+blog.svg"
            alt="web-logo"
          />
          <div className={classes.optionBox}>
            <Typography className={classes.option} onClick={gotoHome}>
              {"Random"}
            </Typography>
            <Typography className={classes.option} onClick={gotoMotivational}>
              {"Motivational"}
            </Typography>
            <Typography className={classes.option} onClick={gotoPeace}>
              {"Peace"}
            </Typography>
            <Typography className={classes.option} onClick={gotoNature}>
              {"Nature"}
            </Typography>
            <Typography className={classes.option} onClick={gotoBeauty}>
              {"Beauty"}
            </Typography>
            <Typography className={classes.option} onClick={gotoOthers}>
              {"Others"}
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
