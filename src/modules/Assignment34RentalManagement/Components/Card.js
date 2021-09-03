import {
  Avatar,
  Button,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";

const styles = makeStyles({
  gridItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "260px",
    marginTop: "100px",
    position: "relative",
    backgroundColor: "#444444",
    color: "white",
  },
  avatar: {
    position: "absolute",
    height: "200px",
    width: "200px",
    top: "-29%",
    border: "10px solid #444444",
  },
  heading: {
    letterSpacing: "3px",
    fontWeight: "900",
    position: "absolute",
    bottom: "50px",
    fontSize: "25px",
  },
  button: {
    position: "absolute",
    bottom: "0",
    backgroundColor: "white",
    textTransform: "none",
    padding: "6px",
    fontSize: "14px",
    "&:hover": {
      backgroundColor: "white",
    },
  },
});

export const Card = ({ image, name, button, handleClick }) => {
  const classes = styles();

  return (
    <>
      <Paper className={classes.gridItem}>
        <Avatar
          className={classes.avatar}
          alt={name}
          src={`../images/category/${image}`}
        />
        <Typography className={classes.heading}>{name}</Typography>
        <Button
          fullWidth
          className={classes.button}
          onClick={() => handleClick(name)}
        >
          {button}
        </Button>
      </Paper>
    </>
  );
};
