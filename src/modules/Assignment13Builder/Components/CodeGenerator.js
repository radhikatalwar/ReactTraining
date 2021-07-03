import { Button, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const styles = makeStyles((theme) =>({
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  paper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "20px",
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      display:"initial",
    },
  },
  button: {
    textTransform: "none",
    fontWeight: "900",
    backgroundColor: "#177fe4",
    color: "#fff",
    fontSize: "16px",
    margin: "10px",
    "&:hover": {
      backgroundColor: "#2a2a2a",
    },
  },
}));

export const CodeGenerator = (props) => {
  const classes = styles();
  const codeString = `
  import React from "react";
  import Card from "@material-ui/core/Card";
  import CardActionArea from "@material-ui/core/CardActionArea";
  import CardActions from "@material-ui/core/CardActions";
  import CardContent from "@material-ui/core/CardContent";
  import CardMedia from "@material-ui/core/CardMedia";
  import Button from "@material-ui/core/Button";
  import Typography from "@material-ui/core/Typography";
  import { makeStyles } from "@material-ui/core";

  <Card className={classes.card} raised={true}>
    <CardActionArea>
      <Rating defaultValue={5} className={classes.star} />
      <Typography
        variant="h6"
        className={classes.heading}
      ></Typography>
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
        </Typography>
        <Typography className={classes.about}>
          <PlayCircleFilledIcon
            className={classes.icon}
            style={{ color: color }}
          />
        </Typography>
        <Typography className={classes.about}>
          <PlayCircleFilledIcon
            className={classes.icon}
            style={{ color: color }}
          />
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
  </Card>`;

  return (
    <div className={classes.mainContainer}>
      <Paper elevation={3} className={classes.paper}>
        <SyntaxHighlighter language="jsx" style={dracula}>
          {codeString}
        </SyntaxHighlighter>
        <Button
          className={classes.button}
          onClick={() => {
            props.handleModal();
          }}
        >
          {"Close"}
        </Button>
      </Paper>
    </div>
  );
};
