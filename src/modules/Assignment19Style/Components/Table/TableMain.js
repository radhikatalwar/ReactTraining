import {
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
} from "@material-ui/core";
import React from "react";
import { Tableleft } from "./TableLeft";
import { TableRight } from "./TableRight";

const styles = makeStyles({
  TableContainer: {
    display: "grid",
    gridTemplateColumns: "80% 20%",
    backgroundColor:"#f7f7f7",
  },
  
});

const theme = createMuiTheme({
  overrides: {
    MuiTableCell: {
      root: {
        padding: "0 5px",
        textAlign: "center",
        borderBottom: "0px",
      },
    },
    MuiCheckbox: {
      root: {
        padding: "0 2px",
      },
    },
  },
});

export const TableMain = () => {
  const classes = styles();
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.TableContainer}>
        <Tableleft />
        <TableRight />
      </div>
    </MuiThemeProvider>
  );
};
