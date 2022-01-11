import React from "react";
import { Avatar, Badge, Button, Divider, makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { clearAnswers } from "../reduxComponents/action";

const styles = makeStyles({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1400px",
    padding: "9px 3%",
  },
  innerContainer: {
    display: "flex",
    alignItems: "center",
  },
  image: {
    height: "25px",
  },
  icon: {
    padding: "0 0 0 20px",
    fontSize: "27px",
    color: "#737373",
  },
  divider: {
    backgroundColor: "#b9b9b9",
    height: "33px",
    margin: "0 20px",
    width: "2px",
  },
  button: {
    textTransform: "none",
    fontWeight: "900",
    height: "40px",
  },
  avatar: {
    marginLeft: "20px",
    height: "45px",
    width: "45px",
  },
});

export const Navbar = () => {
  const classes = styles();
  const history = useHistory();
  const dispatch = useDispatch();

  const goToHome = () => {
    dispatch(clearAnswers());
    history.push("/");
  };

  return (
    <div className={classes.toolbar}>
      <div className={classes.innerContainer}>
        <img
          src="https://static.uacdn.net/production/_next/static/images/logo.svg"
          alt="Logo"
          className={classes.image}
          onClick={goToHome}
        />
        <Divider orientation={"vertical"} className={classes.divider} />
        <Button
          endIcon={<KeyboardArrowDownIcon />}
          className={classes.button}
          variant="outlined"
        >
          {"Bank Exams"}
        </Button>
      </div>
      <div className={classes.innerContainer}>
        <SearchIcon className={classes.icon} />
        <Badge badgeContent={4} color={"error"}>
          <NotificationsNoneIcon className={classes.icon} />
        </Badge>
        <Avatar
          className={classes.avatar}
          src={
            "https://images.pexels.com/photos/8346224/pexels-photo-8346224.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          }
        ></Avatar>
      </div>
    </div>
  );
};
