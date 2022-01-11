import React, { useState } from "react";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Button from "@material-ui/core/Button";
import {
  makeStyles,
  Typography,
  InputLabel,
  FormControl,
  NativeSelect,
} from "@material-ui/core";
import Changes from "./Changes.js";

const Structure = {
  name: "Delhi",
  code: "110085",
  dailyCases: "2000",
  cumulativeCases: "3000",
  dailyDeaths: "200",
  cumulativeDeaths: "300",
};
const DataObj = [
  {
    name: "United Kingdom",
    code: "K02000001",
    dailyCases: "2524",
    cumulativeCases: "4393307",
    dailyDeaths: "33",
    cumulativeDeaths: "127307",
  },
];

const styles = makeStyles({
  button: {
    margin: "10px",
    fontWeight: "bold",
    fontSize: "20px",
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
  select: {
    padding: "5px",
  },
  error: {
    fontSize: "13px",
    margin: "10px 0 0",
  },
});

localStorage.setItem("Length", "80");
localStorage.setItem("Structure", JSON.stringify(Structure));
localStorage.setItem("DataObj", JSON.stringify(DataObj));

export default function MainPage() {
  const classes = styles();

  const [isSubmit, setIsSubmit] = useState(false);
  const [Error, setError] = useState("");
  const [value, setValue] = useState("");

  const handleSelectChange = (event) => {
    setValue(event.target.value);
  };

  const SetError = () => {
    if (value === "") {
      setError("Required Field");
    } else {
      setIsSubmit(true);
    }
  };

  if (!isSubmit) {
    return (
      <>
        <Typography variant={"h5"} className={classes.heading}>
          {"Select the option you want to edit"}
        </Typography>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-helper">{"Options"}</InputLabel>
          <NativeSelect
            onChange={handleSelectChange}
            className={classes.select}
          >
            <option defaultValue>{"Select-an-option"}</option>
            <option value="Length">{"Length"}</option>
            <option value="Structure">{"Structure"}</option>
            <option value="DataObj">{"DataObj"}</option>
          </NativeSelect>

          <Typography variant={"p"} className={classes.error}>
            {Error}
          </Typography>
        </FormControl>
        <Button
          variant="contained"
          className={classes.button}
          startIcon={<ExitToAppIcon />}
          onClick={SetError}
        >
          {"Submit"}
        </Button>
      </>
    );
  } else if (isSubmit) {
    return <Changes selected={value} />;
  }
}
