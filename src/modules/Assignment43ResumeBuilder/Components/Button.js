import { Button, makeStyles } from "@material-ui/core";

const styles = makeStyles({
  button: {
    backgroundColor: "#686cbb",
    color: "white",
    textTransform: "none",
    boxShadow: "-3px 0px 11px -1px rgba(113,113,113,0.75)",
  },
});

export const ButtonComp = ({ label }) => {
  const classes = styles();

  return <Button className={classes.button}>{label}</Button>;
};
