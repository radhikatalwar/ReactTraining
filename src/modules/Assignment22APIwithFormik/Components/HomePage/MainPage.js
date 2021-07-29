import { Grid, makeStyles } from "@material-ui/core";
import { Graph } from "./Graph";
import { Navbar } from "./Navbar";

const styles = makeStyles({
  graphContainer: {
    margin: "0 7%",
  },
});

export const MainPage = () => {
  const classes = styles();

  return (
    <>
      <Navbar />
      <div className={classes.graphContainer}>
        <Grid container spacing={3} padding={2}>
          <Grid item xs={12}>
            <Graph title={"Total Cases"} label={"India"} />
          </Grid>
        </Grid>

        <Grid container item spacing={3} padding={2}>
          <Grid item xs={12}>
            <Graph title={"Total cases"} label={"World"} />
          </Grid>
        </Grid>
      </div>
    </>
  );
};
