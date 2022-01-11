import React from "react";
import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";
import CallIcon from "@material-ui/icons/Call";
import { useHistory } from "react-router";

const styles = makeStyles((theme) => ({
  addbar: {
    backgroundColor: "white",
    color: "#b03938",
    [theme.breakpoints.down("sm")]: {
      height: "120px",
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "flex-start",
      padding: "20px",
    },
  },
  innerContainer: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontWeight: "900",
    letterSpacing: "2px",
  },
  image: {
    height: "40px",
  },
  logoImage: {
    height: "62px",
  },
  icon: {
    margin: "0 10px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  button: {
    textTransform: "none",
    fontWeight: "900",
    color: "#b03938",
    backgroundColor: "white",
    fontSize: "14px",
    margin: "6px 5px",
    borderRadius: "21px",
    border: "1px solid",
    "&:hover": {
      backgroundColor: "#b03938",
      color: "white",
    },
  },
}));

export const Navbar = (props) => {
  const classes = styles();

  const history = useHistory();

  const handleLogout = () => {
    history.push("/");
  };

  return (
    <>
      <AppBar position="fixed" className={classes.addbar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.innerContainer}>
            <img
              className={classes.image}
              alt="Logo"
              src="https://images.pexels.com/photos/3992933/pexels-photo-3992933.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            />

            <img
              className={classes.logoImage}
              alt="Logo"
              src=" https://images.pexels.com/photos/4031867/pexels-photo-4031867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            />
          </div>
          <div className={classes.innerContainer}>
            <Typography variant="h5" className={classes.title}>
              {"COVID TRACKER"}
            </Typography>
          </div>
          <div className={classes.innerContainer}>
            <ErrorIcon className={classes.icon} />
            <CallIcon className={classes.icon} />
            <Button className={classes.button} onClick={handleLogout}>
              {"Logout"}
            </Button>
            <Button className={classes.button} onClick={props.handlePlace}>
              {props.place === "India" ? "World's Record" : "India's Record"}
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};
