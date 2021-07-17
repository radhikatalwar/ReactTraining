import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Button, Typography } from "@material-ui/core";
import WarningIcon from "@material-ui/icons/Warning";

const styles = makeStyles({
  heading: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "60px",
  },
  button: {
    backgroundColor: "#2a89cc",
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
  headerCell: {
    backgroundColor: "#d6d6d6",
  },
  head: {
    color: "#6f6f6f",
    backgroundColor: "white",
  },
});

const columnOperator = [
  { id: "operator", label: "Operator", minWidth: "50%" },
  { id: "eff", label: "EFF", minWidth: "50%" },
];

export const TableRightOperator = (props) => {
  const classes = styles();

  return (
    <>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.header}>
            <TableCell className={classes.head}>
              <div className={classes.heading}>
                <Typography>{"OPERATOR POOL"}</Typography>
                <Button
                  className={classes.button}
                  onClick={() => {
                    props.HandleState();
                  }}
                >
                  {"LB"}
                </Button>
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
                    {columnOperator.map((column) => (
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
                  {new Array(9).fill("").map((obj, index) => {
                    return (
                      <TableRow className={classes.row}>
                        <TableCell key={"operator"}>
                          <Typography>{`60000${index}`}</Typography>
                        </TableCell>
                        <TableCell key={"eff"}>
                          <WarningIcon className={classes.icon} />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};
