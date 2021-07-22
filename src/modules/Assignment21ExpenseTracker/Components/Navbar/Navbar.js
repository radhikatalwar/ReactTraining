import React from "react";
import { AppBar, Button, makeStyles, Toolbar } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";

const styles = makeStyles((theme) => ({
  addbar: {
    background: `url("https://app.screpy.com/img/dashboard/header-bg.svg") no-repeat center `,
    color: "white",
    height: "72px",
    zIndex: "1",
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
    fontSize: "28px",
    letterSpacing: "-1px",
  },
  image: {
    height: "40px",
  },
  icon: {
    margin: "0 15px",
  },
  button: {
    textTransform: "none",
    fontWeight: "900",
    color: "#fff",
    backgroundColor: "#130444",
    fontSize: "14px",
    margin: "6px 5px",
    "&:hover": {
      backgroundColor: "#000",
    },
  },
}));

export const Navbar = () => {
  const classes = styles();

  return (
    <>
      <AppBar position="static" className={classes.addbar}>
        <Toolbar className={classes.toolbar}>
          <div>
            <img
              className={classes.image}
              alt="Logo"
              src="https://app.screpy.com/white-logo.svg"
            />
          </div>
          <div className={classes.innerContainer}>
            <NotificationsIcon className={classes.icon} />
            <Button className={classes.button}>{"Login/Signup"}</Button>
            <Button className={classes.button}>{"Get Your Data"}</Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};
