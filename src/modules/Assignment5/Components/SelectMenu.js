import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  MenuList,
  makeStyles,
} from "@material-ui/core";

const styles = makeStyles({});

export default function SelectMenu(props) {
  const classes = styles();
  return (
    <>
      <FormControl
        variant="outlined"
        className={classes.formControl}
        fullWidth={true}
      >
        <InputLabel>{props.label}</InputLabel>
        <Select native label={props.label}>
          <MenuList>
            <MenuItem>{"hello"}</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Select>
      </FormControl>
    </>
  );
}
