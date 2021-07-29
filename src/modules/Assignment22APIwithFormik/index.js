import { makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchdata, setData } from "./ReduxComponents/action";
import { Route, Switch } from "react-router";
import { MainPage } from "./Components/HomePage/MainPage";
import { DetailsPage } from "./Components/Details.page/DetailsPage";

const styles = makeStyles({
  mainContainer: {
    height: "100vh",
    width: "100%",
  },
  button: {
    margin: "15px",
    fontWeight: "bold",
    fontSize: "15px",
    backgroundColor: "lightblue",
  },
});

export const Assignment22APIwithFormik = () => {
  const dispatch = useDispatch();
  const classes = styles();

  const { data } = useSelector((state) => {
    return state.dataReducer;
  });

  useEffect(() => {
    dispatch(fetchdata());
  }, []);

  useEffect(() => {
    if (data.length !== 0) {
      dispatch(setData(data));
    }
  }, [data]);

  return (
    <div className={classes.mainContainer}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/details" component={DetailsPage} />
      </Switch>
    </div>
  );
};
