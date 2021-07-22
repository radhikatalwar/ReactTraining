import React, { useContext } from "react";
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  Fab,
} from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import useTransactions from "../../../useTransactions";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import { ExpenseTrackerContent } from "../../../Context/context";

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
    fontSize: "14px",
    marginBottom: "10px",
    fontWeight: "900",
  },
  fab: {
    backgroundColor: "#3c56b8",
    color: "white",
  },
  amount: {
    color: "#3c56b8",
  },
});

export const Details = (props) => {
  const classes = styles();
  const { transactions } = useContext(ExpenseTrackerContent);
  const { total, chartData } = useTransactions(props.title);

  var investment = transactions.reduce((acc, currVal) => {
    if (currVal.type === "expense" && currVal.category === "Investments") {
      acc += currVal.amount;
    }
    return acc;
  }, 0);

  return (
    <Card className={classes.income}>
      <CardContent>
        <div className={classes.content}>
          <div>
            <Typography variant="h5" className={classes.heading}>
              {props.label}
            </Typography>
            {props.icon && (
              <Typography variant="h6" className={classes.amount}>{`Rs ${
                props.about === "investment" ? investment : total
              }`}</Typography>
            )}
          </div>
          <div>
            {props.icon && (
              <Fab className={classes.fab}>
                <CreditCardIcon />
              </Fab>
            )}
          </div>
        </div>
        {props.chart && <Doughnut data={chartData} />}
      </CardContent>
    </Card>
  );
};
