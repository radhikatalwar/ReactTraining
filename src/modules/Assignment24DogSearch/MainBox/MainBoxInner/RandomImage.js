import { Button, makeStyles, Typography } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Navbar } from "../Navbar";

const styles = makeStyles({
  heading: {
    color: "#333",
    fontSize: "22px",
  },
  link: {
    backgroundColor: "#eee",
    width: "fit-content",
    padding: "5px 15px",
    letterSpacing: "1px",
    margin: "30px 0",
  },
  mainBarContainer: {
    padding: "100px 60px 50px",
    color: "#333",
  },
  linkBox: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#1a91db",
    color: "white",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "lightblue",
    },
  },
  innerBox: {
    display: "flex",
    margin: "30px 0",
  },
  detail: {
    width: "45%",
    margin: "0 20px",
    textAlign: "center",
  },
  section: {
    marginTop: "150px",
  },
  code: {
    width: "400px",
  },
  image: {
    height: "150px",
    width: "200px",
  },
});

export const RandomImage = () => {
  const classes = styles();
  const [singleImage, setSingleImage] = useState({
    imageURL: "",
    loading: true,
    data: {},
  });

  const [multipleImage, setMultipleImage] = useState({
    imageURLs: [],
    loading: true,
    data: {},
  });

  useEffect(() => {
    callAPI();
    callAPIforMultipleImage();
  }, []);

  const callAPI = () => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        const val = res.data;
        setSingleImage({ imageURL: val.message, loading: false, data: val });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const callAPIforMultipleImage = () => {
    axios
      .get("https://dog.ceo/api/breeds/image/random/3")
      .then((res) => {
        const val = res.data;
        setMultipleImage({ imageURLs: val.message, loading: false, data: val });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className={classes.mainBarContainer}>
      <Navbar />
      <div>
        <Typography className={classes.heading}>
          {"DISPLAY SINGLE RANDOM IMAGE FROM ALL DOGS COLLECTION"}
        </Typography>
        <div className={classes.linkBox}>
          <Typography className={classes.link}>
            {"https://dog.ceo/api/breeds/image/random"}
          </Typography>
          <Button className={classes.button} onClick={callAPI}>
            {"Fetch!"}
          </Button>
        </div>
        <div className={classes.innerBox}>
          <div className={classes.detail}>
            <Typography className={classes.json}>{"JSON"}</Typography>
            <SyntaxHighlighter
              className={classes.code}
              language="json"
              style={coy}
            >
              {singleImage.loading
                ? ""
                : JSON.stringify(singleImage.data, null, 2)}
            </SyntaxHighlighter>
          </div>
          <div className={classes.detail}>
            <Typography className={classes.json}>{"IMAGE"}</Typography>
            <img
              className={classes.image}
              src={singleImage.imageURL}
              alt="dog"
            />
          </div>
        </div>
      </div>
      <div className={classes.section}>
        <Typography className={classes.heading}>
          {"DISPLAY MULTIPLE RANDOM IMAGES FROM ALL DOGS COLLECTION"}
        </Typography>
        <div className={classes.linkBox}>
          <Typography className={classes.link}>
            {"https://dog.ceo/api/breeds/image/random/3"}
          </Typography>
          <Button className={classes.button} onClick={callAPIforMultipleImage}>
            {"Fetch!"}
          </Button>
        </div>
        <div className={classes.innerBox}>
          <div className={classes.detail}>
            <Typography className={classes.json}>{"JSON"}</Typography>
            <SyntaxHighlighter
              className={classes.code}
              language="json"
              style={coy}
            >
              {multipleImage.loading
                ? ""
                : JSON.stringify(multipleImage.data, null, 2)}
            </SyntaxHighlighter>
          </div>
          <div className={classes.detail}>
            <Typography className={classes.json}>{"IMAGE"}</Typography>
            <img
              className={classes.image}
              src={multipleImage.imageURLs[0]}
              alt="dog"
            />
            <img
              className={classes.image}
              src={multipleImage.imageURLs[1]}
              alt="dog"
            />
            <img
              className={classes.image}
              src={multipleImage.imageURLs[2]}
              alt="dog"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
