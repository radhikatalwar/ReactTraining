import { Button, makeStyles, Typography } from "@material-ui/core";
import axios from "axios";
import { useEffect } from "react";

const styles = makeStyles({
  mainContainer: {
    height: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  button: {
    backgroundColor: "black",
    color: "white",
    width: "150px",
    margin: "20px",
  },
});

export const Assignment23Api = () => {
  const classes = styles();

  let usersEndpoint = "https://covid-api.mmediagroup.fr/v1/cases";
  let source = axios.CancelToken.source();

  const apiCall = () => {
    //Check if there are any previous pending requests
    if (typeof source != typeof undefined) {
      source.cancel("Operation canceled due to new request.");
    }

    //Save the cancel token for the current request
    source = axios.CancelToken.source();

    //Make the Call
    axios
      .get(usersEndpoint, {
        cancelToken: source.token,
      })
      .then((res) => {
        const data = res.data;
        console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div className={classes.mainContainer}>
      <Typography variant="h5">{"Make API Call"}</Typography>
      <Button
        className={classes.button}
        onClick={() => {
          apiCall();
        }}
      >
        {"API-Call"}
      </Button>
    </div>
  );
};
