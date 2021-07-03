import {
  Collapse,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Paper,
} from "@material-ui/core";
import { ChromePicker } from "react-color";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "../reduxComponents/action";
import { CSSGenerator } from "./CSSGenerator";

const styles = makeStyles({
  right: {
    width: "20%",
  },
  heading: {
    fontWeight: "bold",
  },
  paper: {
    padding: "11px",
    margin: "14px",
  },
  colorPicker: {
    width: "100% !important",
  },
});

export const Left = () => {
  const classes = styles();
  const [open, setOpen] = useState({ cssopen: false, coloropen: false });
  const dispatch = useDispatch();
  const { color } = useSelector((state) => state.productReducer);

  return (
    <div className={classes.left}>
      <List aria-labelledby="nested-list-subheader">
        <Paper elevation={3} className={classes.paper}>
          <ListItem
            button
            onClick={() => {
              setOpen({ ...open, cssopen: !open.cssopen });
            }}
          >
            <ListItemText primary="Copy CSS To Website" />
            {open.cssopen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open.cssopen}>
            <CSSGenerator />
          </Collapse>
        </Paper>
        <Paper elevation={3} className={classes.paper}>
          <ListItem
            button
            onClick={() => {
              setOpen({ ...open, coloropen: !open.coloropen });
            }}
          >
            <ListItemText primary="Change Color Scheme" />
            {open.coloropen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open.coloropen}>
            <ChromePicker
              className={classes.colorPicker}
              color={color}
              onChangeComplete={(updatedColor) => {
                dispatch(changeColor(updatedColor.hex));
              }}
            />
          </Collapse>
        </Paper>
      </List>
    </div>
  );
};
