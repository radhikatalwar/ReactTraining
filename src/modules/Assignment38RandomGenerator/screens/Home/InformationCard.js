import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const styles = makeStyles({
  mainContainer: {
    padding: "20px",
  },
  headingContainer: {
    display: "flex",
    alignItems: "center",
  },
  image: {
    width: "50px",
  },
  heading: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#4e5868",
    fontFamily: "ui-monospace",
    marginBottom: "15px",
    padding: "18px 0 0 20px",
  },
  content: {
    fontSize: "20px",
    fontFamily: "ui-monospace",
    margin: "10px auto 20px",
    fontWeight: "500",
    lineHeight: "1.7",
    color: "#60697b",
    letterSpacing: "1px",
  },
});

export const InformationCard = ({ src, heading }) => {
  const classes = styles();

  return (
    <Grid item xs={12} sm={4} className={classes.mainContainer}>
      <div className={classes.headingContainer}>
        <img src={src} alt={"Information Icon"} className={classes.image} />
        <Typography className={classes.heading}>{heading}</Typography>
      </div>
      <Typography className={classes.content}>
        {
          "Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget."
        }
      </Typography>
    </Grid>
  );
};
