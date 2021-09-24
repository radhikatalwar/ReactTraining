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

export const Cocurriculam = () => {
  const classes = styles();

  return (
    <div className={classes.container}>
      <DividerComp />
      <LabelComp label={"Co-Curriculam"} />
      <ContentEditableDiv
        value={"cocurriculam"}
        style={{
          fontSize: "16px",
        }}
      />
    </div>
  );
};
