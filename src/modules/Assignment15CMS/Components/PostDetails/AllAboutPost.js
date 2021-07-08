import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ReactHtmlParser from "react-html-parser";

const styles = makeStyles({
  AboutContainer: { margin: "20px" },
  image: { width: "100%", height: "400px" },
  title: { fontWeight: "bold" },
  AboutUser: { display: "flex", margin: "15px 0" },
  userImage: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    marginRight: "10px",
  },
});

export const AllAboutPost = (props) => {
  const classes = styles();
  const { postImageURL, postTitle, publishedby, postContent } = props.post;

  return (
    <div className={classes.AboutContainer}>
      <Typography variant="h4" className={classes.title}>
        {postTitle}
      </Typography>
      <div className={classes.AboutUser}>
        <img
          className={classes.userImage}
          src="https://cdn.wrytin.com/images/avatar/s/256/default.jpeg"
          alt={"User Profile"}
        />
        <Typography>{publishedby}</Typography>
      </div>
      <img
        className={classes.image}
        src={
          postImageURL === ""
            ? "https://cdn.wrytin.com/images/thumbnail/r/400/default3.jpeg"
            : postImageURL
        }
        alt={"Descriptive"}
      />
      <div className={classes.content}>{ReactHtmlParser(postContent)}</div>
    </div>
  );
};
