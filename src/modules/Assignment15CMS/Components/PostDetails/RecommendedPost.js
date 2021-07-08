import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const styles = makeStyles({
  RecommendedContainer: { width: "100%", margin: "20px 10px 20px 13px" },
  image: { width: "87%" },
  title: { fontWeight: "bold", marginRight: "28px" },
});

export const RecommendedPost = (props) => {
  const classes = styles();
  const { postImageURL, postTitle, publishedby, id } = props.post;
  const withoutSpaceTitle = postTitle.replaceAll(" ", "");

  return (
    <div className={classes.RecommendedContainer}>
      <Link to={`/post/${id}/${withoutSpaceTitle}`}>
        <img
          className={classes.image}
          src={
            postImageURL === ""
              ? "https://cdn.wrytin.com/images/thumbnail/r/400/default3.jpeg"
              : postImageURL
          }
          alt={"Descriptive"}
        />
      </Link>
      <Typography className={classes.title}>{postTitle}</Typography>
      <Typography>{publishedby}</Typography>
    </div>
  );
};
