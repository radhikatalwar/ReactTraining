import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  rating: {
    fontSize: "16px",
  },
});

function Rating(props) {
  const classes = styles();
  return (
    <>
      <Typography variant="p" className={classes.rating}>
        {"Rating : "}
        {props.rating}
      </Typography>
    </>
  );
}

export default React.memo(Rating);
