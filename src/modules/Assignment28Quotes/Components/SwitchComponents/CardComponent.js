import {
  Card,
  CardActionArea,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const styles = makeStyles({
  card: {
    width: "47%",
    margin: "10px",
    border: "4px solid #1c7488",
  },
  quote: {
    fontSize: "17px",
    letterSpacing: "1px",
    fontWeight: "900",
  },
  category: {
    fontSize: "16px",
    letterSpacing: "-0.2px",
    color: "teal",
  },
});

export const CardComponent = ({ text, tag, author, heading }) => {
  const classes = styles();

  return (
    <Card className={classes.card} raised={true}>
      <CardActionArea>
        <CardContent>
          {heading && (
            <Typography className={classes.category}>
              {tag.toUpperCase()}
            </Typography>
          )}
          <Typography className={classes.quote}>{text}</Typography>
          <Typography
            className={classes.category}
          >{`--- ${author}`}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
