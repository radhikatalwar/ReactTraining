import { Fab, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const styles = makeStyles({
  leftContainer: {
    width: "25%",
    padding: "3%",
    backgroundColor: "#f5f5f5",
  },
  fab: {
    margin: "10px",
    backgroundColor: "white",
    fontWeight: 900,
  },
  done: {
    backgroundColor: "#2d81f7",
    color: "white",
  },
  link: {
    textDecoration: "none",
  },
});

export const Left = () => {
  const classes = styles();
  const [loading, setLoading] = useState(true);
  const { data, track } = useSelector((state) => {
    return state.dataReducer;
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10);
  }, [data]);

  return (
    <div className={classes.leftContainer}>
      {loading ? (
        <Typography>{""}</Typography>
      ) : (
        <>
          {data.results.map((val, index) => {
            return (
              <Link to={`/${index + 1}`} className={classes.link} key={index}>
                <Fab
                  key={index}
                  className={`${classes.fab} ${
                    (track[index] === true || track[index] === false) &&
                    classes.done
                  }`}
                >
                  {index + 1}
                </Fab>
              </Link>
            );
          })}
        </>
      )}
    </div>
  );
};
