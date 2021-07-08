import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const styles = makeStyles({
  AboutContainer: { width: "22%", margin: "20px 10px 20px 13px" },
  image: { width: "14vw" },
  title: { fontWeight: "bold", marginRight: "28px" },
});

export const AboutPost = (props) => {
  const classes = styles();
  const { postImageURL, postTitle, publishedby, id } = props.post;
  const withoutSpaceTitle = postTitle.replaceAll(" ", "");

  return (
    <div className={classes.AboutContainer}>
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
