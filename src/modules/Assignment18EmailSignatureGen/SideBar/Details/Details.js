import { makeStyles, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { FormFields } from "./FormFields";

const styles = makeStyles({
  heading: {
    margin: "120px 63px 20px",
    fontSize: "21px",
    fontWeight: "bold",
  },
  social: {
    margin: "40px 63px 20px",
    fontSize: "21px",
    fontWeight: "bold",
  },
});

export const Details = () => {
  const classes = styles();
  const { user } = useSelector((state) => state.infoReducer);
  const {
    fname,
    lname,
    jobTitle,
    department,
    companyName,
    officeNo,
    mobileNo,
    websiteURL,
    email,
    address,
    linkedin,
    facebook,
    twitter,
    linkedinIcon,
    facebookIcon,
    twitterIcon,
  } = user;

  return (
    <>
      <Typography className={classes.heading}>
        {"Enter Your Signature Details"}
      </Typography>
      <FormFields name={"fname"} label={"First Name"} value={fname} />
      <FormFields name={"lname"} label={"Last Name"} value={lname} />
      <FormFields name={"jobTitle"} label={"Job Title"} value={jobTitle} />
      <FormFields name={"department"} label={"Department"} value={department} />
      <FormFields
        name={"companyName"}
        label={"Company Name"}
        value={companyName}
      />
      <FormFields name={"officeNo"} label={"Office Number"} value={officeNo} />
      <FormFields name={"mobileNo"} label={"Mobile Number"} value={mobileNo} />
      <FormFields
        name={"websiteURL"}
        label={"Website URL"}
        value={websiteURL}
      />
      <FormFields name={"email"} label={"Email Address"} value={email} />
      <FormFields name={"address"} label={"Address"} value={address} />
      <Typography className={classes.social}>
        {"Enter Your Social Links"}
      </Typography>
      <FormFields
        name={"linkedinIcon"}
        label={"LinkedIn Icon"}
        value={linkedinIcon}
      />
      <FormFields name={"linkedin"} label={"LinkedIn Link"} value={linkedin} />
      <FormFields
        name={"facebookIcon"}
        label={"Facebook Icon "}
        value={facebookIcon}
      />
      <FormFields name={"facebook"} label={"Facebook Link"} value={facebook} />

      <FormFields
        name={"twitterIcon"}
        label={"Twitter Icon"}
        value={twitterIcon}
      />
      <FormFields name={"twitter"} label={"Twitter Link"} value={twitter} />
    </>
  );
};
