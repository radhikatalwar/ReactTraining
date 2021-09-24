import { Divider, makeStyles } from "@material-ui/core";
import { Remove } from "@material-ui/icons";
import React from "react";
import ContentEditable from "react-contenteditable";
import { useDispatch, useSelector } from "react-redux";
import {
  handleAcademicHistory,
  removeAcademicHistory,
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

export const AcademicHistoryComp = ({ object, color }) => {
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
          html={object.institute}
          disabled={false}
          onChange={(e) => {
            dispatch(
              handleAcademicHistory({
                id: object.id,
                key: "institute",
                value: e.target.value,
              })
            );
          }}
        />
        {!download && (
          <Remove
            onClick={() => {
              dispatch(removeAcademicHistory({ id: object.id }));
            }}
          />
        )}
      </div>
      <div className={classes.container}>
        <ContentEditable
          style={{ fontWeight: "bold" }}
          html={object.level}
          disabled={false}
          onChange={(e) => {
            dispatch(
              handleAcademicHistory({
                id: object.id,
                key: "level",
                value: e.target.value,
              })
            );
          }}
        />
        <Divider orientation="vertical" className={classes.divider} />
        <ContentEditable
          html={object.percentage}
          disabled={false}
          onChange={(e) => {
            dispatch(
              handleAcademicHistory({
                id: object.id,
                key: "percentage",
                value: e.target.value,
              })
            );
          }}
        />
        <Divider orientation="vertical" className={classes.divider} />
        <ContentEditable
          html={object.passingyear}
          disabled={false}
          onChange={(e) => {
            dispatch(
              handleAcademicHistory({
                id: object.id,
                key: "passingyear",
                value: e.target.value,
              })
            );
          }}
        />
      </div>
    </div>
  );
};
