import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  imgGrid: {
    margin: "20px auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridGap: "40px",
  },
  imgWrap: {
    overflow: "hidden",
    height: 0,
    padding: "50% 0",
    position: "relative",
    opacity: 0.8,
  },
  imgWrapImg: {
    minWidth: "100%",
    minHeight: "100%",
    maxWidth: "150%",
    position: "absolute",
    top: 0,
    left: 0,
  },
});

export const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  const classes = styles();

  return (
    <div className={classes.imgGrid}>
      {docs &&
        docs.map((doc) => (
          <motion.div
            className={classes.imgWrap}
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            s
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              className={classes.imgWrapImg}
              src={doc.url}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};
