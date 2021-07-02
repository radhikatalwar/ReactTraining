import {
  Collapse,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { ChromePicker } from "react-color";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "../reduxComponents/action";

const styles = makeStyles({
  right: {
    width: "20%",
  },
  heading: {
    fontWeight: "bold",
  },
  paper: {
    width: "85%",
    padding: "11px",
    margin: "14px",
  },
});

export const Left = () => {
  const classes = styles();
  const [open, setOpen] = useState({ cssopen: false, coloropen: false });
  const dispatch = useDispatch();
  const { color, products } = useSelector((state) => state.productReducer);

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
            <ListItemText />
            <Typography className={classes.heading}>
              {"Copy CSS To Website"}
            </Typography>
            {open.cssopen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open.cssopen}></Collapse>
        </Paper>
        <Paper elevation={3} className={classes.paper}>
          <ListItem
            button
            onClick={() => {
              setOpen({ ...open, coloropen: !open.coloropen });
            }}
          >
            <ListItemText />
            <Typography className={classes.heading}>
              {"Change Color Scheme"}
            </Typography>
            {open.coloropen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open.coloropen}>
            <ChromePicker
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
