import React from "react";
import { makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import { Linkers } from "./Linkers";

const styles = makeStyles({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1400px",
    padding: "20px 5%",
    borderBottom: "1px solid white",
    backgroundColor: "black",
    color: "white",
  },
  innerContainer: {
    display: "flex",
    alignItems: "center",
  },
  image: {
    height: "38px",
  },
  icon: {
    padding: "0 10px",
    fontSize: "33px",
    "&:hover": {
      position: "relative",
      bottom: "3px",
    },
  },
});

export const Navbar = () => {
  const classes = styles();

  return (
    <div className={classes.toolbar}>
      <div className={classes.innerContainer}>
        <img
          src="https://themezinho.net/consto/images/logo.png"
          alt="Logo"
          className={classes.image}
        />
      </div>
      <div>
        <Linkers name={"Home"} />
        <Linkers name={"About"} />
        <Linkers name={"Services"} />
        <Linkers name={"Profile"} />
        <Linkers name={"Blog"} />
        <Linkers name={"Contact"} />
      </div>
      <div className={classes.innerContainer}>
        <SearchIcon className={classes.icon} />
        <AppsIcon className={classes.icon} />
      </div>
    </div>
  );
};
