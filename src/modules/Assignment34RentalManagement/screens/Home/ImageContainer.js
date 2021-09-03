import { Avatar, makeStyles } from "@material-ui/core";
import React from "react";
import Category from "../../utils/images";

const styles = makeStyles({
  imagesContainer: {
    width: "20%",
    position: "relative",
  },
  avatar: {
    height: "175px",
    width: "175px",
    position: "absolute",
  },
  booms: {
    top: "70px",
  },
  forkLifts: {
    top: "260px",
  },
  materialLifts: {
    bottom: "31px",
  },
  carryDeckCrane: {
    top: "158px",
    left: "-170px",
  },
  scissorLifts: {
    bottom: "120px",
    left: "-170px",
  },
  earthmoving: {
    bottom: "120px",
    right: "-77px",
  },
  personnelcart: {
    top: "158px",
    right: "-77px",
  },
});

export const ImageContainer = () => {
  const classes = styles();

  return (
    <div className={classes.imagesContainer}>
      <Avatar
        src={Category.BOOMS}
        alt={"booms"}
        className={`${classes.avatar} ${classes.booms}`}
      />
      <Avatar
        className={`${classes.avatar} ${classes.forkLifts}`}
        src={Category.FORKLIFTS}
        alt={"fork Lifts"}
      />
      <Avatar
        className={`${classes.avatar} ${classes.materialLifts}`}
        src={Category.MATERIALLIFTS}
        alt={"material lifts"}
      />
      <Avatar
        className={`${classes.avatar} ${classes.carryDeckCrane}`}
        src={Category.CARRYDECKCRANE}
        alt={"carry deck drane"}
      />
      <Avatar
        className={`${classes.avatar} ${classes.scissorLifts}`}
        src={Category.SCISSORLIFTS}
        alt={"scissor lifts"}
      />
      <Avatar
        className={`${classes.avatar} ${classes.earthmoving}`}
        src={Category.EARTHMOVING}
        alt={"carry deck drane"}
      />
      <Avatar
        className={`${classes.avatar} ${classes.personnelcart}`}
        src={Category.PERSONNELCART}
        alt={"scissor lifts"}
      />
    </div>
  );
};
