import { makeStyles } from "@material-ui/core";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Topbar from "./TopBar";

const styles = makeStyles({
  heading: {
    padding: "19.6% 0",
  },
});

const Home = () => {
  const classes = styles();

  return (
    <>
      <Topbar action={"Login"} isLogin={true} />
      <Typography className={classes.heading} variant="h1">
        {"Hello!!"}
      </Typography>
    </>
  );
};

export default Home;
