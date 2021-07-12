import React, { useState } from "react";
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

const InitialValues = {
  id: Math.round(Math.random() * 10000),
  postImageURL: "",
  postTitle: "",
  categories: "",
  postContent: "",
  publishedby: "",
};

export const ModalComponent = (props) => {
  const classes = styles();
  const [article, setArticle] = useState(InitialValues);
  console.log(article);

  const { id, postImageURL, postContent, postTitle, categories, publishedby } =
    article;

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(article);

    // const response = await fetch(
    //   "https://v1.nocodeapi.com/radhikatalwar/google_sheets/AYbyOGZqxPzvdUhJtabId=Assignment14",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify([
    //       [id, postImageURL, postContent, postTitle, categories, publishedby],
    //     ]),
    //   }
    // );
    // await response.json();
    console.log(JSON.stringify(article));
    fetch(
      "https://sheet.best/api/sheets/0e5d2714-415c-49b4-91a1-2222ff8c4a76",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(article),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });

    // axios
    //   .post(
    //     "https://sheet.best/api/sheets/0e5d2714-415c-49b4-91a1-2222ff8c4a76",
    //     article
    //   )
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });
    setArticle(InitialValues);
  };

  const inputHandle = (event) => {
    const { name, value } = event.target;
    setArticle({ ...article, [name]: value });
  };

  return (
    <>
      <Modal className={classes.modal} open={props.open} closeAfterTransition>
        <Fade in={props.open}>
          <div className={classes.paper}>
            <Typography variant="h5">{"Add Post Details"}</Typography>
            <form
              onSubmit={handleSubmit}
              className={classes.form}
              noValidate
              autoComplete="off"
            >
              <TextField
                className={classes.input}
                required
                label="Add Post Title"
                variant="outlined"
                value={postTitle}
                name="postTitle"
                onChange={inputHandle}
              />
              <TextField
                className={classes.input}
                required
                name="postImageURL"
                onChange={inputHandle}
                label="Add Image URL"
                variant="outlined"
                value={postImageURL}
              />
              <TextField
                className={classes.input}
                required
                label="Add Content"
                variant="outlined"
                name="postContent"
                onChange={inputHandle}
                value={postContent}
              />
              <TextField
                className={classes.input}
                required
                label="Add Category"
                variant="outlined"
                value={categories}
                name="categories"
                onChange={inputHandle}
              />
              <TextField
                className={classes.input}
                required
                label="Add Your Name"
                variant="outlined"
                value={publishedby}
                name="publishedby"
                onChange={inputHandle}
              />
              <Button
                variant="contained"
                className={classes.button}
                type="submit"
                onClick={props.handleModal}
              >
                {"Submit Details"}
              </Button>
              <Button
                variant="contained"
                className={classes.button}
                onClick={props.handleModal}
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
