import { makeStyles, Typography } from "@material-ui/core";
import { useHistory } from "react-router";

const styles = makeStyles({
  heading: {
    color: "#333",
    fontSize: "24px",
  },
  option: {
    color: "#333",
    borderBottom: "2px solid #1a91db",
    cursor: "pointer",
    margin: "20px 40px 100px 0",
    fontSize: "17px",
    "&:hover": {
      color: "#1a91db",
      borderBottom: "1px solid white",
    },
  },
  optionBox: {
    display: "flex",
  },
});

export const Navbar = () => {
  const classes = styles();

  const history = useHistory();

  const goToBreed = () => {
    history.push("/breedlist");
  };

  const goToDoc = () => {
    history.push("/");
  };

  const goToRandomImage = () => {
    history.push("/randomimage");
  };

  const goTobyBreed = () => {
    history.push("/bybreed");
  };

  const goTobySubBreed = () => {
    history.push("/bysubbreed");
  };

  return (
    <>
      <Typography className={classes.heading}>{"ENDPOINTS"}</Typography>
      <div className={classes.optionBox}>
        <Typography className={classes.option} onClick={goToDoc}>
          {"List all breeds"}
        </Typography>
        <Typography className={classes.option} onClick={goToRandomImage}>
          {"Random Image"}
        </Typography>
        <Typography className={classes.option} onClick={goTobyBreed}>
          {"By breed"}
        </Typography>
        <Typography className={classes.option} onClick={goTobySubBreed}>
          {"By sub-breed"}
        </Typography>
        <Typography className={classes.option} onClick={goToBreed}>
          {"Browse breed list"}
        </Typography>
      </div>
    </>
  );
};
