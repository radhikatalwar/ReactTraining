import { makeStyles, Typography } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Navbar } from "../Navbar";

const styles = makeStyles({
  heading: {
    color: "#333",
    fontSize: "24px",
  },
  link: {
    backgroundColor: "#eee",
    width: "fit-content",
    padding: "5px 15px",
    letterSpacing: "1px",
    margin: "20px 0 40px",
  },
  mainBarContainer: {
    padding: "100px 60px 50px",
    color: "#333",
  },
  code: {
    height: "500px",
  },
});

export const ListallBreeds = () => {
  const classes = styles();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then((res) => {
        const val = res.data;
        setData(val);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className={classes.mainBarContainer}>
      <Navbar />
      <div>
        <Typography className={classes.heading}>{"LIST ALL BREEDS"}</Typography>
        <Typography className={classes.link}>
          {"https://dog.ceo/api/breeds/list/all"}
        </Typography>
        <Typography className={classes.json}>{"JSON"}</Typography>

        <SyntaxHighlighter className={classes.code} language="json" style={coy}>
          {isLoading ? "" : JSON.stringify(data, null, 2)}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
