import { Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { Main } from "./Component";
import EjectIcon from "@material-ui/icons/Eject";
import { Footer } from "./CommonComponents/Footer";
import { Navbar } from "./CommonComponents/Navbar";

const styles = makeStyles({
  mainContainer: {
    minHeight: "100vh",
    maxWidth: "100vw",
    backgroundColor: "#f9f9f9",
  },
  button: {
    position: "fixed",
    bottom: "158px",
    right: "3rem",
    backgroundColor: "white",
    color: "black",
    borderRadius: "55%",
  },
});

export const Assignment42FirebaseObjectStorage = () => {
  const classes = styles();

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className={classes.mainContainer}>
      <Navbar />
      <Main />
      <Button
        className={classes.button}
        style={{ display: visible ? "inline" : "none" }}
        onClick={scrollToTop}
      >
        <EjectIcon />
      </Button>
      <Footer />
    </div>
  );
};
