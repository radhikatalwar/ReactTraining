import { makeStyles, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { FormFields } from "../Details/FormFields";

const styles = makeStyles({
  heading: {
    margin: "120px 63px 20px",
    fontSize: "21px",
    fontWeight: "bold",
  },
  ctc: {
    margin: "40px 63px 20px",
    fontSize: "21px",
    fontWeight: "bold",
  },
});

export const Photo = () => {
  const classes = styles();
  const { user } = useSelector((state) => state.infoReducer);
  const { profilePic, companyLogo } = user;

  return (
    <>
      <Typography className={classes.heading}>
        {"Upload Your Custom Signature Images"}
      </Typography>
      <FormFields
        name={"profilePic"}
        label={"Profile Picture"}
        value={profilePic}
      />
      <FormFields
        name={"companyLogo"}
        label={"Company Logo"}
        value={companyLogo}
      />
      <Typography className={classes.ctc}>{"Create a Custom CTA"}</Typography>
      <FormFields name={"copy"} label={"Custom CTA Copy"} />
      <FormFields name={"url"} label={"Custom CTA URL"} />
    </>
  );
};
