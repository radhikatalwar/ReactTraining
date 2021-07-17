import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Button, Typography } from "@material-ui/core";
import WarningIcon from "@material-ui/icons/Warning";
import ClearIcon from "@material-ui/icons/Clear";

const styles = makeStyles({
  heading: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "60px",
  },
  button: {
    backgroundColor: "Blue",
    color: "white",
    fontWeight: "bold",
    padding: "5px",
    margin: "0 10px",
  },
  icon: {
    color: "red",
  },
  row: {
    height: "70px",
  },
  header: {
    height: "32px",
  },
  table: {
    position: "fixed",
    right: "0",
    top: "0",
    width: "20%",
  },
  lineBalance: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "60px",
    backgroundColor: "#2a89cc",
    color: "white",
    fontWeight: "bold",
    padding: "0 5px",
  },
  line: {
    width: "1px",
    margin: "0 11px",
    height: "630px",
    backgroundColor: "gainsboro",
  },
  headerCell: {
    backgroundColor: "#d6d6d6",
  },
});

const columnLineBalance = [
  { id: "6s", label: "6s", minWidth: "14%" },
  { id: "12s", label: "12s", minWidth: "14%" },
  { id: "18s", label: "18s", minWidth: "14%" },
  { id: "Takt", label: "Takt", minWidth: "14%" },
  { id: "30s", label: "30s", minWidth: "14%" },
  { id: "36s", label: "36s", minWidth: "14%" },
  { id: "42s", label: "42s", minWidth: "14%" },
];

export const TableRightLineBalance = (props) => {
  const classes = styles();

  return (
    <>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.header}>
            <TableCell>
              <div className={classes.lineBalance}>
                <Typography>{"Line Balance"}</Typography>
                <ClearIcon
                  onClick={() => {
                    props.HandleState();
                  }}
                />
              </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Table>
                <TableHead>
                  <TableRow className={classes.header}>
                    {columnLineBalance.map((column) => (
                      <TableCell
                        key={column.id}
                        style={{ minWidth: column.minWidth }}
                        className={classes.headerCell}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow className={classes.row}>
                    {columnLineBalance.map((o, i) => {
                      return (
                        <TableCell key={"operator"}>
                          <div className={classes.line}> </div>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                </TableBody>
              </Table>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};
