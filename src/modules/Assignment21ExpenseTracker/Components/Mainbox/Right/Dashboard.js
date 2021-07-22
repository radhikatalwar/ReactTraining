import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import useTransactions from "../../../useTransactions";
import { Details } from "./Details";
import { AboutUser } from "./AboutUser";
import { FormComp } from "../FormComp";
import { ListComp } from "../ListComp";
import { Graph } from "./Graph";

const styles = makeStyles({
  upper: {
    marginTop: "20px",
  },
  pie: {
    marginTop: "15px",
  },
});

export const Dashboard = () => {
  const classes = styles();
  const { total } = useTransactions("income");

  return (
    <div className={classes.upper}>
      <Grid
        container
        spacing={3}
        padding={2}
        className={classes.grid}
        display={"flex"}
      >
        <Grid item xs={12} sm={4} display={"flex"}>
          <AboutUser />
          <FormComp />
        </Grid>
        <Grid item xs={12} sm={8} display={"flex"}>
          <Grid container spacing={3} padding={2}>
            <Grid item xs={12} sm={4}>
              <Details
                title={"income"}
                chart={false}
                label={"Overall Income"}
                icon={true}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Details
                title={"expense"}
                chart={false}
                label={"Overall Expense"}
                icon={true}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Details
                title={"expense"}
                chart={false}
                label={"Overall Investment"}
                about={"investment"}
                icon={true}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3} padding={3} className={classes.pie}>
            <Grid item xs={12} sm={6}>
              <Details
                title={"income"}
                chart={true}
                label={"Income"}
                icon={false}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Details
                title={"expense"}
                chart={true}
                label={"Expense"}
                icon={false}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3} padding={3}>
            <Grid item xs={12}>
              <ListComp />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={3} padding={2}>
        <Grid item xs={12} sm={6}>
          <Graph title={"income"} label={"Income Graph"} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Graph title={"expense"} label={"Expense Graph"} />
        </Grid>
      </Grid>
    </div>
  );
};
