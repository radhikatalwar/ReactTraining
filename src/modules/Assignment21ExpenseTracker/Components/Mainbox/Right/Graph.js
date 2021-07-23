import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
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
  button: {
    textTransform: "none",
    fontWeight: "900",
    color: "#fff",
    backgroundColor: "#3c56b8",
    fontSize: "13px",
    margin: "6px 5px",
    "&:hover": {
      backgroundColor: "#3c56b8",
    },
  },
});

export const Graph = (props) => {
  const classes = styles();
  const { graphData, graphDataWeek } = useTransactions(props.title);
  const [dataArray, setdataArray] = useState(graphData);

  const convertToWeek = () => {
    setdataArray(graphDataWeek);
  };

  const convertToMonth = () => {
    setdataArray(graphData);
  };

  return (
    <Card className={classes.income}>
      <CardContent>
        <div className={classes.content}>
          <div>
            <Typography variant="h5" className={classes.heading}>
              {props.label}
            </Typography>
          </div>
          <div>
            <Button className={classes.button} onClick={convertToWeek}>
              {"Week"}
            </Button>
            <Button className={classes.button} onClick={convertToMonth}>
              {"Month"}
            </Button>
          </div>
        </div>
        <Bar data={dataArray} />
      </CardContent>
    </Card>
  );
};
