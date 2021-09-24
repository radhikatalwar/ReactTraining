import { makeStyles } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DividerComp } from "../../../Components/Divider";
import { LabelComp } from "../../../Components/Label";
import { Add } from "@material-ui/icons";
import { addAcademicHistory } from "../../../reduxComponents/action";
import { AcademicHistoryComp } from "./AcademicHistoryComp";

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

export const AcademicHistory = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const { download, history, color } = useSelector((state) => {
    return state.dataReducer;
  });

  return (
    <div className={classes.container}>
      <DividerComp />
      <div className={classes.innerContainer}>
        <LabelComp label={"Academic History"} />
        {!download && <Add onClick={() => dispatch(addAcademicHistory())} />}
      </div>
      {history.map((object, index) => {
        return (
          <AcademicHistoryComp
            object={{ ...object }}
            key={index}
            color={color}
          />
        );
      })}
    </div>
  );
};
