import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Typography } from "@material-ui/core";

const styles = makeStyles({
  firstCell:{
    borderLeft:"4px solid #9a9a9a"
  }
});

export const TableLeftOperatorRow = (props) => {
  const classes = styles();
  return (
    <>
      <TableRow style={{ height: props.height }}>
        <TableCell key={"operator"} className={classes.firstCell}>
          <Typography>{"600001"}</Typography>
        </TableCell>
        <TableCell key={"act"}>
          <Typography>{"1"}</Typography>
        </TableCell>
        <TableCell key={"eff"}></TableCell>
      </TableRow>
    </>
  );
};
