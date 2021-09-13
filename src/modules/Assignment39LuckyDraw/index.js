import { Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { Navbar } from "./Components/Navbar";
import { Home } from "./screens/Home/Home";
import EjectIcon from "@material-ui/icons/Eject";

const styles = makeStyles({
  mainContainer: {
    width: "100%",
    height: "100%",
  },
  button: {
    position: "fixed",
    bottom: "28px",
    right: "25px",
    backgroundColor: "#1b251d",
    color: "white",
    borderRadius: "55%",
  },
});

export const Assignment39LuckyDraw = () => {
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
      <Home />
      <Button
        className={classes.button}
        style={{ display: visible ? "inline" : "none" }}
        onClick={scrollToTop}
      >
        <EjectIcon />
      </Button>
    </div>
  );
};
