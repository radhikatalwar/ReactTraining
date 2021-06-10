import { makeStyles } from "@material-ui/core";
import React from "react";
import SideBar from "./Components/SideBar";
import AppBar from "./Components/AppBar";
import Form from "./Components/Form";
import About from "./Components/About";
import LatestNews from "./Components/LatestNews";
import PostAnAd from "./Components/PostAnAd";
import TableBuy from "./Components/TableBuy";
import TableSell from "./Components/TableSell";
import Footer from "./Components/Footer";

const styles = makeStyles({
  mainContainer: {
    display: "flex",
    maxWidth: "100vw;",
    backgroundColor: "white",
  },
  right: {
    width: "100%",
    backgroundColor: "#f4f6f8",
    marginLeft: "70px",
  },
});

export default function Assignment5() {
  const classes = styles();
  return (
    <div className={classes.mainContainer}>
      <div>
        <SideBar />
      </div>
      <div className={classes.right}>
        <AppBar />
        <Form />
        <TableBuy />
        <TableSell />
        <PostAnAd />
        <About />
        <LatestNews />
        <Footer />
      </div>
    </div>
  );
}
