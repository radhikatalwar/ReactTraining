import {
  Button,
  FormControl,
  makeStyles,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, selectDone, selectImage } from "../ReduxComponents/action";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";

const styles = makeStyles({
  heading: {
    color: "#333",
    fontSize: "24px",
  },
  link: {
    backgroundColor: "#eee",
    width: "fit-content",
    padding: "10px 15px",
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
    padding: "10px 15px",
    "&:hover": {
      backgroundColor: "lightblue",
    },
  },
  select: {
    height: "43px",
    padding: "0 20px",
    border: "1px solid black",
  },
  image: {
    height: "200px",
    width: "30%",
    margin: "10px auto",
  },
  imageSelected: {
    height: "200px",
    width: "30%",
    margin: "10px auto",
    opacity: "0.5",
  },
  imageBox: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  buttonDone: {
    margin: "20px 10px",
    width: "98%",
    fontSize: "18px",
  },
});

export const BreedList = () => {
  const classes = styles();

  const [val, setVal] = useState("african");
  const [keys, setkeys] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [imageURL, setimageURL] = useState([]);
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  const dispatch = useDispatch();
  const { data, select } = useSelector((state) => {
    return state.dataReducer;
  });

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then((res) => {
        const data = res.data;
        setkeys(Object.keys(data.message));
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
    callAPIforURL();
  }, []);

  const callAPIforURL = () => {
    axios
      .get(`https://dog.ceo/api/breed/${val}/images/random/12`)
      .then((res) => {
        const data = res.data;
        setimageURL(data.message);
        setIsLoadingImage(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const addFav = () => {
    dispatch(addData(val));
  };

  return (
    <div className={classes.mainBarContainer}>
      <div>
        <Typography className={classes.heading}>{"BREEDS LIST"}</Typography>
        {isLoading ? (
          ""
        ) : (
          <>
            <div className={classes.linkBox}>
              <Typography className={classes.link}>
                {"https://dog.ceo/api/breed/"}
              </Typography>
              <FormControl>
                <Select
                  disableUnderline
                  value={val}
                  onChange={handleChange}
                  className={classes.select}
                >
                  {keys.map((name, index) => {
                    return (
                      <MenuItem value={name} key={index}>
                        {name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <Typography className={classes.link}>
                {"/images/random"}
              </Typography>
              <Button className={classes.button} onClick={callAPIforURL}>
                {"Fetch!"}
              </Button>
            </div>

            {isLoadingImage ? (
              ""
            ) : (
              <div className={classes.imageBox}>
                {imageURL.map((url, index) => {
                  return (
                    <img
                      key={index}
                      src={url}
                      alt={"dog"}
                      className={
                        select[index] ? classes.imageSelected : classes.image
                      }
                      onClick={() => dispatch(selectImage(index))}
                    />
                  );
                })}
              </div>
            )}
            <Button
              className={`${classes.button} ${classes.buttonDone}`}
              onClick={() => dispatch(selectDone({ imageURL, val }))}
            >
              {"Add To my Data"}
            </Button>
            <Typography className={classes.heading}>
              {"Your Selected Data"}
            </Typography>
            <SyntaxHighlighter
              className={classes.code}
              language="json"
              style={coy}
            >
              {data.length > 0 ? "" : JSON.stringify(data, null, 2)}
            </SyntaxHighlighter>
          </>
        )}
      </div>
    </div>
  );
};
