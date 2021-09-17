import React, { useState } from "react";
import { ProgressBar } from "./ProgessBar";
import AddIcon from "@material-ui/icons/Add";
import { Button, makeStyles } from "@material-ui/core";

const styles = makeStyles({
  button: {
    margin: "0 47%",
    width: "30px",
  },
});

export const UploadFile = () => {
  const classes = styles();
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg", "image/jpg"];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };

  return (
    <form>
      <Button component="label" className={classes.button}>
        <AddIcon />
        <input name="file" type="file" onChange={handleChange} hidden />
      </Button>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};
