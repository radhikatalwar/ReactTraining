import { makeStyles } from "@material-ui/core";
import { BreedList } from "./Mainbar/BreedList";
import { Sidebar } from "./SideBar/Sidebar";

const styles = makeStyles({
  mainContainer: {
    display: "flex",
  },
  right: {
    width: "75%",
    position: "absolute",
    right: 0,
    top: 0,
  },
});

export const Assignment25SelectData = () => {
  const classes = styles();

  return (
    <div className={classes.mainContainer}>
      <Sidebar />
      <div className={classes.right}>
        <BreedList />
      </div>
    </div>
  );
};
