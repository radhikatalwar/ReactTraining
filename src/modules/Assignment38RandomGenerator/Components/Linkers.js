import React from "react";
import { makeStyles, Link } from "@material-ui/core";

const styles = makeStyles({
  link: {
    padding: "0 15px",
    fontWeight: "900",
    color: "#343f52",
    "&:hover": {
      color: "#60697b",
      position: "relative",
      bottom: "3px",
    },
  },
});

export const Linkers = (props) => {
  const classes = styles();

  return (
    <>
      <Link href="#" className={classes.link} underline={"none"}>
        {props.name}
      </Link>
    </>
  );
};
