import { makeStyles } from "@material-ui/core";
import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PinterestIcon from "@material-ui/icons/Pinterest";

const styles = makeStyles({
  container: {
    position: "fixed",
    left: 30,
    top: 150,
    display: "flex",
    flexDirection: "column",
    color: "#223c50",
  },
  icon: {
    fontSize: "30px",
    margin: "20px 0",
    "&:hover": {
      color: "#223c50d4",
    },
  },
});

export const Icons = () => {
  const classes = styles();

  return (
    <div className={classes.container}>
      <TwitterIcon className={classes.icon} />
      <FacebookIcon className={classes.icon} />
      <InstagramIcon className={classes.icon} />
      <GitHubIcon className={classes.icon} />
      <LinkedInIcon className={classes.icon} />
      <PinterestIcon className={classes.icon} />
    </div>
  );
};
