import {
  makeStyles,
  Paper,
  Button,
  Divider,
  Typography,
} from "@material-ui/core";
import React, { createRef, useState } from "react";
import { ContentEditableDiv } from "./ContentEditableDiv";
import { Data } from "./Data";
import ReactToPdf from "react-to-pdf";
import { TableComp } from "./TableComp";

const styles = makeStyles({
  InvoiceContainer: {
    display: "grid",
    gridTemplateColumns: "65% 35%",
  },
  paperButton: {
    marginLeft: "7%",
    height: "fit-content",
    position: "sticky",
    top: "25px",
  },
  button: {
    fontSize: "18px",
    textTransform: "none",
    backgroundColor: "#146eb4",
    color: "white",
    margin: "32px",
    width: "82%",
    fontWeight: "900",
    "&:hover": {
      backgroundColor: "#146eb4",
    },
  },
  paperLeft: {
    padding: "32px",
  },
  divider: {
    backgroundColor: "#d9d9d9",
    margin: "20px 0",
  },
  lastLine: {
    textAlign: "center",
    margin: "20px",
    display: "none",
  },
  block: {
    display: "block",
  },
});

export const InvoiceContainer = () => {
  const classes = styles();
  localStorage.setItem(
    "message",
    "<span>Dear Ms. Jane Doe,</span><br/><br/><span>Please find below a cost-breakdown for the recent work completed. Please make payment at your earliest convenience, and do not hesitate to contact me with any questions.</span><br/><br/><span>Many thanks,</span><br/><span>Your Name</span><br/>"
  );

  localStorage.setItem(
    "goodByeMessage",
    "<span>Many thanks for your custom! I look forward to doing business with you again in due course.</span><br/><br/><span>Payment terms: to be received within 60 days.</span><br/>"
  );
  const ref = createRef();

  const HandleClick = () => {
    setItem(true);
    setTimeout(() => {
      setItem(false);
    }, 1000);
  };

  const [item, setItem] = useState(false);

  return (
    <div className={classes.InvoiceContainer}>
      <Paper elevation={2} className={classes.paperLeft} ref={ref}>
        <Data />
        <Divider className={classes.divider} />
        <ContentEditableDiv
          name={"message"}
          style={{ lineHeight: "22px", fontSize: "14px" }}
        />
        <TableComp />
        <ContentEditableDiv
          name={"goodByeMessage"}
          style={{ lineHeight: "22px", fontSize: "14px", marginTop: "20px" }}
        />
        <Typography className={`${classes.lastLine} ${item && classes.block}`}>
          {"Powered By Free Invoice Generator"}
        </Typography>
      </Paper>
      <Paper className={classes.paperButton} elevation={2}>
        <ReactToPdf targetRef={ref} filename="Invoice.pdf">
          {({ toPdf }) => (
            <Button
              className={classes.button}
              onClick={() => {
                HandleClick();
                toPdf();
              }}
            >
              {"Download this Invoice"}
            </Button>
          )}
        </ReactToPdf>
      </Paper>
    </div>
  );
};
