import React from "react";
import { Drawer, List, ListItem, makeStyles } from "@material-ui/core";
import SnoozeIcon from "@material-ui/icons/Snooze";
import SlowMotionVideoIcon from "@material-ui/icons/SlowMotionVideo";

const styles = makeStyles({
  // drawer: {
  //   "&.MuiBackdrop-root": {
  //     backgroundColor: "rgba(0, 0, 0, 0)",
  //   },
  // },
  list: {
    backgroundColor: "#1565c0",
    color: "white",
    height: "100%",
  },
});

export default function SideBar() {
  const classes = styles();
  return (
    <>
      {/* <Drawer className={classes.drawer} anchor={"left"} open={true}> */}
      <List className={classes.list}>
        <ListItem button>
          <SnoozeIcon fontSize={"large"} />
        </ListItem>
        <ListItem button>
          <SlowMotionVideoIcon fontSize={"large"} />
        </ListItem>
        <ListItem button>
          <SnoozeIcon fontSize={"large"} />
        </ListItem>
        <ListItem button>
          <SlowMotionVideoIcon fontSize={"large"} />
        </ListItem>
        <ListItem button>
          <SnoozeIcon fontSize={"large"} />
        </ListItem>
        <ListItem button>
          <SlowMotionVideoIcon fontSize={"large"} />
        </ListItem>
        <ListItem button>
          <SnoozeIcon fontSize={"large"} />
        </ListItem>
        <ListItem button>
          <SlowMotionVideoIcon fontSize={"large"} />
        </ListItem>
        <ListItem button>
          <SnoozeIcon fontSize={"large"} />
        </ListItem>
        <ListItem button>
          <SlowMotionVideoIcon fontSize={"large"} />
        </ListItem>
        <ListItem button>
          <SlowMotionVideoIcon fontSize={"large"} />
        </ListItem>
      </List>
      {/* </Drawer> */}
    </>
  );
}
