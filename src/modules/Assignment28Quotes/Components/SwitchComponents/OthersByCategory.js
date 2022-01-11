import { makeStyles, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchdataSpecific } from "../../ReduxComponents/action";
import { CardComponent } from "./CardComponent";

const styles = makeStyles({
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

export const OthersByCategory = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const { val } = useParams();

  const { loading, data } = useSelector((state) => {
    return state.dataReducer;
  });

  useEffect(() => {
    dispatch(fetchdataSpecific(val));
  }, []);

  return (
    <div className={classes.container}>
      <Typography className={classes.heading}>{`Top ${val} Quotes`}</Typography>
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
