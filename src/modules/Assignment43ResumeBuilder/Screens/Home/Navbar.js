import React from "react";
import {
  Avatar,
  Badge,
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
  TextField,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import AppsOutlined from "@material-ui/icons/AppsOutlined";
import Brightness2OutlinedIcon from "@material-ui/icons/Brightness2Outlined";
import ViewHeadlineOutlinedIcon from "@material-ui/icons/ViewHeadlineOutlined";

const styles = makeStyles({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1400px",
    padding: "0 2%",
    borderBottom: "1px solid #e9e9ef",
    height: "80px",
  },
  innerContainer: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    padding: "0 0 0 20px",
    fontSize: "27px",
    color: "#555b6e",
  },
  viewIcon: {
    color: "#555b6e",
  },
  profile: {
    display: "flex",
    alignItems: "center",
    borderRight: "1px solid #e9e9ef",
    borderLeft: "1px solid #e9e9ef",
    backgroundColor: "#fafafb",
    height: "80px",
    color: "#6b6b6b",
    margin: "0 20px",
  },
  avatar: {
    margin: "10px",
    height: "30px",
    width: "30px",
    border: "3px solid gray",
  },
  search: {
    position: "relative",
  },
  input: {
    margin: "0 0 0 15px",
    backgroundColor: "#f3f3f9",
    border: "1px solid #f3f3f9",
  },
  button: {
    position: "absolute",
    top: "7px",
    right: "8px",
    height: "34px",
    width: "34px",
    borderRadius: "3px",
    color: "white",
    backgroundColor: "#686cbb",
    boxShadow: "0 2px 6px 0 rgb(122 127 220 / 50%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const theme = createMuiTheme({
  overrides: {
    MuiOutlinedInput: {
      input: {
        padding: "14px",
      },
    },
  },
});

export const Navbar = ({ handleDrawer }) => {
  const classes = styles();

  return (
    <div className={classes.toolbar}>
      <div className={classes.innerContainer}>
        <ViewHeadlineOutlinedIcon
          className={classes.viewIcon}
          onClick={() => {
            handleDrawer();
          }}
        />
        <div className={classes.search}>
          <MuiThemeProvider theme={theme}>
            <TextField
              variant="outlined"
              placeholder={"Search.."}
              className={classes.input}
            />
          </MuiThemeProvider>
          <div className={classes.button}>
            <SearchIcon fontSize="small" />
          </div>
        </div>
      </div>

      <div className={classes.innerContainer}>
        <Brightness2OutlinedIcon className={classes.icon} />
        <AppsOutlined className={classes.icon} />
        <Badge badgeContent={4} color={"error"}>
          <NotificationsNoneIcon className={classes.icon} />
        </Badge>
        <SettingsIcon className={classes.icon} />
        <div className={classes.profile}>
          <Avatar
            className={classes.avatar}
            src={
              "https://images.pexels.com/photos/8346224/pexels-photo-8346224.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            }
          ></Avatar>
          <Typography>{"admin"}</Typography>
          <KeyboardArrowDownIcon />
        </div>
      </div>
    </div>
  );
};
