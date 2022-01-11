import { makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { theme } from "../screens/APIData/theme";
import { usersContext } from "..";

const styles = makeStyles({
  card: {
    width: "27%",
    margin: "25px",
  },
  media: {
    height: "200px",
  },
});

const User = (props) => {
  const classes = styles();
  const { mode } = useContext(usersContext);

  return (
    <>
      <Card className={classes.card} raised={true}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.image}
            alt={"Not found"}
          />
          <CardContent style={theme[mode === "light" ? "dark" : "light"]}>
            <Typography variant="h6">{`${props.first_name}  ${props.last_name}`}</Typography>
            <Typography>{`Email : ${props.email}`}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default User;
