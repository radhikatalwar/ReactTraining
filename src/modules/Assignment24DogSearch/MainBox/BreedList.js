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
    height: "300px",
    width: "400px",
    margin: "0 auto",
  },
});

export const BreedList = () => {
  const classes = styles();

  const [val, setVal] = useState("african");
  const [keys, setkeys] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [imageURL, setimageURL] = useState(
    "https://images.dog.ceo/breeds/african/n02116738_2515.jpg"
  );

  const handleChange = (event) => {
    console.log(event.target.value);
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
  }, []);

  const callAPIforURL = () => {
    axios
      .get(`https://dog.ceo/api/breed/${val}/images/random`)
      .then((res) => {
        const data = res.data;
        setimageURL(data.message);
      })
      .catch((error) => {
        console.log(error.message);
      });
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
                  {console.log(keys)}
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
            <img src={imageURL} alt={"dog"} className={classes.image} />
          </>
        )}
      </div>
    </div>
  );
};
