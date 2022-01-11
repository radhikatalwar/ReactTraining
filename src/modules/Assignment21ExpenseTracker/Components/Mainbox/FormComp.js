import React, { useContext } from "react";
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  Divider,
} from "@material-ui/core";
import { Form } from "./Form";
import { ExpenseTrackerContent } from "../../Context/context";

const styles = makeStyles({
  main: {
    borderBottom: "10px solid #3c56b8",
    marginTop: "20px",
    padding: "20px",
  },
  heading: {
    fontsize: "25px",
    fontWeight: "600",
  },
  amount: {
    color: "#3c56b8",
  },
  divider: {
    backgroundColor: "#3c56b8",
    margin: "10px 0",
  },
});

export const FormComp = () => {
  const classes = styles();
  const { balance } = useContext(ExpenseTrackerContent);

  return (
    <Card className={classes.main}>
      <Typography variant="h6" align="center" className={classes.heading}>
        {"Expense Tracker"}
      </Typography>
      <Typography variant="body1" align="center">
        {"Powered by Screpy"}
      </Typography>
      <CardContent>
        <Typography align="center" variant="h6" className={classes.amount}>
          {`Total Balance `}
        </Typography>
        <Typography align="center" variant="h5" className={classes.amount}>
          {`${balance}`}
        </Typography>
        <Divider className={classes.divider} />
        <Form />
      </CardContent>
    </Card>
  );
};
