import React from "react";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  backdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
  },
  backdropImg: {
    display: "block",
    maxWidth: "60%",
    maxHeight: "80%",
    margin: "60px auto",
    boxShadow: "3px 5px 7px rgba(0,0,0,0.5)",
    border: "3px solid white",
  },
});

const Modal = ({ setSelectedImg, selectedImg }) => {
  const classes = styles();
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  return (
    <motion.div
      className={`${classes.backdrop} backdrop`}
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        className={classes.backdropImg}
        src={selectedImg}
        alt="enlarged pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default Modal;
