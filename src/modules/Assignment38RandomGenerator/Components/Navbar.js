import React from "react";
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { Linkers } from "./Linkers";

const styles = makeStyles({
  addbar: {
    backgroundColor: "white",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "gray",
    maxWidth: "1400px",
    padding: "0 10%",
  },
  avatar: {
    marginRight: "20px",
    width: "54px",
    height: "64px",
  },
  innerContainer: {
    display: "flex",
    alignItems: "center",
  },
  image: {
    height: "24px",
  },
  icon: {
    color: "#343f52",
    padding: "0 10px",
    "&:hover": {
      position: "relative",
      bottom: "3px",
    },
  },
});

export const Navbar = () => {
  const classes = styles();

  return (
    <>
      <AppBar position="fixed" className={classes.addbar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.innerContainer}>
            <img
              src="https://sandbox.elemisthemes.com/img/logo-dark@2x.png"
              alt="Logo"
              className={classes.image}
            />
          </div>
          <div>
            <Linkers name={"Demo"} />
            <Linkers name={"Projects"} />
            <Linkers name={"Blocks"} />
            <Linkers name={"Pages"} />
            <Linkers name={"Features"} />
          </div>
          <div className={classes.innerContainer}>
            <NotificationsNoneIcon className={classes.icon} />
            <InstagramIcon className={classes.icon} />
            <TwitterIcon className={classes.icon} />
            <WhatsAppIcon className={classes.icon} />
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};
