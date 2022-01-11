import {
  createMuiTheme,
  Fab,
  makeStyles,
  MuiThemeProvider,
  Typography,
} from "@material-ui/core";
import React from "react";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import { InvoiceContainer } from "./Components/InvoiceContainer";

const styles = makeStyles({
  mainContainer: {
    maxWidth: "1120px",
    margin: "20px auto",
  },
  heading: {
    fontWeight: "900",
    letterSpacing: "-1px",
  },
  about: {
    color: "#4d4d4d",
    lineHeight: "28px",
    margin: "8px 0 24px",
  },
  fab: {
    position: "fixed",
    bottom: "45px",
    right: "45px",
    height: "60px",
    width: "60px",
    backgroundColor: "#146eb4",
    color: "white",
    zIndex: "999",
    "&:hover": {
      backgroundColor: "#146eb4",
    },
  },
  icon: {
    fontSize: "38px",
  },
});

const theme = createMuiTheme({
  overrides: {
    MuiTableCell: {
      root: {
        borderBottom: "0px",
      },
    },
  },
});


export const Assignment20InvoiceGenerator = () => {
  const classes = styles();
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.mainContainer}>
        <Typography variant="h4" className={classes.heading}>
          {"Free Invoice Generator"}
        </Typography>
        <Typography variant="h6" className={classes.about}>
          {
            "Billing your clients got super easy with this free online invoice generator. No more downloading or signing up required. Give your client details and generate a free PDF invoice online!"
          }
        </Typography>
        <InvoiceContainer />
        <Fab className={classes.fab}>
          <ModeCommentIcon className={classes.icon} />
        </Fab>
      </div>
    </MuiThemeProvider>
  );
};
