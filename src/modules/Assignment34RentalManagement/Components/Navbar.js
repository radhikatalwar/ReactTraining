import {
  AppBar,
  Avatar,
  FormControl,
  makeStyles,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { HandleBranch, HandleLocation } from "../reduxComponents/action";
import { data } from "../utils/data";
import { BackgroundImages } from "../utils/images";

const styles = makeStyles({
  logo: {
    display: "flex",
  },
  logo2: {
    height: "40px",
    width: "40px",
  },
  toolbar: {
    backgroundColor: "black",
    display: "flex",
    padding: "0 10%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    color: "white",
    fontFamily: "monospace",
    margin: "0 20px",
    fontSize: "25px",
    letterSpacing: "2px",
  },
  select: {
    width: "150px",
    backgroundColor: "white",
    height: "38px",
    borderRadius: "22px",
    margin: "0 0 0 20px",
    textAlign: "center",
    fontSize: "12px",
    padding: "10px",
  },
  menuItem: {
    width: "225px",
    padding: "10px",
    textAlign: "center",
  },
  hide: {
    display: "hide",
  },
});

export const Navbar = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const { selected, branch, location, branches } = useSelector(
    (state) => state.infoReducer
  );
  const history = useHistory();

  const handleChangeLocation = (event) => {
    dispatch(
      HandleLocation({
        location: event.target.value,
        selected: true,
        branch: "defaultBranch",
      })
    );
  };

  const handleChangeBranch = (event) => {
    dispatch(HandleBranch({ branch: event.target.value }));
    history.push("/category");
  };

  return (
    <AppBar position="fixed" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.logo}>
          <Avatar
            className={classes.logo2}
            src={BackgroundImages.LOGO}
            alt="web-logo"
          />
          <Typography className={classes.heading}>{"XRentals"}</Typography>
        </div>
        <div className={classes.logo}>
          <FormControl>
            <Select
              name={"location"}
              value={location}
              onChange={handleChangeLocation}
              className={classes.select}
              disableUnderline
            >
              <MenuItem value={"defaultLocation"} selected>
                {"--Select Location--"}
              </MenuItem>
              {data.data.locations.map((val, index) => {
                return (
                  <MenuItem
                    value={val.name}
                    className={classes.menuItem}
                    key={index}
                  >
                    {val.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl>
            <Select
              name={"branch"}
              value={branch}
              onChange={handleChangeBranch}
              className={selected ? classes.select : classes.hide}
              disableUnderline
            >
              <MenuItem value={"defaultBranch"} selected>
                {"--Select Branch--"}
              </MenuItem>
              {location !== "defaultLocation" &&
                branches.map((val, index) => {
                  return (
                    <MenuItem
                      value={val.name}
                      className={classes.menuItem}
                      key={index}
                    >
                      {val.name}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        </div>
      </Toolbar>
    </AppBar>
  );
};
