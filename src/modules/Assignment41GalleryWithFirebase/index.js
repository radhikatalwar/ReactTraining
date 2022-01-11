import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { Head } from "./Components/Head";
import { ImageGrid } from "./Components/ImageGrid";
import Modal from "./Components/Modal";
import { UploadFile } from "./Components/UploadFile";

const styles = makeStyles({
  mainContainer: {
    minHeight: "100vh",
    maxWidth: "100vw",
    padding: "50px 10%",
    background: "linear-gradient(to right, #757f9a, #d7dde8)",
  },
});

export const Assignment41GalleryWithFirebase = () => {
  const classes = styles();
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className={classes.mainContainer}>
      <Head />
      <UploadFile />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};
