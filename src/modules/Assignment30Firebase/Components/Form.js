import React, { useState } from "react";
import { Formik } from "formik";
import {
  Button,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import SignupSchema from "./yup";
import axios from "axios";
import { auth, db } from "./firebase";
import firebase from "firebase/app";
import "firebase/storage";
import { useHistory } from "react-router";

const styles = makeStyles({
  paper: {
    padding: "20px",
    width: "50%",
    margin: "30px auto",
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
    margin: "15px",
    width: "98%",
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
    fontSize: "32px",
    margin: "13px",
  },
});

export const Form = () => {
  const classes = styles();
  const [image, setImage] = useState(null);
  const storage = firebase.storage();
  const history = useHistory();

  const InitialValues = {
    userName: localStorage.getItem("name") || "",
    city: "",
    email: localStorage.getItem("email") || "",
    password: "",
    message: "",
  };

  const handleFile = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <Paper className={classes.paper} elevation={4}>
      <div>
        <Typography variant="h5" className={classes.title}>
          {"Contact Us"}
        </Typography>
        <Formik
          initialValues={InitialValues}
          validationSchema={SignupSchema}
          onSubmit={(values, { resetForm }) => {
            const uploadTask = storage
              .ref(`${values.email}/${image.name}`)
              .put(image);
            uploadTask.on(
              "state_changed",
              (snapshot) => {},
              (error) => {
                console.log(error);
              },
              () => {
                storage
                  .ref(`${values.email}`)
                  .child(image.name)
                  .getDownloadURL()
                  .then((url) => {
                    console.log(url);
                  });
              }
            );

            localStorage.setItem("name", values.userName);
            localStorage.setItem("email", values.email);

            axios
              .post(
                `https://contactform-278e7-default-rtdb.firebaseio.com/contactform.json`,
                JSON.stringify(values)
              )
              .then((res) => {
                if (res) {
                  alert("Data Stored Successfully");
                  localStorage.setItem("name", values.userName);
                  localStorage.setItem("email", values.email);
                  resetForm();
                }
              })
              .catch((error) => {
                console.log(error.message);
              });

            db.collection("users")
              .add(values)
              .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
              })
              .catch((error) => {
                console.error("Error adding document: ", error);
              });

            history.push("/done");
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form
              method="POST"
              onSubmit={handleSubmit}
              className={classes.form}
            >
              <TextField
                className={classes.input}
                label="Name"
                value={values.userName}
                name="userName"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name && (
                <Typography className={classes.error}>{errors.name}</Typography>
              )}
              <TextField
                className={classes.input}
                label="Email"
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
                label="City"
                name="city"
                onChange={handleChange}
                value={values.city}
                onBlur={handleBlur}
              />
              {errors.city && touched.city && (
                <Typography className={classes.error}>{errors.city}</Typography>
              )}
              <TextField
                className={classes.input}
                type="password"
                label="Password"
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
              <TextField
                className={classes.input}
                multiline
                label="Your Message Here"
                value={values.message}
                name="message"
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.message && touched.message && (
                <Typography className={classes.error}>
                  {errors.message}
                </Typography>
              )}
              <Button className={classes.button} component="label">
                {"Upload your Image"}
                <input name="file" type="file" onChange={handleFile} hidden />
              </Button>

              <Button
                variant="contained"
                className={classes.button}
                type="submit"
              >
                {"Submit Details"}
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </Paper>
  );
};
