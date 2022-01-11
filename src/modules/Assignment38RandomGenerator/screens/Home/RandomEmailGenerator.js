import {
  Button,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

const styles = makeStyles({
  mainContainer: {
    display: "flex",
    alignItems: "center",
    padding: "20px 10% 50px 10%",
    justifyContent: "space-between",
  },
  leftMainContainer: {
    width: "45%",
    display: "flex",
    alignItems: "center",
  },
  rightMainContainer: {
    width: "49%",
  },
  image: {
    width: "100%",
    marginLeft: "120px",
  },
  input: { backgroundColor: "white", width: "100%" },
  paper: { padding: "50px", backgroundColor: "#a07cc5" },
  heading: {
    fontSize: "25px",
    letterSpacing: "1px",
    fontWeight: "700",
    backgroundColor: "white",
    color: "#a07cc5",
    marginBottom: "15px",
    display: "block",
    padding: "5px 10px",
  },
  emailSelected: {
    fontSize: "17px",
  },
  button: {
    margin: "20px 30px 0 0",
    fontSize: "17px",
    textTransform: "none",
    padding: "15px",
    color: "#a07cc5",
    backgroundColor: "white",
    fontWeight: "900",
    width: "100%",
    "&:hover": {
      color: "#a07cc5",
      backgroundColor: "white",
    },
  },
  mainHeading: {
    textAlign: "center",
    marginTop: "30px",
    fontSize: "31px",
    letterSpacing: "2px",
    fontWeight: "900",
    color: "#a07cc5",
    fontFamily: "ui-monospace",
  },
});

export const RandomEmailGenerator = () => {
  const classes = styles();
  const [email, setEmail] = useState("");
  const [randomVal, setRandomVal] = useState("abc@gmail.com");

  const handleEmail = () => {
    var array = email.split("\n");
    const valueToBeSelected = Math.floor(
      Math.random() * (array.length - 0) + 0
    );
    setRandomVal(array[valueToBeSelected]);
  };

  return (
    <>
      <Typography className={classes.mainHeading}>
        {"Random Email Generator"}
      </Typography>
      <div className={classes.mainContainer}>
        <div className={classes.leftMainContainer}>
          <Paper className={classes.paper} elevation={7}>
            <Typography
              variant="h5"
              className={classes.heading}
            >{`Random Email:`}</Typography>
            <Typography
              variant="h5"
              className={`${classes.heading} ${classes.emailSelected}`}
            >
              {randomVal}
            </Typography>
            <form className={classes.form} noValidate autoComplete="off">
              <TextField
                label={"Emails"}
                className={classes.input}
                multiline
                onChange={(e) => setEmail(e.target.value)}
                rows={10}
                value={email}
                variant="outlined"
                placeholder={"Please Enter Value"}
              />
              <Button
                fullWidth
                variant="contained"
                className={classes.button}
                onClick={handleEmail}
              >
                {"Generate Email"}
              </Button>
            </form>
          </Paper>
        </div>
        <div className={classes.rightMainContainer}>
          <img
            src="../images/assignment38/photo2.png"
            alt={"background"}
            width={"100%"}
          />
        </div>
      </div>
    </>
  );
};
