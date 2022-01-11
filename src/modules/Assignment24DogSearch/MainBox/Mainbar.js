import { makeStyles } from "@material-ui/core";
import { Navbar } from "./Navbar";
import { Route, Switch } from "react-router";
import { ListallBreeds } from "./MainBoxInner/ListallBreeds";
import { RandomImage } from "./MainBoxInner/RandomImage";

const styles = makeStyles({
  mainBarContainer: {
    width: "75%",
    height: "100vh",
    overflow: "auto",
    padding: "100px 60px 50px",
    color: "#333",
  },
});

export const Mainbar = () => {
  const classes = styles();

  return (
    <div className={classes.mainBarContainer}>
      <Navbar />
      <Switch>
        {/* <Route exact path="/breedlist" component={BreedList} />
        <Route exact path="/yourdog" component={SubmitYourDog} /> */}
      </Switch>
    </div>
  );
};
