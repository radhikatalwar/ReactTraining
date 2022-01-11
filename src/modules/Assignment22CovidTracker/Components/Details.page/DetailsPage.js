import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import { India } from "./India";
import { Navbar } from "./Navbar";
import { World } from "./World";

const styles = makeStyles({
  DetailsContainer: {
    margin: "0 7%",
  },
});

export const DetailsPage = () => {
  const classes = styles();
  const [place, setPlace] = useState("India");

  const handlePlace = () => {
    setPlace(place === "India" ? "World" : "India");
  };

  return (
    <>
      <Navbar handlePlace={handlePlace} place={place} />
      <div className={classes.DetailsContainer}>
        {place === "World" ? <World /> : <India />}
      </div>
    </>
  );
};
