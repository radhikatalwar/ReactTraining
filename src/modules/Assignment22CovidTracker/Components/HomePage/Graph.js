import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  CircularProgress,
} from "@material-ui/core";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

const styles = makeStyles({
  income: {
    borderBottom: "10px solid #b03938",
    marginTop: "100px",
  },
  heading: {
    color: "#b03938",
    marginBottom: "10px",
    fontWeight: "900",
    letterSpacing: "2px",
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

export const Graph = (props) => {
  const classes = styles();
  const [loading, setLoading] = useState(true);
  const { graphDataIndia, graphDataWorld } = useSelector((state) => {
    return state.dataReducer;
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [graphDataIndia, graphDataWorld]);

  return (
    <>
      {loading ? (
        <>
          <Typography variant="h4" className={classes.loading}>
            {"Please Wait ! Page is Loading"}
          </Typography>
          <CircularProgress className={classes.circle} />
        </>
      ) : (
        <Card className={classes.income}>
          <CardContent>
            <div>
              <Typography variant="h5" className={classes.heading}>
                {props.label === "India" ? "INDIA" : "WORLD"}
              </Typography>
            </div>
            <Bar
              data={props.label === "India" ? graphDataIndia : graphDataWorld}
            />
          </CardContent>
        </Card>
      )}
    </>
  );
};
