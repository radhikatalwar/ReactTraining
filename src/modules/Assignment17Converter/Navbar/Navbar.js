import React from "react";
import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import CommentIcon from "@material-ui/icons/Comment";
import { resetData } from "../reduxComponents/action";
import { useDispatch } from "react-redux";

const styles = makeStyles((theme) => ({
  addbar: {
    background: `url("https://images.pexels.com/photos/2680270/pexels-photo-2680270.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500") center `,
    color: "white",
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
  icon: {
    marginRight: "15px",
  },
  button: {
    textTransform: "none",
    fontWeight: "900",
    backgroundColor: "#fff",
    fontSize: "14px",
    margin: "6px 5px",
  },
}));

export const Navbar = () => {
  const classes = styles();
  const dispatch = useDispatch();

  return (
    <>
      <AppBar position="static" className={classes.addbar}>
        <Toolbar className={classes.toolbar}>
          <div>
            <Typography className={classes.title}>{"Let's Convert"}</Typography>
          </div>
          <div className={classes.innerContainer}>
            <CommentIcon className={classes.icon} />
            <AppsIcon className={classes.icon} />
            <Button
              className={classes.button}
              onClick={() => dispatch(resetData())}
            >
              {"Reset"}
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};
