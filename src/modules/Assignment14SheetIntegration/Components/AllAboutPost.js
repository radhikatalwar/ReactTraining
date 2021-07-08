import React from "react";
import "./AllAboutPost.css";
import ReactHtmlParser from "react-html-parser";

export const AllAboutPost = (props) => {
  const { postImageURL, postTitle, publishedby, postContent } = props.post;

  return (
    <>
      <h1 className={"postHeading"}>{postTitle}</h1>
      <div className={"AboutUser"}>
        <img
          src="https://cdn.wrytin.com/images/avatar/s/256/default.jpeg"
          alt={"User Profile"}
        />
        <p>{publishedby}</p>
      </div>
      <img
        className={"Image"}
        src={postImageURL === "" ? "" : postImageURL}
        alt={"Descriptive"}
      />
      <div className={"content"}>{ReactHtmlParser(postContent)}</div>
    </>
  );
};
