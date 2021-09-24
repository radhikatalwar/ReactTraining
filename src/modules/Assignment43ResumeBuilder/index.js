import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { MainScreen } from "./Screens/Home";
import { DrawerList } from "./Screens/Home/Sidebar/DrawerList";
import { Sidebar } from "./Screens/Home/Sidebar/Sidebar";

const styles = makeStyles({
  mainContainer: {
    width: "100%",
    display: "flex",
  },
});

export const Assignment43ResumeBuilder = () => {
  const classes = styles();

  const [sidebar, setSidebar] = useState(true);

  const handleSidebar = () => {
    setSidebar(false);
  };

  const handleDrawer = () => {
    setSidebar(true);
  };

  return (
    <div className={classes.mainContainer}>
      {sidebar ? <Sidebar handleSidebar={handleSidebar} /> : <DrawerList />}
      <MainScreen handleDrawer={handleDrawer} />
    </div>
  );
};
