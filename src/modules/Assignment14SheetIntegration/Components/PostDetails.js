import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import { RecommendedPost } from "./RecommendedPost";
import "./PostDetails.css";
import { AllAboutPost } from "./AllAboutPost";

export const PostDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const request = await fetch(
        "https://sheet2api.com/v1/eUTRQPcCTJWP/assignment14"
      );
      const data = await request.json();
      setData(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  if (data.length > 0) {
    var FindPost = data.find((post) => post.id === Number(id));
    var FindPostTitle = FindPost.categories.split(",");
  }
  console.log(FindPost);

  return (
    <div className={"postContainer"}>
      <div className={"postContainerLeft"}>
        {FindPost && <AllAboutPost post={FindPost} />}
      </div>
      <div className={"postContainerRight"}>
        <h1 className={"headingRecom"}>{"RECOMMENDED"}</h1>
        {data.map((post, index) => {
          if (
            post.categories.includes(FindPostTitle[0]) &&
            post.id !== Number(id)
          ) {
            return <RecommendedPost key={index} post={post} />;
          }
        })}
      </div>
    </div>
  );
};
