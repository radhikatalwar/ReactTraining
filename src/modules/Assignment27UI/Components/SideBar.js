import React from "react";
import { List, ListItem, makeStyles } from "@material-ui/core";
import SnoozeIcon from "@material-ui/icons/Snooze";
import SlowMotionVideoIcon from "@material-ui/icons/SlowMotionVideo";
import ArchiveIcon from "@material-ui/icons/Archive";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import DraftsIcon from "@material-ui/icons/Drafts";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import ShareIcon from "@material-ui/icons/Share";

const styles = makeStyles({
  list: {
    backgroundColor: "#853863",
    color: "white",
    height: "100%",
  },
});

export const SideBar = () => {
  const classes = styles();
  return (
    <>
      <List className={classes.list}>
        <ListItem button>
          <SnoozeIcon fontSize={"large"} />
        </ListItem>
        <ListItem button>
          <SlowMotionVideoIcon fontSize={"large"} />
        </ListItem>
        <ListItem button>
          <ArchiveIcon fontSize={"large"} />
        </ListItem>
        <ListItem button>
          <AttachFileIcon fontSize={"large"} />
        </ListItem>
        <ListItem button>
          <CloudUploadIcon fontSize={"large"} />
        </ListItem>
        <ListItem button>
          <DraftsIcon fontSize={"large"} />
        </ListItem>
        <ListItem button>
          <FolderOpenIcon fontSize={"large"} />
        </ListItem>
        <ListItem button>
          <LocationOnIcon fontSize={"large"} />
        </ListItem>
        <ListItem button>
          <NotificationsIcon fontSize={"large"} />
        </ListItem>
        <ListItem button>
          <PlayCircleFilledWhiteIcon fontSize={"large"} />
        </ListItem>
        <ListItem button>
          <ShareIcon fontSize={"large"} />
        </ListItem>
      </List>
    </>
  );
}
