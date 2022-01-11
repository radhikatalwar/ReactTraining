import React from "react";
import { Link, Button, makeStyles, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import VpnLockIcon from "@material-ui/icons/VpnLock";

const styles = makeStyles({
  post: {
    margin: "40px 20px 20px 43px",
    fontFamily: ['"Roboto"', '"Helvetica"', '"Arial"', "sans-serif"].join(","),
  },
  flex: { display: "flex" },
  button: { margin: "0 10px", color: "#388539" },
  icon: { color: "#388539" },
  link: { margin: "4px 0", color: "#388539" },
  advertisement: {
    display: "flex",
    justifyContent: "center",
    margin: "30px auto 0px",
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
  },
  margin: {
    margin: "0 5px",
  },
});

export default function PostAnAd() {
  const classes = styles();
  return (
    <div className={classes.post}>
      <div className={classes.flex}>
        <Typography variant={"h6"}>{"You can be the first one to"}</Typography>
        <Button
          variant="outlined"
          className={classes.button}
          startIcon={<AddIcon />}
        >
          {"Post An Ad"}
        </Button>
        <Typography variant={"h6"}>{"in the following categories:"}</Typography>
      </div>
      <div className={classes.flex}>
        <AddIcon className={classes.icon} />
        <Link href="#" underline="always" className={classes.link}>
          {"Buy Monero with cash in India"}
        </Link>
      </div>
      <div className={classes.advertisement}>
        <VpnLockIcon className={classes.margin} />
        <Typography variant={"p"} className={classes.margin}>
          {"Showing advertisements in India"}
        </Typography>
        <Button color="primary" className={classes.margin}>
          {"Change"}
        </Button>
      </div>
    </div>
  );
}
