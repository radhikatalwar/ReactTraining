import React from "react";
import { AppBar, Toolbar, Button, makeStyles } from "@material-ui/core";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

const styles = makeStyles({
  addbar: {
    backgroundColor: "white",
    position: "fixed",
    top: "0",
    fontFamily: ['"Roboto"', '"Helvetica"', '"Arial"', "sans-serif"].join(","),
  },
  toolbar: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
  },
  switch: {
    fontSize: "0.8rem",
    color: "black",
    marginTop:"20px",
  },
  button: {
    padding: "7px 16px",
    fontSize: "13px",
    fontWeight: "600",
    margin: "0 5px",
  },
  button1: {
    backgroundColor: "#388539",
  },
  button2: {
    backgroundColor: "#1565c0",
  },
});

export default function SideDrawer() {
  const classes = styles();
  return (
    <>
      <AppBar
        position="fixed"
        style={{ width: "calc(100% - 62px)" }}
        className={classes.addbar}
      >
        <Toolbar className={classes.toolbar}>
          <div>
            <FormControlLabel
              value="bottom"
              control={
                <Switch
                  color="primary"
                  size="small"
                  checked={true}
                  className={classes.switch}
                />
              }
              label="On"
              labelPlacement="bottom"
            />
          </div>
          <div>
            <Button
              variant="contained"
              color="primary"
              className={`${classes.button} ${classes.button1}`}
              size="large"
              startIcon={<PersonAddIcon />}
            >
              {"  Sign up free"}
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={`${classes.button} ${classes.button2}`}
              size="large"
              startIcon={<FingerprintIcon />}
            >
              {" log in"}
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
