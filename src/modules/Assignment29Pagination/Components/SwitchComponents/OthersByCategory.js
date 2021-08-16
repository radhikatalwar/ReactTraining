import { makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchdataSpecific } from "../../ReduxComponents/action";
import Pagination from "../Pagination";
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

  const [currentPage, setCurrentPage] = useState(1);
  const [quotesPerPage] = useState(10);

  const indexOfLastQuote = currentPage * quotesPerPage;
  const indexOfFirstQuote = indexOfLastQuote - quotesPerPage;
  const currentPosts = data.slice(indexOfFirstQuote, indexOfLastQuote);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={classes.container}>
      <Typography className={classes.heading}>{`Top ${val} Quotes`}</Typography>
      <div className={classes.innerContainer}>
        {loading ? (
          ""
        ) : (
          <>
            {currentPosts.map((val, index) => {
              return (
                <CardComponent
                  key={index}
                  text={val.text}
                  tag={val.tag}
                  author={val.author}
                />
              );
            })}
            <Pagination
              postsPerPage={quotesPerPage}
              totalPosts={data.length}
              paginate={paginate}
            />
          </>
        )}
      </div>
    </div>
  );
};
