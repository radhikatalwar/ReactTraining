import { makeStyles, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchdataRandom } from "../../ReduxComponents/action";
import { Link } from "react-router-dom";

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
    margin: "20px",
    fontWeight: "900",
  },
  link: {
    color: "teal",
    width: "31%",
    textAlign: "center",
    margin: "10px",
  },
});

export const Others = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => {
    return state.dataReducer;
  });

  useEffect(() => {
    dispatch(fetchdataRandom(1000));
  }, []);

  const category = [];
  const authors = [];

  data.map((val) => {
    var categoryName = val.tag;
    if (!category.includes(categoryName)) {
      category.push(categoryName);
    }
  });

  data.map((val) => {
    var authorName = val.author;
    if (!authors.includes(authorName)) {
      authors.push(authorName);
    }
  });

  return (
    <div className={classes.container}>
      <Typography className={classes.heading}>{"All Categories"}</Typography>
      <div className={classes.innerContainer}>
        {loading
          ? ""
          : category.map((val, index) => {
              return (
                <Link
                  to={`/others/category/${val}`}
                  key={index}
                  className={classes.link}
                >
                  {`${val.toUpperCase()} QUOTES`}
                </Link>
              );
            })}
      </div>
    </div>
  );
};
