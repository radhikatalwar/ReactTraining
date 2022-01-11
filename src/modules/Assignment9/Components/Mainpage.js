import { makeStyles } from "@material-ui/core";
import React from "react";
import Topbar from "./TopBar";
import data from "./data";
import Product from "./Product";

const styles = makeStyles({
  smallboxMain: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginTop: "10%",
  },
});

const Mainpage = () => {
  const classes = styles();
  return (
    <>
      <Topbar action={"Logout"} isLogin={false} />
      <div className={classes.smallboxMain}>
        {data.map((product) => {
          return (
            <Product
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default Mainpage;
