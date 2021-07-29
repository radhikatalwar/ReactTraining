import React, { useState } from "react";
import {
  Button,
  Fade,
  makeStyles,
  Modal,
  TextField,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router";

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
  input: {
    margin: "10px",
    width: "300px",
  },
  button: {
    textTransform: "none",
    fontWeight: "900",
    backgroundColor: "#b03938",
    color: "white",

    fontSize: "14px",
    margin: "6px 5px",
    "&:hover": {
      color: "#b03938",
      backgroundColor: "white",
    },
  },
  title: {
    fontWeight: "900",
    letterSpacing: "2px",
    color: "#b03938",
    textAlign: "center",
  },
});

const InitialValues = {
  email: "",
  password: "",
};

export const LoginModalComponent = (props) => {
  const classes = styles();
  const [user, setUser] = useState(InitialValues);
  const history = useHistory();

  const { email, password } = user;

  const handleSubmit = (event) => {
    event.preventDefault();
    const signedUser = JSON.parse(localStorage.getItem("User"));
    if (
      signedUser.email === user.email &&
      signedUser.password === user.password
    ) {
      props.handleLoginModal();
      history.push("/details");
      setUser(InitialValues);
    } else {
      alert("Wrong Email or Password!");
    }
  };

  const inputHandle = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <Modal className={classes.modal} open={props.open} closeAfterTransition>
        <Fade in={props.open}>
          <div className={classes.paper}>
            <Typography variant="h5" className={classes.title}>
              {"LOGIN"}
            </Typography>
            <form
              onSubmit={handleSubmit}
              className={classes.form}
              noValidate
              autoComplete="off"
            >
              <TextField
                className={classes.input}
                required
                label="Email"
                variant="outlined"
                value={email}
                name="email"
                onChange={inputHandle}
              />
              <TextField
                className={classes.input}
                required
                type="password"
                label="Password"
                variant="outlined"
                value={password}
                name="password"
                onChange={inputHandle}
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
