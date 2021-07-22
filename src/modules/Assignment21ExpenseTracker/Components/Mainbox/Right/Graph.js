import React from "react";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";
import { Bar } from "react-chartjs-2";
import useTransactions from "../../../useTransactions";

const styles = makeStyles({
  income: {
    borderBottom: "10px solid #3c56b8",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    color: "#74788d",
    fontSize: "17px",
    marginBottom: "10px",
    fontWeight: "900",
  },
});

export const Graph = (props) => {
  const classes = styles();
  const { graphData } = useTransactions(props.title);

  return (
    <Card className={classes.income}>
      <CardContent>
        <div className={classes.content}>
          <div>
            <Typography variant="h5" className={classes.heading}>
              {props.label}
            </Typography>
          </div>
        </div>
        <Bar data={graphData} />
      </CardContent>
    </Card>
  );
};
