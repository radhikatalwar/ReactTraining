import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { twilight } from "react-syntax-highlighter/dist/esm/styles/prism";

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

export const Test = () => {
  const classes = styles();
  const [email, setEmail] = useState("");
  const [stringEmail, setStringEmail] = useState("");

  const handleEmail = () => {
    console.log(typeof stringEmail, typeof email);
    console.log(typeof JSON.parse(stringEmail));
    console.log(
      JSON.stringify({
        style: "hello",
        main: ["main1", "main2"],
        sub: "subhello",
      }),
      stringEmail
    );
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.leftMainContainer}>
        <Typography variant="h5" className={classes.heading}>
          {"Test"}
        </Typography>
        <form className={classes.form} noValidate autoComplete="off">
          <div>
            <Typography>{"Object:"}</Typography>
            <TextField
              className={classes.input}
              multiline
              onChange={(e) => {
                setEmail(e.target.value);
                setStringEmail(JSON.stringify(e.target.value));
              }}
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
            {"Proceed!"}
          </Button>
        </form>
      </div>

      <div className={classes.rightMainContainer}>
        <SyntaxHighlighter language="javascript" style={twilight}>
          {/* {JSON.stringify({
            style: "hello",
            main: ["main1", "main2"],
            sub: "subhello",
          })} */}
          {stringEmail}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
