import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import { RecommendedPost } from "./RecommendedPost";
import { makeStyles, Paper, Typography } from "@material-ui/core";
import { AllAboutPost } from "./AllAboutPost";

const styles = makeStyles({
  postContainer: {
    width: "90%",
    display: "flex",
    position: "absolute",
    top: "100px",
    left: "5%",
    zIndex: "2",
  },
  postContainerLeft: { width: "77%", marginRight: "30px" },
  postContainerRight: { width: "20%" },
  headingRecom: { margin: "12px", fontWeight: "bold" },
});

export const PostDetails = () => {
  const classes = styles();
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
    <div className={classes.postContainer}>
      <Paper className={classes.postContainerLeft}>
        {FindPost && <AllAboutPost post={FindPost} />}
      </Paper>
      <Paper className={classes.postContainerRight}>
        <Typography className={classes.headingRecom}>
          {"RECOMMENDED"}
        </Typography>
        {data.map((post, index) => {
          if (
            post.categories.includes(FindPostTitle[0]) &&
            post.id !== Number(id)
          ) {
            return <RecommendedPost key={index} post={post} />;
          }
        })}
      </Paper>
    </div>
  );
};
