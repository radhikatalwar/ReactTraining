import React, { useState } from "react";
import { AppBar, Button, makeStyles, Toolbar } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { ModalComponent } from "./ModalComponent";
import { LoginModalComponent } from "./LoginModalComponent";

const styles = makeStyles((theme) => ({
  addbar: {
    background: `url("https://app.screpy.com/img/dashboard/header-bg.svg") no-repeat center `,
    color: "white",
    height: "150px",
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
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const handleModal = () => {
    setOpen(!open);
  };

  const handleLoginModal = () => {
    setOpenLogin(!openLogin);
  };

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
            <ModalComponent handleModal={handleModal} open={open} />
            <LoginModalComponent
              handleLoginModal={handleLoginModal}
              openLogin={openLogin}
            />
            <Button className={classes.button} onClick={handleLoginModal}>
              {"Login/Signup"}
            </Button>
            <Button onClick={handleModal} className={classes.button}>
              {console.log(open)}
              {"Add Post"}
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};
