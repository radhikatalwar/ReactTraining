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
  console.log(props.open, article);
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(article);
    axios
      .post("https://sheet2api.com/v1/eUTRQPcCTJWP/assignment14", article)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
    setArticle(InitialValues);
  };

  const { postImageURL, postContent, postTitle, categories, publishedby } =
    article;
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
