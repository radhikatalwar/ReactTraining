import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { TableLeftStation } from "./TableLeftStation";
import { TableleftSewing } from "./TableLeftSewing";
import { TableLeftOperator } from "./TableLeftOperator";
import { Typography } from "@material-ui/core";

const styles = makeStyles({
  header: {
    height: "60px",
  },
  headerCell: {
    color: "#6f6f6f",
    textAlign:"left",
    padding:"0 10px",
    backgroundColor:"white"
  },
});

const columns = [
  { id: "station", label: "Station", minWidth: "30%" },
  { id: "sewingOperation", label: "Sewing Operation", minWidth: "45%" },
  { id: "operator", label: "OPERATOR IN LINE", minWidth: "25%" },
];

export const Tableleft = () => {
  const classes = styles();
  return (
    <>
      <Table>
        <TableHead>
          <TableRow className={classes.header}>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                style={{ minWidth: column.minWidth }}
                className={classes.headerCell}
              >
                <Typography>{column.label}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell key={"station"}>
              <TableLeftStation />
            </TableCell>
            <TableCell key={"sewingOperation"}>
              <TableleftSewing />
            </TableCell>
            <TableCell key={"operator"}>
              <TableLeftOperator />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};
