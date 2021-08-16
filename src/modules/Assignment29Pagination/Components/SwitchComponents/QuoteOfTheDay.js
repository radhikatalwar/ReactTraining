import { makeStyles, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchdataRandom } from "../../ReduxComponents/action";
import { CardComponent } from "./CardComponent";

const styles = makeStyles({
  innerContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "50px",
  },
  heading: {
    textAlign: "center",
    fontSize: "33px",
    textTransform: "uppercase",
    letterSpacing: "2px",
    color: "#1c7488",
  },
});

export const QuoteOfTheDay = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => {
    return state.dataReducer;
  });

  useEffect(() => {
    console.log(loading, data);
    dispatch(fetchdataRandom(1));
  }, []);

  return (
    <div className={classes.container}>
      <Typography className={classes.heading}>{"Quote Of the day"}</Typography>
      <div className={classes.innerContainer}>
        {loading ? (
          ""
        ) : (
          <CardComponent
            text={data[0].text}
            tag={data[0].tag}
            author={data[0].author}
            heading={true}
          />
        )}
      </div>
    </div>
  );
};
