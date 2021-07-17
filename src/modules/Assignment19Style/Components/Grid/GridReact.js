import { Grid, makeStyles, Typography, Box } from "@material-ui/core";
import React from "react";
import { GridRow } from "./GridRow";

const styles = makeStyles({});

export const GridReact = () => {
  const classes = styles();
  return (
    <>
      <Grid container>
        <GridRow
          name1={"Style Title"}
          name2={"Line"}
          name3={"ManPower"}
          name4={"Order No."}
        />
        <Grid item xs={3}>
          <Typography>{"Takt Mins"}</Typography>
          <Typography>{"5"}</Typography>
        </Grid>
      </Grid>

      <Box disableGutters className={classes.container} component={"span"}>
        <div>
          <Grid container spacing={2}>
            <GridRow
              name1={"Style Code"}
              name2={"Style Date"}
              name3={"Working Mins"}
              name4={"Customer"}
            />
          </Grid>
          <Grid container spacing={2}>
            <GridRow
              name1={"SMV"}
              name2={"Running Dates"}
              name3={"Daily Target"}
              name4={"Quantity"}
            />
          </Grid>
        </div>
        <div>
          <Typography>{"Style Image"}</Typography>
        </div>
      </Box>
    </>
  );
};
