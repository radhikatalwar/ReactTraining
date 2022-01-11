import { makeStyles, Typography } from "@material-ui/core";

const styles = makeStyles({
  optionContainer: {
    display: "flex",
    alignItems: "center",
  },
  options: {
    color: "#333",
    fontSize: "17px",
    margin: "5px",
    "&:hover": {
      color: "#1a91db",
    },
  },
});

export const Option = (props) => {
  const classes = styles();

  return (
    <div className={classes.optionContainer}>
      {props.icon}
      <Typography className={classes.options}>{props.title}</Typography>
    </div>
  );
};
