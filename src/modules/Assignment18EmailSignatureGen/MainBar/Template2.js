import { Divider, makeStyles, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DemoValue } from "../reduxComponents/action";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

const styles = makeStyles({
  signature: {
    padding: "90px",
  },
  profile: {
    textAlign: "center",
  },
  picture: {
    height: "150px",
    borderRadius: "50%",
  },
  logo: {
    height: "50px",
    marginBottom: "10px",
  },
  about: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  phonedetails: {
    padding: "30px 0",
  },
  icon: {
    margin: "5px 10px 0 0",
    fontSize: "13px",
  },
  detailsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconBox: {
    display: "flex",
  },
  socialIcon: {
    marginRight: "10px",
  },
  companyDetails: {
    textAlign: "center",
  },
});

export const Template2 = () => {
  const classes = styles();
  const { user, demoValue, color, template } = useSelector(
    (state) => state.infoReducer
  );

  const dispatch = useDispatch();
  const {
    fname,
    lname,
    jobTitle,
    department,
    companyName,
    officeNo,
    mobileNo,
    email,
    address,
    linkedin,
    facebook,
    twitter,
    profilePic,
    companyLogo,
  } = user;

  useEffect(() => {
    for (var key in user) {
      if (user[key] !== "") {
        return dispatch(DemoValue(false));
      }
    }
    return dispatch(DemoValue(true));
  }, [user]);
  console.log(demoValue, user);

  return (
    <div className={classes.signature} style={{ color: color.textColor }}>
      <div className={classes.profile}>
        <img
          className={classes.picture}
          src={
            demoValue
              ? "https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/placeholders/placeholder-image@2x.png"
              : profilePic
          }
        />
      </div>
      <div className={classes.about}>
        <Typography variant="h6">
          {demoValue ? "John Smith" : `${fname} ${lname}`}
        </Typography>
        <Typography>{demoValue ? "Marketer" : jobTitle}</Typography>
        <Typography>
          {demoValue ? "Marketing | HubSpot" : `${department} | ${companyName}`}
        </Typography>
        <br />
      </div>
      <Divider style={{ backgroundColor: color.themeColor }} />
      <div className={classes.detailsContainer}>
        <div className={classes.phonedetails}>
          <Typography>
            <PhoneIcon className={classes.icon} />
            {demoValue
              ? "111 222 3333 | 111 222 3333"
              : `${mobileNo} | ${officeNo}`}
          </Typography>
          <Typography>
            <EmailIcon className={classes.icon} />
            {demoValue ? "www.hubspot.com" : email}
          </Typography>
          <Typography>
            <LocationOnIcon className={classes.icon} />
            {demoValue ? "address" : address}
          </Typography>
        </div>
        <div className={classes.companyDetails}>
          <img
            className={classes.logo}
            src={
              demoValue
                ? "https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/placeholders/logo-placeholder@2x.png"
                : companyLogo
            }
          />
          <div className={classes.iconBox}>
            <FacebookIcon
              className={classes.socialIcon}
              style={{ color: color.linkColor }}
              onClick={() => {
                window.location.href = facebook;
              }}
            />
            <LinkedInIcon
              className={classes.socialIcon}
              style={{ color: color.linkColor }}
              onClick={() => {
                window.location.href = linkedin;
              }}
            />
            <TwitterIcon
              className={classes.socialIcon}
              style={{ color: color.linkColor }}
              onClick={() => {
                window.location.href = twitter;
              }}
            />
          </div>
        </div>
      </div>
      <Divider style={{ backgroundColor: color.themeColor }} />
    </div>
  );
};
