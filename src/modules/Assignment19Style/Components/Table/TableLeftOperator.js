import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { TableLeftOperatorRow } from "./TableLeftOperatorRow";

const styles = makeStyles({
  header: {
    height: "32px",
  },
  headerCell: {
    backgroundColor: "#d6d6d6",
  },
});

const columns = [
  { id: "opeartor", label: "Operator", minWidth: "30%" },
  { id: "act", label: "ACT MPWR", minWidth: "40%" },
  { id: "eff", label: "EFF", minWidth: "30%" },
];

export const TableLeftOperator = () => {
  const classes = styles();
  return (
    <>
      <Table
        stickyHeader={true}
        aria-label="sticky table"
        className={classes.Table}
      >
        <TableHead>
          <TableRow className={classes.header}>
            {columns.map((column) => (
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
          <TableLeftOperatorRow height="70px" />
          <TableLeftOperatorRow height="70px" />
          <TableLeftOperatorRow height="70px" />
          <TableLeftOperatorRow height="70px" />
          <TableLeftOperatorRow height="70px" />
          <TableLeftOperatorRow height="140px" />
          <TableLeftOperatorRow height="140px" />
        </TableBody>
      </Table>
    </>
  );
};
