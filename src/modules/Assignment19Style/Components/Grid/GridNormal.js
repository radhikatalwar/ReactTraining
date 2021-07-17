import { makeStyles } from "@material-ui/core";
import React from "react";

const styles = makeStyles({
  mainContainer: {
    display: "grid",
    gridTemplateColumns: "3fr 2fr 2fr 2fr 3fr",
    width: "100vw",
    margin: "20px",
  },
  special: {
    gridColumnStart: 5,
    gridColumnEnd: 6,
    gridRowStart: 2,
    gridRowEnd: 4,
  },
  image: {
    width: "100px",
    height: "120px",
    margin: "10px",
  },
});

export const GridNormal = () => {
  const classes = styles();
  return (
    <div className={classes.mainContainer}>
      <div>
        <p>{"STYLE TITLE"}</p>
        <p>{"1"}</p>
      </div>
      <div>
        <p>{"STYLE TITLE"}</p>
        <p>{"1"}</p>
      </div>
      <div>
        <p>{"STYLE TITLE"}</p>
        <p>{"1"}</p>
      </div>
      <div>
        <p>{"STYLE TITLE"}</p>
        <p>{"1"}</p>
      </div>
      <div>
        <p>{"STYLE TITLE"}</p>
        <p>{"1"}</p>
      </div>
      <div>
        <p>{"STYLE TITLE"}</p>
        <p>{"1"}</p>
      </div>
      <div>
        <p>{"STYLE TITLE"}</p>
        <p>{"1"}</p>
      </div>
      <div>
        <p>{"STYLE TITLE"}</p>
        <p>{"1"}</p>
      </div>
      <div>
        <p>{"STYLE TITLE"}</p>
        <p>{"1"}</p>
      </div>
      <div className={classes.special}>
        <p>{"STYLE  IMAGE"}</p>
        <img
          src="https://images.pexels.com/photos/4065864/pexels-photo-4065864.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="Test"
          className={classes.image}
        />
        <img
          src="https://images.pexels.com/photos/4065864/pexels-photo-4065864.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="Test"
          className={classes.image}
        />
      </div>
      <div>
        <p>{"STYLE TITLE"}</p>
        <p>{"1"}</p>
      </div>
      <div>
        <p>{"STYLE TITLE"}</p>
        <p>{"1"}</p>
      </div>
      <div>
        <p>{"STYLE TITLE"}</p>
        <p>{"1"}</p>
      </div>
      <div>
        <p>{"STYLE TITLE"}</p>
        <p>{"1"}</p>
      </div>
    </div>
  );
};
