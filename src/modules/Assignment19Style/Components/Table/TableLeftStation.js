import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {
  Checkbox,
  FormControlLabel,
  Paper,
  Typography,
} from "@material-ui/core";

const styles = makeStyles({
  row: {
    height: "70px",
  },
  header: {
    backgroundColor: "#d6d6d6",
  },
  paper: {
    height: "67px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const TableLeftStation = () => {
  const classes = styles();
  return (
    <>
      <Table stickyHeader={true} aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.header}>
              <FormControlLabel
                control={<Checkbox name="checkbox" />}
                label={<Typography variant="h6">{"#"}</Typography>}
              />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {new Array(9).fill("").map((obj, index) => {
            return (
              <TableRow className={classes.row}>
                <Paper className={classes.paper} square elevation={0}>
                  <TableCell>
                    <FormControlLabel
                      control={<Checkbox name="checkbox" />}
                      label={index + 1}
                    />
                  </TableCell>
                </Paper>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};
