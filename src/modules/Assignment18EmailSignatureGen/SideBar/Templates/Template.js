import {
  FormControlLabel,
  makeStyles,
  Switch,
  Typography,
} from "@material-ui/core";
import { TemplateBox } from "./TemplateBox";

const styles = makeStyles({
  heading: {
    margin: "120px 63px 20px",
    fontSize: "21px",
    fontWeight: "bold",
  },
  switch: {
    marginLeft: "-84px",
  },
  switchLabel: {
    fontWeight: "bold",
    marginLeft: "45px ",
  },
});

export const Template = () => {
  const classes = styles();

  return (
    <>
      <Typography className={classes.heading}>
        {"Select Your Template"}
      </Typography>

      <FormControlLabel
        // value={mode}
        control={
          <Switch
            className={classes.switch}
            // onChange={setMode}
            color="default"
          />
        }
        label={
          <Typography className={classes.switchLabel}>
            {"Created With HubSpot"}
          </Typography>
        }
        labelPlacement={"top"}
      />

      <TemplateBox
        title={"Template 1"}
        id={1}
        src={
          "https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/templates/template-1.svg"
        }
      />
      <TemplateBox
        title={"Template 2"}
        id={2}
        src={
          "https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/templates/template-2.svg"
        }
      />
      <TemplateBox
        title={"Template 3"}
        id={3}
        src={
          "https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/templates/template-3.svg"
        }
      />
    </>
  );
};
