import { Divider, makeStyles, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DemoValue, handleSourceCode } from "../reduxComponents/action";
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
  box: {
    display: "flex",
    justifyContent: "space-between",
    margin: "15px 0",
    alignItems: "center",
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
  divide: {
    height: "150px",
  },
});

export const Template3 = () => {
  const classes = styles();
  const { user, demoValue, color } = useSelector((state) => state.infoReducer);

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

  const code = `<table
      cellpadding="0"
      cellspacing="0"
      class="sc-gPEVay eQYmiW"
      style='vertical-align: -webkit-baseline-middle; font-size: large; font-family: "Lucida Sans Unicode";'
    >
      <tbody>
        <tr>
          <td>
            <table
              cellpadding="0"
              cellspacing="0"
              class="sc-gPEVay eQYmiW"
              style='vertical-align: -webkit-baseline-middle; font-size: large; font-family: "Lucida Sans Unicode";'
            >
              <tbody>
                <tr>
                  <td style="vertical-align: middle;">
                    <h3
                      color="#6041f0"
                      class="sc-fBuWsC eeihxG"
                      style="margin: 0px; font-size: 20px; color: rgb(96, 65, 240);"
                    >
                      <span>${fname} ${lname}</span>
                      <span>${companyName}&nbsp;${department}</span>
                      <span>${jobTitle}</span>
                    </h3>
                  </td>
                  <td width="30">
                    <div style="width: 30px;"></div>
                  </td>
                  <td width="30">
                    <div style="width: 30px;"></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <table
              cellpadding="0"
              cellspacing="0"
              class="sc-gPEVay eQYmiW"
              style='vertical-align: -webkit-baseline-middle; font-size: large; font-family: "Lucida Sans Unicode"; width: 100%;'
            >
              <tbody>
                <tr>
                  <td height="30"></td>
                </tr>
                <tr>
                  <td
                    color="#d95546"
                    direction="horizontal"
                    height="1"
                    class="sc-jhAzac hmXDXQ"
                    style="width: 100%; border-bottom: 1px solid rgb(217, 85, 70); border-left: none; display: block;"
                  ></td>
                </tr>
                <tr>
                  <td height="30"></td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <table
              cellpadding="0"
              cellspacing="0"
              class="sc-gPEVay eQYmiW"
              style='vertical-align: -webkit-baseline-middle; font-size: large; font-family: "Lucida Sans Unicode"; width: 100%;'
            >
              <tbody>
                <tr>
                  <td style="vertical-align: top;"></td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td height="30"></td>
        </tr>
        <tr>
          <td style="text-align: center;">
            <a
              href=${companyLogo}
              target="_blank"
              rel="noopener noreferrer"
              class="sc-gisBJw kDlVKO"
              style="font-size: 12px; display: block; color: rgb(96, 65, 240);"
            >
              Create Your Own Free Signature
            </a>
          </td>
        </tr>
      </tbody>
    </table>`;

  useEffect(() => {
    dispatch(handleSourceCode({ name: "three", code }));
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
      <div className={classes.box}>
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
            {demoValue
              ? "Marketing | HubSpot"
              : `${department} | ${companyName}`}
          </Typography>
        </div>
        <Divider
          className={classes.divide}
          style={{ backgroundColor: color.themeColor }}
          orientation={"vertical"}
        />
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
      </div>
      <Divider style={{ backgroundColor: color.themeColor }} />
      <div className={classes.box}>
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
      <Divider style={{ backgroundColor: color.themeColor }} />
    </div>
  );
};
