import { Grid, Typography } from "@material-ui/core";
import React from "react";

export const GridRow = (props) => {
  return (
    <>
      <Grid item xs={3}>
        <Typography>{props.name1}</Typography>
        <Typography variant="h6">{"1"}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>{props.name2}</Typography>
        <Typography variant="h6">{"2"}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>{props.name3}</Typography>
        <Typography variant="h6">{"3"}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>{props.name4}</Typography>
        <Typography variant="h6">{"4"}</Typography>
      </Grid>
    </>
  );
};
