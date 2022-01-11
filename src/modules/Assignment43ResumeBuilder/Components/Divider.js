import { Divider, makeStyles } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

const styles = makeStyles({
  divider: {
    height: "2px",
    margin: "12px 0",
  },
});

export const DividerComp = () => {
  const classes = styles();

  const { color } = useSelector((state) => {
    return state.dataReducer;
  });

  return (
    <div className={classes.container}>
      <Divider className={classes.divider} style={{ backgroundColor: color }} />
    </div>
  );
};
