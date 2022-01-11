import { Button, makeStyles, Paper, TextField } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addLanguage,
  HandleChange,
  removeBox,
} from "../reduxComponents/action";

const styles = makeStyles((theme) => ({
  lang: {
    minwidth: "30%",
    margin: "5px 10px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  input: {
    minWidth: "23%",
    margin: "10px 5px",
  },
  button: {
    textTransform: "none",
    fontWeight: "900",
    backgroundColor: "#018ba5",
    color: "white",
    margin: "10px",
    "&:hover": {
      backgroundColor: "#38555a",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  paper: {
    margin: "10px",
  },
}));

export const TextFieldComp = (props) => {
  const classes = styles();
  const dispatch = useDispatch();
  const { inputinStringForm, lang } = useSelector((state) => state.infoReducer);
  const valueInString = inputinStringForm[props.id];
  const language = lang[props.id];

  const handleOnChange = (event) => {
    const { value } = event.target;
    const newValues = value.split("\n");

    dispatch(
      HandleChange({
        arrayValue: newValues,
        id: props.id,
        stringvalue: value,
      })
    );
  };

  return (
    <>
      <Paper elevation={3} className={classes.paper}>
        <form className={classes.form}>
          <TextField
            className={classes.input}
            label={"Keys/Language"}
            onChange={(event) =>
              dispatch(addLanguage({ value: event.target.value, id: props.id }))
            }
            value={language}
            variant="outlined"
            placeholder={"Please Enter Language"}
          />
          <TextField
            label={"Values"}
            className={classes.input}
            multiline
            onChange={handleOnChange}
            rows={15}
            value={valueInString}
            variant="outlined"
            placeholder={"Please Enter Value"}
          />
          <Button
            variant="contained"
            className={classes.button}
            onClick={() => dispatch(removeBox(props.id))}
          >
            {"Remove Box"}
          </Button>
        </form>
      </Paper>
    </>
  );
};
