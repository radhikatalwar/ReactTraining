import React from "react";
import {
  Button,
  Typography,
  TextField,
  makeStyles,
} from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import SelectMenu from "./SelectMenu";

const styles = makeStyles({
  formmain: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  button1: {
    backgroundColor: "#388539",
    margin: "20px",
  },
  form: {
    textAlign: "center",
    margin: "40px 10px 20px 10px",
    boxShadow: "0 0 0 1px rgb(63 63 68 / 5%), 0 1px 3px 0 rgb(63 63 68 / 15%);",
    padding: "20px 20px",
    backgroundColor: "white",
    color: "#545353",
  },
  typography: {},
  inputContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "15px",
    marginBottom: "10px",
  },
  button: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    fontSize: "16px",
    backgroundColor: "#1565c0",
    color: "white",
  },
  search: {
    backgroundColor: "#1565c0",
    fontSize: "12px",
    fontWeight: "600",
    padding: "15px",
  },
});

export default function SideDrawer() {
  const classes = styles();
  return (
    <>
      <div className={classes.formmain}>
        <div className={classes.form}>
          <div className={classes.inputContainer}>
            <div>
              <Button
                variant="contained"
                className={classes.button}
                startIcon={<ShoppingCartIcon fontSize={"large"} />}
              >
                Buy
              </Button>
            </div>
            <div>
              <Button
                variant="contained"
                disabled
                color="secondary"
                className={classes.button}
                startIcon={<ShoppingCartIcon fontSize={"large"} />}
              >
                sell
              </Button>
            </div>
          </div>
          <div className={classes.inputContainer}>
            <div>
              <TextField
                id="outlined-basic"
                label="Amount"
                variant="outlined"
              />
            </div>
            <div>
              <SelectMenu label={"INR"} />
            </div>
          </div>
          <div className={classes.inputContainer}>
            <div>
              <SelectMenu label={"India"} />
            </div>
            <div>
              <SelectMenu label={"All Offline Offers"} />
            </div>
          </div>
          <div>
            <Button
              variant="contained"
              color="primary"
              className={classes.search}
              startIcon={<SearchIcon />}
              fullWidth={true}
            >
              search
            </Button>
          </div>
        </div>
        <div className={classes.form}>
          <Typography variant={"h4"} className={"classes.typography"}>
            {"Buy Monero."}
          </Typography>
          <Typography variant={"h4"} className={"classes.typography"}>
            {"Sell Monero."}
          </Typography>{" "}
          <Typography variant={"h4"} className={"classes.typography"}>
            {"Cash or online."}
          </Typography>{" "}
          <Typography variant={"h4"} className={"classes.typography"}>
            {"Anywhere."}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.button1}
            size="large"
            startIcon={<PersonAddIcon />}
          >
            Sign up free
          </Button>
        </div>
      </div>
    </>
  );
}
