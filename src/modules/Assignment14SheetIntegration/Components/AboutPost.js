import "./AboutPost.css";
import React from "react";
import { Link } from "react-router-dom";

export const AboutPost = (props) => {
  const { postImageURL, postTitle, publishedby, id } = props.post;
  const withoutSpaceTitle = postTitle.replaceAll(" ", "");

  return (
    <div className={"AboutContainer"}>
      <Link to={`/post/${id}/${withoutSpaceTitle}`}>
        <img
          src={
            postImageURL === ""
              ? "https://cdn.wrytin.com/images/thumbnail/r/400/default3.jpeg"
              : postImageURL
          }
          alt={"Descriptive"}
        />
      </Link>

      <h1>{postTitle}</h1>
      <h3>{publishedby}</h3>
    </div>
  );
};
