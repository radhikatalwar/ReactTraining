import React from "react";
import { List, ListItem, makeStyles } from "@material-ui/core";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AppsOutlined from "@material-ui/icons/AppsOutlined";

const styles = makeStyles({
  list: {
    color: "#5156be",
    height: "100%",
    width: "80px",
    background: "#fbfaff",
    borderRight: "1px solid #e9e9ef",
    boxShadow: "0 2px 2px #fbfaff",
    textAlign: "center",
  },
  img: {
    width: "28px",
    margin: "20px auto",
  },
  icon: {
    width: "28px",
    margin: "10px auto",
  },
});

export const DrawerList = () => {
  const classes = styles();
  return (
    <>
      <List className={classes.list}>
        <ListItem>
          <img
            className={classes.img}
            src="http://minia-v-light.react.themesbrand.com/static/media/logo-sm.87ff5472.svg"
            alt="Main logo"
          />
        </ListItem>
        <ListItem button>
          <HomeOutlinedIcon className={classes.icon} />
        </ListItem>
        <ListItem button>
          <AppsOutlined className={classes.icon} />
        </ListItem>
        <ListItem button>
          <HomeOutlinedIcon className={classes.icon} />
        </ListItem>
        <ListItem button>
          <AppsOutlined className={classes.icon} />
        </ListItem>
        <ListItem button>
          <HomeOutlinedIcon className={classes.icon} />
        </ListItem>
        <ListItem button>
          <AppsOutlined className={classes.icon} />
        </ListItem>
        <ListItem button>
          <HomeOutlinedIcon className={classes.icon} />
        </ListItem>
        <ListItem button>
          <AppsOutlined className={classes.icon} />
        </ListItem>
        <ListItem button>
          <HomeOutlinedIcon className={classes.icon} />
        </ListItem>
        <ListItem button>
          <HomeOutlinedIcon className={classes.icon} />
        </ListItem>
      </List>
    </>
  );
};
