import {
  CircularProgress,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Graph } from "../HomePage/Graph";
import { CityCard } from "./CityCard";

const styles = makeStyles({
  heading: {
    margin: "30px 0 0 10px",
    color: "#b03938",
    letterSpacing: "2px",
    fontWeight: "bold",
  },
  circle: {
    display: "flex",
    margin: "100px auto",
    height: "100vh",
    color: "#b03938",
  },
  loading: {
    color: "#b03938",
    textAlign: "center",
    letterSpacing: "2px",
  },
});

export const India = () => {
  const classes = styles();

  const { IndiaCases, IndiaPlaces } = useSelector((state) => {
    return state.dataReducer;
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [IndiaCases, IndiaPlaces]);

  return (
    <>
      <Grid container spacing={3} padding={2}>
        <Grid item xs={12}>
          <Graph title={"Total Cases"} label={"India"} />
        </Grid>
      </Grid>
      {loading ? (
        <>
          <Typography variant="h4" className={classes.loading}>
            {"Please Wait ! Page is Loading"}
          </Typography>
          <CircularProgress className={classes.circle} />
        </>
      ) : (
        <>
          <Typography className={classes.heading} variant="h5">
            {"INDIA'S CASES"}
          </Typography>

          <Grid container>
            {IndiaCases.map((city, index) => {
              return (
                <Grid item xs={12} sm={3}>
                  <CityCard
                    city={city}
                    cityName={IndiaPlaces[index]}
                    key={index}
                  />
                </Grid>
              );
            })}
          </Grid>
        </>
      )}
    </>
  );
};
