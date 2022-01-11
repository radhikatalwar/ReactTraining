import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Rating from "./Rating";

const styles = makeStyles({
  card: {
    width: "27%",
    margin: "25px ",
    fontFamily: ['"Roboto"', '"Helvetica"', '"Arial"', "sans-serif"].join(","),
  },
  media: {
    height: 180,
  },
  date: {
    fontSize: "16px",
  },
  action: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    marginLeft: "20px",
    backgroundColor: "white",
    color: "black",
    "&:hover": {
      backgroundColor: "#e0e0e0",
    },
  },
});

export default function CardComp(props) {
  const classes = styles();
  return (
    <>
      <Card className={classes.card} raised={true}>
        <CardActionArea>
          <CardMedia className={classes.media} image={props.imgsrc} />
          <CardContent>
            <Typography variant="h5">{props.name}</Typography>
            <Typography variant="h6" className={classes.date}>
              {"Date : "}
              {props.date}
            </Typography>
            <Rating rating={props.rating} />
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.action}>
          <Button size="small" variant="contained" className={classes.button}>
            {"Watch"}
          </Button>
          <Button size="small" variant="contained" className={classes.button}>
            {"Learn More"}
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
