import { Button, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import Color from "../../Components/Color";
import { fetchdata } from "./action";

const styles = makeStyles({
  mainContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height:"100vh",
    background:
      "radial-gradient(circle, rgba(206,222,241,1) 17%, rgba(241,219,228,1) 44%, rgba(206,222,241,1) 89%)",
  },
  smallContainer: {
    display: "flex",
    flexWrap: "wrap",
  },
  button: {
    color: "white",
    margin: "15px",
    fontWeight: "bold",
    fontSize: "15px",
    backgroundColor: "rgba(238,174,202,1)",
    "&:hover": {
      backgroundColor: "rgba(148,187,233,1)",
    },
    display: "flex",
    alignItems: "center",
  },
});

const APIData = () => {
  const dispatch = useDispatch();
  const classes = styles();

  const { loading, error, data } = useSelector((state) => {
    return state.dataReducer;
  });
  const colorData = data.data;

  return (
    <div className={classes.mainContainer}>
      <Button
        className={classes.button}
        onClick={() => {
          dispatch(fetchdata());
        }}
      >
        {"Click me to get Colours Details"}
      </Button>
      {loading ? (
        <h2>{"Loading"}</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div className={classes.smallContainer}>
          {colorData &&
            colorData.length > 0 &&
            colorData.map((color) => {
              return (
                <Color
                  key={color.id}
                  id={color.id}
                  name={color.name}
                  year={color.year}
                  color={color.color}
                  pantone_value={color.pantone_value}
                />
              );
            })}
        </div>
      )}
    </div>
  );
};

export default APIData;
