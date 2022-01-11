import React, { useEffect } from "react";
import { LinearProgress, makeStyles } from "@material-ui/core";
import { useStorage } from "../hooks/useStorage";

const styles = makeStyles({
  progressBar: {
    height: "5px",
    background: "black",
    marginTop: "20px",
  },
});

export const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);
  const classes = styles();

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return <LinearProgress value={progress} className={classes.progressBar} />;
};
