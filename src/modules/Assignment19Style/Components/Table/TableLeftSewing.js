import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { TableRowComp } from "./TableRowComp";
import { Paper } from "@material-ui/core";

const styles = makeStyles({
  header: {
    height: "32px",
  },
  headerCell: {
    backgroundColor: "#d6d6d6",
  },
});

const columns = [
  { id: "step", label: "STEP", minWidth: "10%" },
  { id: "description", label: "Description", minWidth: "30%" },
  { id: "m/c", label: "M/C", minWidth: "15%" },
  { id: "needleType", label: "Needle Type", minWidth: "15%" },
  { id: "smv", label: "100% SMV", minWidth: "15%" },
  { id: "theor", label: "THEOR MPWR", minWidth: "15%" },
];

export const TableleftSewing = () => {
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
          {new Array(9).fill("").map((o, i) => {
            return <TableRowComp />;
          })}
        </TableBody>
      </Table>
    </>
  );
};
