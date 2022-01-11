import { makeStyles } from "@material-ui/core";
import { Sidebar } from "./SideBar/Sidebar";
import { Route, Switch } from "react-router";
import { About } from "./MainBox/About";
import { BreedList } from "./MainBox/BreedList";
import { ListallBreeds } from "./MainBox/MainBoxInner/ListallBreeds";
import { RandomImage } from "./MainBox/MainBoxInner/RandomImage";
import { ByBreed } from "./MainBox/MainBoxInner/ByBreed";
import { BySubBreed } from "./MainBox/MainBoxInner/BySubBreed";

const styles = makeStyles({
  mainContainer: {
    display: "flex",
  },
  right: {
    width:"75%",
    position: "absolute",
    right: 0,
    top: 0,
  },
});

export const Assignment24DogSearch = () => {
  const classes = styles();

  return (
    <div className={classes.mainContainer}>
      <Sidebar />
      <div className={classes.right}>
        <Switch>
          <Route exact path="/" component={ListallBreeds} />
          <Route exact path="/randomimage" component={RandomImage} />
          <Route exact path="/bybreed" component={ByBreed} />
          <Route exact path="/bysubbreed" component={BySubBreed} />
          <Route exact path="/about" component={About} />
          <Route exact path="/breedlist" component={BreedList} />
        </Switch>
      </div>
    </div>
  );
};
