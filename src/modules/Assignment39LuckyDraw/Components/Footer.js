import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { FooterComp } from "./FooterComp";

const styles = makeStyles({
  footerContainer: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    padding: "20px 0",
    margin: "20px 10% 30px",
    justifyContent: "center",
  },
  infoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  copyright: { textAlign: "center" },
  iconContainer: {
    textAlign: "center",
  },
  icon: {
    color: "#1b251d",
    padding: "20px 10px",
    "&:hover": {
      position: "relative",
      bottom: "3px",
    },
  },
});

export const Footer = () => {
  const classes = styles();

  return (
    <div className={classes.footerContainer}>
      <div className={classes.infoContainer}>
        <FooterComp
          label={"Address"}
          line1={"Moonshine St. 14/05"}
          line2={"Light City, London, UK"}
        />
        <FooterComp
          label={"Phone no."}
          line1={"00 (123) 456 78 90"}
          line2={"00 (123) 456 78 90"}
        />
        <FooterComp
          label={"Email"}
          line1={"qwery@email.com"}
          line2={"help@qwery.com"}
        />
      </div>
      <Typography className={classes.copyright}>
        {"© 2021 Qwery. All rights reserved."}
      </Typography>
      <div className={classes.iconContainer}>
        <NotificationsNoneIcon className={classes.icon} />
        <InstagramIcon className={classes.icon} />
        <TwitterIcon className={classes.icon} />
        <WhatsAppIcon className={classes.icon} />
      </div>
    </div>
  );
};
