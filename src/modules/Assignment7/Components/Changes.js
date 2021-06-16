import React, { useState } from "react";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Button from "@material-ui/core/Button";
import {
  makeStyles,
  Typography,
  TextField,
  FormControl,
  NativeSelect,
} from "@material-ui/core";

const Length = localStorage.getItem("Length");
const Structure = JSON.parse(localStorage.getItem("Structure"));
const DataObj = JSON.parse(localStorage.getItem("DataObj") || "[]");

const styles = makeStyles({
  button: {
    margin: "10px",
    fontWeight: "bold",
    fontSize: "15px",
    backgroundColor: "#00BCD4",
    color: "white",
    "&:hover": {
      backgroundColor: "#048b9c",
    },
  },
  formControl: {
    width: "200px",
    margin: "21px",
  },
  para: {
    margin: "10px 0",
  },
  error: {
    fontSize: "13px",
    margin: "10px 0 0",
  },
});

const Changes = (props) => {
  const classes = styles();
  const value = props.selected;
  const [isError, setIsError] = useState(false);
  const [newValue, setNewValue] = useState("");
  const [optionvalue, setOptionValue] = useState("");

  const handleOptionSelect = (event) => {
    setOptionValue(event.target.value);
    console.log(event.target.value);
  };

  const handleSelectChange = (event) => {
    setNewValue(event.target.value);
  };

  const SetValue = () => {
    if (newValue === "") {
      setIsError(true);
    } else {
      console.log(`"newvalue" : ${newValue}`);
      if (value == "Length") {
        localStorage.setItem("Length", newValue);
      }
    }
  };

  if (value === "Length") {
    return (
      <>
        <Typography variant={"h5"}>
          {`Length :`}
          {newValue === "" ? localStorage.getItem("Length") : newValue}
        </Typography>
        <FormControl className={classes.formControl}>
          <TextField
            error={isError}
            label="Give New Value"
            id="filled-error-helper-text"
            helperText={isError ? "Required Field" : " "}
            autoComplete="false"
            onChange={handleSelectChange}
          />
        </FormControl>
        <Button
          variant="contained"
          className={classes.button}
          startIcon={<ExitToAppIcon />}
          onClick={SetValue}
        >
          {"Make Changes"}
        </Button>
      </>
    );
  } else if (value === "Structure") {
    var keys = Object.keys(Structure);
    console.log(keys);

    return (
      <>
        <Typography variant={"p"}>
          {`${value} : ${localStorage.getItem("Structure")}`}
        </Typography>
        <FormControl className={classes.formControl}>
          <NativeSelect
            onChange={handleOptionSelect}
            className={classes.select}
          >
            <option defaultValue>{"Select-an-option"}</option>
            {keys.map((elem) => (
              <option>{elem}</option>
            ))}
            ;
          </NativeSelect>
          <TextField
            error={isError}
            label="Give New Value"
            id="filled-error-helper-text"
            helperText={isError ? "Required Field" : " "}
            autoComplete="false"
            onChange={handleSelectChange}
          />
        </FormControl>
        <Button
          variant="contained"
          className={classes.button}
          startIcon={<ExitToAppIcon />}
          onClick={SetValue}
        >
          {"Make Changes"}
        </Button>
      </>
    );
  } else if (value === "DataObj") {
    var keys = Object.keys(DataObj[0]);
    console.log(keys);

    return (
      <>
        <Typography variant={"p"}>
          {`${value} : ${localStorage.getItem("DataObj")}`}
        </Typography>
        <FormControl className={classes.formControl}>
          <NativeSelect
            onChange={handleOptionSelect}
            className={classes.select}
          >
            <option defaultValue>{"Select-an-option"}</option>
            {keys.map((elem) => (
              <option>{elem}</option>
            ))}
            ;
          </NativeSelect>
          <TextField
            error={isError}
            label="Give New Value"
            id="filled-error-helper-text"
            helperText={isError ? "Required Field" : " "}
            autoComplete="false"
            onChange={handleSelectChange}
          />
        </FormControl>
        <Button
          variant="contained"
          className={classes.button}
          startIcon={<ExitToAppIcon />}
          onClick={SetValue}
        >
          {"Make Changes"}
        </Button>
      </>
    );
  }
};

export default Changes;
