import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { InformationCard } from "./InformationCard";

const styles = makeStyles({
  mainContainer: {
    width: "80%",
    margin: "2% auto",
  },
});

export const Information = () => {
  const classes = styles();

  return (
    <div className={classes.mainContainer}>
      <Grid container spacing={2}>
        <InformationCard
          src={"https://sandbox.elemisthemes.com/img/icons/telephone-3.svg"}
          heading={"24/7 Support"}
        />
        <InformationCard
          src={"https://sandbox.elemisthemes.com/img/icons/shield.svg"}
          heading={"Secure Payments"}
        />
        <InformationCard
          src={
            "https://sandbox.elemisthemes.com/img/icons/cloud-computing-3.svg"
          }
          heading={"Daily Payment"}
        />
      </Grid>
      <Grid container spacing={2}>
        <InformationCard
          src={"https://sandbox.elemisthemes.com/img/icons/analytics.svg"}
          heading={"Market Research"}
        />
        <InformationCard
          src={"https://sandbox.elemisthemes.com/img/icons/settings.svg"}
          heading={"System Integration"}
        />
        <InformationCard
          src={"https://sandbox.elemisthemes.com/img/icons/earth.svg"}
          heading={"SEO Services"}
        />
      </Grid>
    </div>
  );
};
