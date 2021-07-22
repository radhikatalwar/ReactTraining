import React from "react";
import {
  Avatar,
  Button,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

const styles = makeStyles({
  profilepic: {
    padding: "20px",
  },
  aboutContainer: {
    color: "#556ee6",
    backgroundColor: "#d4daf9",
    padding: "15px",
    paddingBottom: "40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  welcome: {
    fontWeight: "700",
  },
  dashboard: {
    fontSize: "14px",
  },
  avatar: {
    width: "60px",
    height: "60px",
    border: "6px solid white",
  },
  post: {
    color: "gray",
    fontSize: "14px",
  },
  profilepicInner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#6c81e9",
    textTransform: "none",
    fontWeight: "900",
  },
});

export const AboutUser = () => {
  const classes = styles();

  return (
    <Paper className={classes.paper}>
      <div className={classes.aboutContainer}>
        <div>
          <Typography className={classes.welcome}>{"Welcome Back"}</Typography>
          <Typography className={classes.welcome}>{"!"}</Typography>
          <Typography className={classes.dashboard}>{"Dashboard"}</Typography>
        </div>
        <div>
          <Avatar
            className={classes.avatar}
            alt="Cindy Baker"
            src="https://images.pexels.com/photos/3290236/pexels-photo-3290236.jpeg?cs=srgb&dl=pexels-joshua-mcknight-3290236.jpg&fm=jpg"
          />
        </div>
      </div>
      <div className={classes.profilepic}>
        <div className={classes.profilepicInner}>
          <div>
            <Typography className={classes.name}>{"Henry Price"}</Typography>
            <Typography className={classes.post}>{"UI/UX Designer"}</Typography>
          </div>
          <div>
            <Button className={classes.button} variant="contained">
              {"View Profile"}
            </Button>
          </div>
        </div>
      </div>
    </Paper>
  );
};
