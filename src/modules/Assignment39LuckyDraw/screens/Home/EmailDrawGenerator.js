import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { ModalComponent } from "./ModalComponent";

const styles = makeStyles({
  mainContainer: {
    display: "flex",
    alignItems: "center",
    padding: "20px 5% 50px 5%",
    justifyContent: "space-between",
  },
  leftMainContainer: {
    width: "44%",
    display: "flex",
    flexDirection: "column",
    padding: "50px",
    backgroundColor: "#f9f9f9",
  },
  rightMainContainer: {
    width: "45%",
  },
  input: { backgroundColor: "white", width: "100%", marginBottom: "10px" },
  heading: {
    fontSize: "16px",
    letterSpacing: "3px",
    fontWeight: "700",
    color: "#1b251d",
    marginBottom: "5px",
    display: "block",
    padding: "10px 0",
  },
  subHeading: {
    fontWeight: "900",
    fontSize: "52px",
    lineHeight: "1",
  },
  button: {
    margin: "20px 30px 0 0",
    fontSize: "17px",
    textTransform: "none",
    padding: "15px",
    color: "white",
    backgroundColor: "#1b251d",
    fontWeight: "900",
    width: "100%",
    letterSpacing: "2px",
    "&:hover": {
      color: "white",
      backgroundColor: "#1b251d",
    },
  },
});

export const EmailDrawGenerator = () => {
  const classes = styles();
  const [email, setEmail] = useState("");
  const [count, setCount] = useState("");
  var randomValues = [];
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!open);
  };

  const handleEmail = () => {
    var array = email.split("\n");

    if (array.length < count) {
      alert("Please give more emails");
    } else {
      while (randomValues.length < count) {
        const value = Math.floor(Math.random() * (array.length - 0) + 0);
        if (!randomValues.includes(array[value])) {
          randomValues.push(array[value]);
        }
      }
      localStorage.setItem("values", JSON.stringify(randomValues));
      setOpen(!open);
    }
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.leftMainContainer}>
        <Typography variant="h5" className={classes.heading}>
          {"LUCKY DRAW!"}
        </Typography>
        <Typography variant="h5" className={classes.subHeading}>
          {"Are You the Lucky one?"}
        </Typography>
        <ModalComponent handleModal={handleModal} open={open} />
        <form className={classes.form} noValidate autoComplete="off">
          <div>
            <Typography>{"No of Winners:"}</Typography>
            <TextField
              className={classes.input}
              type="number"
              variant="outlined"
              value={count}
              name="count"
              onChange={(e) => setCount(Number(e.target.value))}
            />
          </div>
          <div>
            <Typography>{"List of Emails:"}</Typography>
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
          </div>
          <Button
            fullWidth
            variant="contained"
            className={classes.button}
            endIcon={<ArrowRightAltIcon />}
            onClick={handleEmail}
          >
            {"Announce winners"}
          </Button>
        </form>
      </div>

      <div className={classes.rightMainContainer}>
        <img
          src="../images/assignment39/photo3.png"
          alt={"background"}
          width={"100%"}
        />
      </div>
    </div>
  );
};
