import React from "react";
import ShareIcon from "@material-ui/icons/Share";
import { makeStyles, Typography } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import RedeemIcon from "@material-ui/icons/Redeem";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import SubjectIcon from "@material-ui/icons/Subject";

const styles = makeStyles({
  iconBox: {
    marginTop: "40px",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sidebar: {
    marginTop: "31%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  smallbox: {
    width: "32%",
    padding: "13px",
    borderRadius: "20px",
    color: "white",
    textAlign: "center",
    "&:hover": {
      background: `url("https://app.screpy.com/img/dashboard/header-bg.svg") no-repeat center `,
    },
  },
  title: {
    fontSize: "12px",
  },
});

export const Left = () => {
  const classes = styles();

  return (
    <>
      <div className={classes.iconBox}>
        <ShareIcon />
        <RedeemIcon />
        <SettingsIcon />
      </div>
      <div className={classes.sidebar}>
        <div className={classes.smallbox}>
          <TrendingUpIcon />
          <Typography className={classes.title}>{"Overview"}</Typography>
        </div>
        <div className={classes.smallbox}>
          <FormatListBulletedIcon />
          <Typography className={classes.title}>{"Tasks"}</Typography>
        </div>
        <div className={classes.smallbox}>
          <SubjectIcon />
          <Typography className={classes.title}>{"On page"}</Typography>
        </div>
      </div>
    </>
  );
};
