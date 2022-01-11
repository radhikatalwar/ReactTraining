import { makeStyles, Typography } from "@material-ui/core";

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

  return (
    <>
      <Typography className={classes.heading}>{"ENDPOINTS"}</Typography>
      <div className={classes.optionBox}>
        <Typography className={classes.option}>{"List all breeds"}</Typography>
        <Typography className={classes.option}>{"Random Image"}</Typography>
        <Typography className={classes.option}>{"By breed"}</Typography>
        <Typography className={classes.option}>{"By sub-breed"}</Typography>
        <Typography className={classes.option}>
          {"Browse breed list"}
        </Typography>
      </div>
    </>
  );
};
