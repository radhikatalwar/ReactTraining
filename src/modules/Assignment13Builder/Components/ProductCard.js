import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import Rating from "@material-ui/lab/Rating";
import { useSelector } from "react-redux";

const styles = makeStyles({
  card: {
    width: "27%",
    margin: "25px",
    padding: "0px",
    fontFamily: ['"Roboto"', '"Helvetica"', '"Arial"', "sans-serif"].join(","),
  },
  heading: {
    fontFamily: "Poppins",
    fontWeight: "bold",
    color: "#2c3e50",
    textAlign: "center",
    padding: "10px",
  },
  media: {
    height: 180,
    width: 200,
    margin: "0 auto",
    borderRadius: "50%",
  },
  action: {
    padding: "0",
  },
  button: {
    width: "100%",
    height: "50px",
    backgroundColor: "#177fe4",
    color: "#fff",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "#2a2a2a",
    },
  },
  about: {
    color: "#2c3e50",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: "#177fe4",
    margin: "0 10px",
  },
  star: {
    margin: "10px 23%",
    textAlign: "center",
  },
});

export default function ProductCard(props) {
  const classes = styles();
  const { color } = useSelector((state) => state.productReducer);

  return (
    <>
      <Card className={classes.card} raised={true}>
        <CardActionArea>
          <Rating defaultValue={5} className={classes.star} />
          <Typography
            variant="h6"
            className={classes.heading}
          >{`Product ${props.id} Here`}</Typography>
          <CardMedia
            className={classes.media}
            image="./images/assignment13/box.jpeg"
          />
          <CardContent>
            <Typography className={classes.about}>
              <PlayCircleFilledIcon
                className={classes.icon}
                style={{ color: color }}
              />
              {props.title === "" ? "Product title" : props.title}
              {props.titlePoints === "" ? "" : props.titlePoints}
            </Typography>
            <Typography className={classes.about}>
              <PlayCircleFilledIcon
                className={classes.icon}
                style={{ color: color }}
              />
              {props.tag === "" ? "Product tag" : props.tag}
              {props.tagPoints === "" ? "" : props.tagPoints}
            </Typography>
            <Typography className={classes.about}>
              <PlayCircleFilledIcon
                className={classes.icon}
                style={{ color: color }}
              />
              {props.link === "" ? "Product link" : props.link}
              {props.linkPoints === "" ? "" : props.linkPoints}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.action}>
          <Button
            size="small"
            variant="contained"
            className={classes.button}
            style={{ backgroundColor: color }}
          >
            {"Check on Amazon"}
            <ArrowForwardIosIcon fontSize={"small"} />
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
