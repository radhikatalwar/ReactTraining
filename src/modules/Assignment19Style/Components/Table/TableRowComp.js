import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Typography, Paper } from "@material-ui/core";

const styles = makeStyles({
  row: {
    height: "70px",
  },
  paper: {
    height: "67px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  firstCell:{
    borderLeft:"4px solid #407dec"
  }
});

export const TableRowComp = () => {
  const classes = styles();
  return (
    <>
    {/* <Paper className={classes.paper}> */}
      <TableRow className={classes.row}>
        <TableCell key={"step"} className={classes.firstCell}>
          <Typography>{"6"}</Typography>
        </TableCell>

        <TableCell key={"description"}>
          <Typography className={classes.about}>
            {"descr 1 test1 pt3 tes"}
          </Typography>
        </TableCell>

        <TableCell key={"m/c"}>
          <Typography>{"OL1"}</Typography>
        </TableCell>
        <TableCell key={"needleType"}>
          <Typography>{"DCX27"}</Typography>
        </TableCell>
        <TableCell key={"smv"}>
          <Typography>{"0.3911"}</Typography>
        </TableCell>
        <TableCell key={"theorp"}>
          <Typography>{"0.39"}</Typography>
        </TableCell>
      </TableRow>
      {/* </Paper> */}
    </>
  );
};
