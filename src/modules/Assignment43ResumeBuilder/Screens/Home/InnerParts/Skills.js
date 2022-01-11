import { makeStyles } from "@material-ui/core";
import React from "react";
import { ContentEditableDiv } from "../../../Components/ContentEditableDiv";
import { DividerComp } from "../../../Components/Divider";
import { LabelComp } from "../../../Components/Label";

const styles = makeStyles({
  container: {
    margin: "20px 0",
  },
});

export const Skills = () => {
  const classes = styles();

  return (
    <div className={classes.container}>
      <DividerComp />
      <LabelComp label={"Skills"} />
      <ContentEditableDiv
        value={"skills"}
        style={{
          fontSize: "16px",
          fontWeight: "900",
        }}
      />
    </div>
  );
};
