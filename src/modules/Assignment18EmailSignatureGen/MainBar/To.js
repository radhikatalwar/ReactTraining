import { makeStyles, Typography } from "@material-ui/core";

const styles = makeStyles({
  toBox: {
    backgroundColor: "#33475b",
    color: "white",
    padding: "20px 40px",
  },
  to: {
    display: "flex",
  },
  about: {
    fontWeight: "bold",
    padding: "0 5px",
  },
});

export const To = () => {
  const classes = styles();

  return (
    <>
      <div className={classes.toBox}>
        <div className={classes.to}>
          <Typography>{"To :"}</Typography>
          <Typography className={classes.about}>{"Your Recipient"}</Typography>
        </div>
        <div className={classes.to}>
          <Typography>{"Subject :"}</Typography>
          <Typography className={classes.about}>
            {"Checkout my Email Signature"}
          </Typography>
        </div>
      </div>
    </>
  );
};
