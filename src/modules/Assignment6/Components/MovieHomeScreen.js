import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import CardComp from "./CardComp";
import $data from "./$data";

const img = "./images/assignment6/moviebackground.jpeg";

const styles = makeStyles({
  mainContainer: {
    background: `url(${img}) no-repeat center`,
    backgroundSize: "cover",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  addbar: {
    backgroundColor: "white",
    fontFamily: ['"Roboto"', '"Helvetica"', '"Arial"', "sans-serif"].join(","),
  },
  toolbar: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
  },
  cardMain: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "70px",
  },
});

export default function MovieHomeScreen() {
  const classes = styles();

  const [updateRating, setUpdateRating] = useState($data);

  const findMovie = $data.find((data) => data.id === "2");
  const otherMovie = $data.filter((data) => data.id !== findMovie.id);
  const ratingUpdate = (findMovie.rating = Math.floor(Math.random() * 5));

  useEffect(() => {
    setInterval(() => {
      setUpdateRating(...otherMovie, findMovie);
    }, 5000);
  }, [updateRating]);

  return (
    <div className={classes.mainContainer}>
      <AppBar position="fixed" className={classes.addbar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant={"h4"} className={classes.heading}>
            {"Latest Bollywood Movies"}
          </Typography>
        </Toolbar>
      </AppBar>

      <div className={classes.cardMain}>
        {$data.map((value) => {
          return (
            <CardComp
              imgsrc={value.imgsrc}
              name={value.name}
              date={value.date}
              rating={value.rating}
            />
          );
        })}
      </div>
    </div>
  );
}
