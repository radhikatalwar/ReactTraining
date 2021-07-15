import { Button, makeStyles, Paper } from "@material-ui/core";
import { Icons } from "./Icons";
import { To } from "./To";
import RefreshIcon from "@material-ui/icons/Refresh";
import { Template2 } from "./Template2";
import { useDispatch, useSelector } from "react-redux";
import { resetData } from "../reduxComponents/action";
import { Template1 } from "./Template1";
import { Template3 } from "./Template3";
import copy from "copy-to-clipboard";

const styles = makeStyles({
  mainBarContainer: {
    background:
      "linear-gradient(45deg, rgba(89,206,255,1) 29%, rgba(70,182,232,1) 70%, rgba(129,63,251,1) 99%, rgba(103,66,251,1) 100%)",
    width: "75%",
    color: "white",
    maxHeight: "100vh",
    overflow: "auto",
  },
  image: { height: "30px", margin: "40px 80px" },
  paper: { margin: "40px 80px" },
  buttons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  signature: {
    padding: "90px",
  },
  button: {
    backgroundColor: "#33475b",
    color: "white",
    textTransform: "none",
    padding: "10px",
    fontSize: "17px",
  },
  clear: {
    margin: "10px 0",
    color: "white",
    "&:hover": {
      background: "none",
    },
  },
});

export const Mainbar = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const { template, sourceCode } = useSelector((state) => state.infoReducer);

  const handleClick = () => {
    copy(sourceCode.three);
    console.log(sourceCode.three);
    alert(`Successfully copied`);
  };

  return (
    <div className={classes.mainBarContainer}>
      <div className={classes.navBox}>
        <img
          className={classes.image}
          src={"https://cdn2.hubspot.net/hubfs/53/tools/hubspot-tools.svg"}
          alt={"Icon"}
        />
      </div>
      <Paper elevation={3} className={classes.paper}>
        <Icons />
        <To />
        {template === 1 ? <Template1 /> : ""}
        {template === 2 ? <Template2 /> : ""}
        {template === 3 ? <Template3 /> : ""}
      </Paper>
      <div className={classes.buttons}>
        <Button className={classes.button} onClick={handleClick}>
          {"Copy Source Code"}
        </Button>
        <Button className={classes.clear} onClick={() => dispatch(resetData())}>
          <RefreshIcon fontSize="small" />
          {"CLEAR ALL INPUT FIELDS"}
        </Button>
      </div>
    </div>
  );
};
