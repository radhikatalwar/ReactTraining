import { makeStyles } from "@material-ui/core";
import React from "react";
import { LuckyDrawGenerator } from "./LuckyDrawGenerator";
import { EmailDrawGenerator } from "./EmailDrawGenerator";
import { Footer } from "../../Components/Footer";

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
      <LuckyDrawGenerator />
      <EmailDrawGenerator />
      <Footer />
    </div>
  );
};
