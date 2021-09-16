import { makeStyles, Paper } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { trackAnswers } from "../../reduxComponents/action";

const styles = makeStyles({
  option: {
    width: "84%",
    padding: "20px",
    margin: "20px 30px",
    cursor: "pointer",
  },
  selected: {
    backgroundColor: "#2d81f7",
    fontWeight: "900",
    color: "white",
  },
});

export const Options = ({ optionArray, correct, id }) => {
  const classes = styles();
  const dispatch = useDispatch();
  const { trackOptions } = useSelector((state) => {
    return state.dataReducer;
  });

  const handleClick = (selectedOption, selectedIndex) => {
    if (selectedOption === correct) {
      dispatch(
        trackAnswers({ id, status: true, selectedOption, selectedIndex })
      );
    } else {
      dispatch(
        trackAnswers({ id, status: false, selectedOption, selectedIndex })
      );
    }
  };

  return (
    <>
      <Paper
        className={`${classes.option} ${
          trackOptions[id - 1] === 0 && classes.selected
        }`}
        onClick={() => handleClick(optionArray[0], 0)}
      >{console.log("mein yha bhi aaya kya?")}{`A. ${optionArray[0]}`}</Paper>
      <Paper
        className={`${classes.option} ${
          trackOptions[id - 1] === 1 && classes.selected
        }`}
        onClick={() => handleClick(optionArray[1], 1)}
      >{`B. ${optionArray[1]}`}</Paper>
      <Paper
        className={`${classes.option} ${
          trackOptions[id - 1] === 2 && classes.selected
        }`}
        onClick={() => handleClick(optionArray[2], 2)}
      >{`C. ${optionArray[2]}`}</Paper>
      <Paper
        className={`${classes.option} ${
          trackOptions[id - 1] === 3 && classes.selected
        }`}
        onClick={() => handleClick(optionArray[3], 3)}
      >{`D. ${optionArray[3]}`}</Paper>
    </>
  );
};
