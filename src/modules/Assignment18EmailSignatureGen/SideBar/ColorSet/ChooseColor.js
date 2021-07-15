import { Collapse, makeStyles, Typography, Paper } from "@material-ui/core";
import React, { useState } from "react";
import { ChromePicker } from "react-color";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { useDispatch, useSelector } from "react-redux";
import { HandleColor } from "../../reduxComponents/action";

const styles = makeStyles({
  subHeading: {
    margin: "50px 63px 5px",
    fontSize: "16px",
  },
  colorName: {
    display: "flex",
    alignItems: "center",
  },
  paper: {
    padding: "5px 10px",
    margin: "10px 10px 10px 63px ",
  },
  colorDisplayer: {
    height: "20px",
    width: "20px",
    borderRadius: "50%",
    color: "white",
  },
  colorPicker: {
    margin: "10px 63px",
    width: "162px !important",
  },
});

export const ChooseColor = () => {
  const classes = styles();
  const [open, setOpen] = useState({ theme: false, text: false, link: false });
  const dispatch = useDispatch();
  const { color } = useSelector((state) => state.infoReducer);
  const { themeColor, linkColor, textColor } = color;

  return (
    <>
      <Typography className={classes.subHeading}>
        {"Select Theme Color"}
      </Typography>
      <div className={classes.colorName}>
        <Paper elevation={3} className={classes.paper}>
          {themeColor}
        </Paper>
        <FiberManualRecordIcon
          fontSize={"large"}
          style={{ color: themeColor }}
          onClick={() => {
            setOpen({ ...open, theme: !open.theme });
          }}
        />
      </div>
      <Collapse in={open.theme}>
        <ChromePicker
          className={classes.colorPicker}
          color={themeColor}
          onChangeComplete={(updatedColor) => {
            dispatch(
              HandleColor({ color: updatedColor.hex, name: "themeColor" })
            );
          }}
        />
      </Collapse>
      <Typography className={classes.subHeading}>
        {"Select Text Color"}
      </Typography>
      <div className={classes.colorName}>
        <Paper elevation={3} className={classes.paper}>
          {textColor}
        </Paper>
        <FiberManualRecordIcon
          fontSize={"large"}
          style={{ color: textColor }}
          onClick={() => {
            setOpen({ ...open, text: !open.text });
          }}
        />
      </div>
      <Collapse in={open.text}>
        <ChromePicker
          className={classes.colorPicker}
          color={textColor}
          onChangeComplete={(updatedColor) => {
            dispatch(
              HandleColor({ color: updatedColor.hex, name: "textColor" })
            );
          }}
        />
      </Collapse>
      <Typography className={classes.subHeading}>
        {"Select Link Color"}
      </Typography>
      <div className={classes.colorName}>
        <Paper elevation={3} className={classes.paper}>
          {linkColor}
        </Paper>
        <FiberManualRecordIcon
          fontSize={"large"}
          style={{ color: linkColor }}
          onClick={() => {
            setOpen({ ...open, link: !open.link });
          }}
        />
      </div>
      <Collapse in={open.link}>
        <ChromePicker
          className={classes.colorPicker}
          color={linkColor}
          onChangeComplete={(updatedColor) => {
            dispatch(
              HandleColor({ color: updatedColor.hex, name: "linkColor" })
            );
          }}
        />
      </Collapse>
    </>
  );
};
