import React from "react";
import { Formik } from "formik";
import {
  Button,
  Fade,
  makeStyles,
  Modal,
  TextField,
  Typography,
} from "@material-ui/core";
import SignupSchema from "./yup";

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
  },
  error: {
    color: "#b03938",
    padding: "0 10px",
    maxWidth: "305px",
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
  userName: "",
  city: "",
  email: "",
  password: "",
  age: "",
};

export const SignupModalComponent = (props) => {
  const classes = styles();

  return (
    <>
      <Modal className={classes.modal} open={props.open} closeAfterTransition>
        <Fade in={props.open}>
          <div className={classes.paper}>
            <Typography variant="h5" className={classes.title}>
              {"SIGN UP"}
            </Typography>
            <Formik
              initialValues={InitialValues}
              validationSchema={SignupSchema}
              onSubmit={(values, { setSubmitting }) => {
                localStorage.setItem("User", JSON.stringify(values));
                props.handleSignupModal();
                props.handleLoginModal();
                setTimeout(() => {
                  setSubmitting(false);
                }, 2000);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit} className={classes.form}>
                  <TextField
                    className={classes.input}
                    label="Name"
                    variant="outlined"
                    value={values.userName}
                    name="userName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.name && touched.name && (
                    <Typography className={classes.error}>
                      {errors.name}
                    </Typography>
                  )}
                  <TextField
                    className={classes.input}
                    label="Age"
                    variant="outlined"
                    value={values.age}
                    name="age"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.age && touched.age && (
                    <Typography className={classes.error}>
                      {errors.age}
                    </Typography>
                  )}
                  <TextField
                    className={classes.input}
                    label="City"
                    variant="outlined"
                    name="city"
                    onChange={handleChange}
                    value={values.city}
                    onBlur={handleBlur}
                  />
                  {errors.city && touched.city && (
                    <Typography className={classes.error}>
                      {errors.city}
                    </Typography>
                  )}
                  <TextField
                    className={classes.input}
                    label="Email"
                    variant="outlined"
                    value={values.email}
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && (
                    <Typography className={classes.error}>
                      {errors.email}
                    </Typography>
                  )}
                  <TextField
                    className={classes.input}
                    type="password"
                    label="Password"
                    variant="outlined"
                    value={values.password}
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password && (
                    <Typography className={classes.error}>
                      {errors.password}
                    </Typography>
                  )}
                  <Button
                    variant="contained"
                    className={classes.button}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {"Submit Details"}
                  </Button>
                  <Button
                    variant="contained"
                    className={classes.button}
                    onClick={props.handleSignupModal}
                  >
                    {"Close"}
                  </Button>
                </form>
              )}
            </Formik>
          </div>
        </Fade>
      </Modal>
    </>
  );
};
