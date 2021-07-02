import { makeStyles, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const styles = makeStyles({
  heading: {
    fontFamily: "Poppins",
    fontWeight: "bold",
    color: "#2c3e50",
    margin: "10px",
  },
  input: {
    width: "47%",
    margin: "2px 10px",
  },
});

export const Product = (props) => {
  const classes = styles();
  const dispatch = useDispatch();
  const { products, color } = useSelector((state) => state.productReducer);
  const { title, titlePoints, tag, tagPoints, link, linkPoints, imageLink } =
    products[props.id];

  return (
    <>
      <Typography
        variant="h6"
        className={classes.heading}
      >{`Product ${props.id}`}</Typography>
      <form>
        <TextField
          className={classes.input}
          label="Product Title"
          variant="outlined"
          value={title}
          name="title"
        />
        <TextField
          className={classes.input}
          name="titlePoints"
          //   onChange={inputHandle}
          label="Points"
          variant="outlined"
          value={titlePoints}
        />
        <TextField
          className={classes.input}
          label="Product Tag"
          variant="outlined"
          name="tag"
          //   onChange={inputHandle}
          value={tag}
        />
        <TextField
          className={classes.input}
          label="Points"
          variant="outlined"
          value={tagPoints}
          name="tagPoints"
          //   onChange={inputHandle}
        />
        <TextField
          className={classes.input}
          label="Product Link"
          variant="outlined"
          value={link}
          name="link"
          //   onChange={inputHandle}
        />
        <TextField
          className={classes.input}
          label="Points"
          variant="outlined"
          value={linkPoints}
          name="linkPoints"
          //   onChange={inputHandle}
        />
        <TextField
          className={classes.input}
          label="Product Image Link"
          variant="outlined"
          value={imageLink}
          name="imageLink"
          //   onChange={inputHandle}
        />
      </form>
    </>
  );
};
