import React, { useEffect, useState } from "react";
import { Divider, makeStyles, Paper, Typography } from "@material-ui/core";
import axios from "axios";
import { AboutPost } from "./AboutPost";

const styles = makeStyles({
  divider: { backgroundColor: "rgb(239,234,234,0.18)" },
  title: { color: "white", margin: "10px 0" },
  postTitle: { padding: "15px" },
  postContainer: { display: "flex", flexWrap: "wrap" },
  paper: { marginBottom: "20px" },
});

export const Right = () => {
  const classes = styles();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://sheet2api.com/v1/eUTRQPcCTJWP/assignment14")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const category = [];

  data.map((post) => {
    var FindPostTitle = post.categories.split(",");
    FindPostTitle.map((value) => {
      if (!category.includes(value)) {
        category.push(value);
      }
    });
  });

  return (
    <div className={classes.mainRight}>
      <Divider className={classes.divider} />
      <Typography variant="h5" className={classes.title}>
        {"Posts"}
      </Typography>
      <div>
        {category.map((value) => {
          return (
            <Paper elevation={3} className={classes.paper}>
              <div>
                <Typography variant="h6" className={classes.postTitle}>
                  {value}
                </Typography>
              </div>
              <div className={classes.postContainer}>
                {data.map((object, index) => {
                  if (object.categories.includes(value)) {
                    return <AboutPost key={index} post={object} />;
                  } else {
                    return;
                  }
                })}
              </div>
            </Paper>
          );
        })}
      </div>
    </div>
  );
};
