import { makeStyles, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchdataRandom } from "../../ReduxComponents/action";
import { CardComponent } from "./CardComponent";

const styles = makeStyles({
  container: {},
  img: {
    margin: "10px 20%",
    width: "500px",
    height: "300px",
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

export const RandomQuotes = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => {
    return state.dataReducer;
  });

  useEffect(() => {
    dispatch(fetchdataRandom(100));
  }, []);

  return (
    <div className={classes.container}>
      <img
        className={classes.img}
        src="https://www.deepanshugahlaut.com/wp-content/uploads/2017/09/best-quotes-websites-in-world.jpg"
        alt="quote"
      />
      <Typography className={classes.heading}>{"Top 50 Quotes"}</Typography>
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
                  heading={true}
                />
              );
            })}
      </div>
    </div>
  );
};
