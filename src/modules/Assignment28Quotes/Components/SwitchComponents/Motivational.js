import { makeStyles, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchdataSpecific } from "../../ReduxComponents/action";
import { CardComponent } from "./CardComponent";

const styles = makeStyles({
  img: {
    margin: "10px 20%",
    width: "500px",
    height: "250px",
  },
  innerContainer: {
    display: "flex",
    flexWrap: "wrap",
  },
  heading: {
    textAlign: "center",
    fontSize: "33px",
    textTransform: "uppercase",
    letterSpacing: "2px",
    color: "#1c7488",
  },
});

export const Motivational = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => {
    return state.dataReducer;
  });

  useEffect(() => {
    dispatch(fetchdataSpecific("motivational"));
  }, []);

  return (
    <div className={classes.container}>
      <img
        className={classes.img}
        src="https://www.brainyquote.com/photos_tr/en/e/eleanorroosevelt/143006/eleanorroosevelt1.jpg"
        alt="quote"
      />
      <Typography className={classes.heading}>{"Motivational Quotes"}</Typography>
      <div className={classes.innerContainer}>
        {loading
          ? ""
          : data.map((val, index) => {
              return (
                <CardComponent
                  key={index}
                  text={val.text}
                  tag={val.tag}
                  author={val.author}
                />
              );
            })}
      </div>
    </div>
  );
};
