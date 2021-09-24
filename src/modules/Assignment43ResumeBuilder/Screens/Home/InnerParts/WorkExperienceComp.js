import { Divider, makeStyles } from "@material-ui/core";
import { Remove } from "@material-ui/icons";
import React from "react";
import ContentEditable from "react-contenteditable";
import { useDispatch, useSelector } from "react-redux";
import {
  handleWorkExperience,
  removeWorkExperience,
} from "../../../reduxComponents/action";

const styles = makeStyles({
  innerContainer: {
    margin: "15px 0",
  },
  container: {
    display: "flex",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  divider: {
    width: "2px",
    height: "17px",
    margin: "0 5px",
    backgroundColor: "black",
  },
});

export const WorkExperienceComp = ({ object, color }) => {
  const classes = styles();
  const dispatch = useDispatch();
  const { download } = useSelector((state) => {
    return state.dataReducer;
  });

  return (
    <div className={classes.innerContainer}>
      <div className={classes.iconContainer}>
        <ContentEditable
          style={{ width: "100%", color }}
          html={object.position}
          disabled={false}
          onChange={(e) => {
            dispatch(
              handleWorkExperience({
                id: object.id,
                key: "position",
                value: e.target.value,
              })
            );
          }}
        />
        {!download && (
          <Remove
            onClick={() => {
              dispatch(removeWorkExperience({ id: object.id }));
            }}
          />
        )}
      </div>
      <div className={classes.container}>
        <ContentEditable
          style={{ fontWeight: "bold" }}
          html={object.companyName}
          disabled={false}
          onChange={(e) => {
            dispatch(
              handleWorkExperience({
                id: object.id,
                key: "companyName",
                value: e.target.value,
              })
            );
          }}
        />
        <Divider orientation="vertical" className={classes.divider} />
        <ContentEditable
          html={object.dates}
          disabled={false}
          onChange={(e) => {
            dispatch(
              handleWorkExperience({
                id: object.id,
                key: "dates",
                value: e.target.value,
              })
            );
          }}
        />
      </div>
      <ContentEditable
        style={{ width: "100%", fontSize: "12px" }}
        html={object.description}
        disabled={false}
        onChange={(e) => {
          dispatch(
            handleWorkExperience({
              id: object.id,
              key: "description",
              value: e.target.value,
            })
          );
        }}
      />
    </div>
  );
};
