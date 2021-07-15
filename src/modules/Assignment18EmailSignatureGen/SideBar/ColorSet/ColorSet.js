import { makeStyles, Slider, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { handleFontSize, handleTemplate } from "../../reduxComponents/action";
import { ChooseColor } from "./ChooseColor";

const styles = makeStyles({
  heading: {
    margin: "120px 63px 35px",
    fontSize: "21px",
    fontWeight: "bold",
  },
  subHeading: {
    margin: "50px 63px 5px",
    fontSize: "16px",
  },
  slider: {
    color: "white",
    margin: "10px 63px",
    width: "-webkit-fill-available",
  },
});

export const ColorSet = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const [value, setValue] = useState(34);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue < 30) {
      dispatch(handleFontSize("15px"));
    } else if (newValue > 30 && newValue < 60) {
      dispatch(handleFontSize("20px"));
    } else {
      dispatch(handleFontSize("25px"));
    }
  };

  return (
    <>
      <Typography className={classes.heading}>
        {"Stylize Your Signature"}
      </Typography>
      <ChooseColor />
      <Typography className={classes.subHeading}>{"Font Size"}</Typography>
      <Slider
        className={classes.slider}
        value={value}
        onChange={handleChange}
        aria-labelledby="continuous-slider"
      />
    </>
  );
};
