import { makeStyles } from "@material-ui/core";
import React from "react";
import { Footer } from "../../Components/Footer";
import { Information } from "./Information";
import { Introduction } from "./Introduction";
import { RandomEmailGenerator } from "./RandomEmailGenerator";
import { RandomGenerator } from "./RandomGenerator";

const styles = makeStyles({
  mainContainer: {
    maxWidth: "1400px",
    height: "100%",
  },
});

export const Home = () => {
  const classes = styles();

  return (
    <div className={classes.mainContainer}>
      <Introduction />
      <RandomGenerator />
      <RandomEmailGenerator />
      <Information />
      <Footer />
    </div>
  );
};
