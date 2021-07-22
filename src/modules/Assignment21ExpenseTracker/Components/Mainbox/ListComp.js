import React, { useContext } from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { red, green } from "@material-ui/core/colors";
import { Delete, MoneyOff } from "@material-ui/icons";
import { ExpenseTrackerContent } from "../../Context/context";

const styles = makeStyles((theme) => ({
  avatarIncome: {
    color: "#fff",
    backgroundColor: green[500],
  },
  avatarExpense: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
  },
  list: {
    maxHeight: "150px",
    overflow: "auto",
  },
  mainContainer: {
    borderBottom: "10px solid #3c56b8",
    marginTop: "10px",
  },
  heading: {
    padding: "20px",
    fontWeight: "bold",
  },
  icon: {
    borderRadius: "50%",
    color: "white",
    backgroundColor: "#3c56b8",
    padding: "10px",
  },
}));
export const ListComp = () => {
  const classes = styles();
  const { deleteTransaction, transactions } = useContext(ExpenseTrackerContent);

  return (
    <Paper className={classes.mainContainer}>
      <Typography className={classes.heading} variant="h6">
        {"Your Transactions"}
      </Typography>
      <List dense={false} className={classes.list}>
        {transactions.map((transaction) => (
          <Slide
            direction="down"
            in
            mountOnEnter
            unmountOnExit
            key={transaction.id}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  className={
                    transaction.type === "income"
                      ? classes.avatarIncome
                      : classes.avatarExpense
                  }
                >
                  <MoneyOff />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`Rs. ${transaction.amount}`}
                secondary={`${transaction.category} - ${transaction.date}`}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" onClick="">
                  <Delete
                    className={classes.icon}
                    onClick={() => deleteTransaction(transaction.id)}
                  />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Slide>
        ))}
      </List>
    </Paper>
  );
};
