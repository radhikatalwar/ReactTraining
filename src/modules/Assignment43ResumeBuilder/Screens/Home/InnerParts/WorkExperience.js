import { makeStyles } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DividerComp } from "../../../Components/Divider";
import { LabelComp } from "../../../Components/Label";
import { WorkExperienceComp } from "./WorkExperienceComp";
import { Add } from "@material-ui/icons";
import { addWorkExperience } from "../../../reduxComponents/action";

const styles = makeStyles({
  container: {
    margin: "20px 0",
  },
  innerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export const WorkExperience = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const { download, experience, color } = useSelector((state) => {
    return state.dataReducer;
  });

  return (
    <div className={classes.container}>
      <DividerComp />
      <div className={classes.innerContainer}>
        <LabelComp label={"Work Experience"} />
        {!download && <Add onClick={() => dispatch(addWorkExperience())} />}
      </div>
      {experience.map((object, index) => {
        return (
          <WorkExperienceComp
            object={{ ...object }}
            key={index}
            color={color}
          />
        );
      })}
    </div>
  );
};
