import { Button, Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

const styles = makeStyles((theme) => ({
  navbar: {
    padding: "30px 15px 50px",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      display: "initial",
    },
  },
  heading: {
    fontWeight: "bold",
    fontSize: "28px",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  links: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      padding: "0 10px",
    },
  },
  link: {
    padding: "0 15px",
    color: "#2c3e50",
  },
  button: {
    textTransform: "none",
    fontWeight: "900",
    color: "#fff",
    fontSize: "14px",
    margin: "6px 10px",
    "&:hover": {
      backgroundColor: "#2a2a2a",
    },
  },
}));

export const Navbar = () => {
  const classes = styles();
  const { color } = useSelector((state) => state.productReducer);

  return (
    <div className={classes.navbar}>
      <Typography className={classes.heading}>{"StartBlogging.co"}</Typography>
      <div className={classes.links}>
        <Link href="#" className={classes.link} underline={"none"}>
          {"Home"}
        </Link>
        <Link href="#" className={classes.link} underline={"none"}>
          {"Tools"}
        </Link>
        <Link href="#" className={classes.link} underline={"none"}>
          {"Contact"}
        </Link>
        <Button style={{ backgroundColor: color }} className={classes.button}>
          {"Hire Us"}
        </Button>
      </div>
    </div>
  );
};
