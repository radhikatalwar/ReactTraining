import "./Home.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { AboutPost } from "./AboutPost";

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://sheet2api.com/v1/eUTRQPcCTJWP/assignment14")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const category = ["People", "Society", "Food", "Art", "Health", "Travel"];

  return (
    <div>
      {category.map((value) => {
        return (
          <div>
            <div>
              <h1 className={"mainHeading"}>{value}</h1>
            </div>
            <div className={"postContainer"}>
              {data.map((object, index) => {
                if (object.categories.includes(value)) {
                  return <AboutPost key={index} post={object} />;
                } else {
                  return;
                }
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
