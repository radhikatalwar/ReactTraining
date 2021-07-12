import React, { useEffect, useState } from "react";
import {
  Button,
  Fade,
  makeStyles,
  Modal,
  TextField,
  Typography,
} from "@material-ui/core";
import axios from "axios";

const styles = makeStyles({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    border: "2px solid #000",
    backgroundColor: "white",
    padding: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  search: {
    position: "relative",
    marginLeft: 0,
    width: "35%",
    padding: "5px 10px",
    borderRadius: "10px",
    backgroundColor: "#daf5f9",
  },
  input: {
    margin: "10px",
    width: "300px",
  },
  button: {
    textTransform: "none",
    fontWeight: "900",
    color: "#fff",
    backgroundColor: "#130444",
    fontSize: "14px",
    margin: "6px 5px",
    "&:hover": {
      backgroundColor: "#000",
    },
  },
});

export const LoginModalComponent = (props) => {
  const classes = styles();

  const [userName, setUserName] = useState("");
  const [data, setData] = useState([]);
  const [Valid, setValid] = useState(true);

  const getUser = async () => {
    try {
      const res = await axios.get(
        "https://sheet2api.com/v1/eUTRQPcCTJWP/userdetails",
        {
          params: {
            userName,
          },
        }
      );
      setData(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userName === "") {
      setValid(false);
    } else {
      getUser();
    }
  };

  useEffect(() => {
    if (data.length !== 0) {
      // Do Anything Here on Change in Data State
      window.confirm(
        `Hello ${data[0].name}.You are Logged in.
        Your Unique id is ${data[0].id}`
      );
      props.handleLoginModal();
      setUserName("");
      setData([]);
    }
  }, [data]);

  const inputHandle = (event) => {
    setUserName(event.target.value);
  };

  return (
    <>
      <Modal
        className={classes.modal}
        open={props.openLogin}
        closeAfterTransition
      >
        <Fade in={props.openLogin}>
          <div className={classes.paper}>
            <Typography variant="h5">{"Login"}</Typography>
            <form
              onSubmit={handleSubmit}
              className={classes.form}
              noValidate
              autoComplete="off"
            >
              <TextField
                className={classes.input}
                required
                label="UserName"
                variant="outlined"
                value={userName}
                name="userName"
                onChange={inputHandle}
                error={!Valid}
                helperText={!Valid ? "Please Enter Valid UserName" : ""}
              />
              <Button
                variant="contained"
                className={classes.button}
                type="submit"
              >
                {"Login"}
              </Button>
              <Button
                variant="contained"
                className={classes.button}
                onClick={props.handleLoginModal}
              >
                {"Close"}
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </>
  );
};
