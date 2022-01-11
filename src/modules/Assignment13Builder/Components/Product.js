import { makeStyles, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HandleChange } from "../reduxComponents/action";

const styles = makeStyles((theme) => ({
  heading: {
    fontFamily: "Poppins",
    fontWeight: "bold",
    color: "#2c3e50",
    margin: "10px",
  },
  input: {
    width: "47%",
    margin: "5px 10px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

export const Product = (props) => {
  const classes = styles();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productReducer);
  const { title, titlePoints, tag, tagPoints, link, linkPoints, imageLink } =
    products[props.id];

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    dispatch(
      HandleChange({
        value: value,
        id: props.id,
        name: name,
      })
    );
  };

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
          onChange={handleOnChange}
        />
        <TextField
          className={classes.input}
          name="titlePoints"
          onChange={handleOnChange}
          label="Points"
          variant="outlined"
          value={titlePoints}
        />
        <TextField
          className={classes.input}
          label="Product Tag"
          variant="outlined"
          name="tag"
          onChange={handleOnChange}
          value={tag}
        />
        <TextField
          className={classes.input}
          label="Points"
          variant="outlined"
          value={tagPoints}
          name="tagPoints"
          onChange={handleOnChange}
        />
        <TextField
          className={classes.input}
          label="Product Link"
          variant="outlined"
          value={link}
          name="link"
          onChange={handleOnChange}
        />
        <TextField
          className={classes.input}
          label="Points"
          variant="outlined"
          value={linkPoints}
          name="linkPoints"
          onChange={handleOnChange}
        />
        <TextField
          className={classes.input}
          label="Product Image Link"
          variant="outlined"
          value={imageLink}
          name="imageLink"
          onChange={handleOnChange}
        />
      </form>
    </>
  );
};
