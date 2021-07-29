import React, { useContext, useState } from "react";
import { AppBar, Button, makeStyles, Toolbar } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import fileDownload from "js-file-download";
import { ExpenseTrackerContent } from "../../Context/context";
import { ModalComponent } from "./ModalComponent";
import { income } from "../../Constants/InitialValues";

const styles = makeStyles((theme) => ({
  addbar: {
    background: `url("https://app.screpy.com/img/dashboard/header-bg.svg") no-repeat center `,
    color: "white",
    height: "72px",
    zIndex: "1",
    [theme.breakpoints.down("sm")]: {
      height: "120px",
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "flex-start",
      padding: "20px",
    },
  },
  innerContainer: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontWeight: "900",
    fontSize: "28px",
    letterSpacing: "-1px",
  },
  image: {
    height: "40px",
  },
  icon: {
    margin: "0 15px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  button: {
    textTransform: "none",
    fontWeight: "900",
    color: "#fff",
    backgroundColor: "#130444",
    fontSize: "14px",
    margin: "6px 5px",
    "&:hover": {
      backgroundColor: "#000",
    },
  },
}));

export const Navbar = () => {
  const classes = styles();
  const { transactions } = useContext(ExpenseTrackerContent);
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!open);
  };

  var content = "";

  const handleClick = () => {
    content += `Your Transactions : [`;

    if (transactions.length > 0) {
      transactions.map((transaction, index) => {
        content =
          content +
          `{id:${index + 1},amount:${transaction.amount},type:"${
            transaction.type
          }",date:"${transaction.date}",category:"${transaction.category}"},`;
      });
    }

    content += `] \n`;

    content += `\n Your Income per Day : \n  ${
      JSON.parse(localStorage.getItem("income")) || income
    }  \n`;

    content += `\n Your Expense per Day : \n  ${
      JSON.parse(localStorage.getItem("expense")) || income
    }  \n`;

    fileDownload(`${content}`, `YourData.json`);
    content = "";
  };

  return (
    <>
      <AppBar position="fixed" className={classes.addbar}>
        <Toolbar className={classes.toolbar}>
          <div>
            <img
              className={classes.image}
              alt="Logo"
              src="https://app.screpy.com/white-logo.svg"
            />
          </div>
          <div className={classes.innerContainer}>
            <NotificationsIcon className={classes.icon} />
            <Button className={classes.button} onClick={handleModal}>
              {"Demo"}
            </Button>
            <ModalComponent handleModal={handleModal} open={open} />
            <Button className={classes.button} onClick={handleClick}>
              {"Export Your Data"}
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};
