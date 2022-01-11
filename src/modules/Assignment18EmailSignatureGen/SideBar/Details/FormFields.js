import { makeStyles, TextField, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { HandleChange } from "../../reduxComponents/action";

const styles = makeStyles({
  input: {
    margin: "0 63px 50px ",
    color: "white",
  },
  label: {
    margin: "0 63px",
    fontSize: "15px",
  },
});

export const FormFields = (props) => {
  const classes = styles();
  const dispatch = useDispatch();
  const { label, value, name } = props;

  const inputHandle = (event) => {
    const { name, value } = event.target;
    dispatch(HandleChange({ name, value }));
  };

  return (
    <>
      <Typography className={classes.label}>{label}</Typography>
      <TextField
        className={classes.input}
        value={value}
        name={name}
        onChange={inputHandle}
      />
    </>
  );
};
