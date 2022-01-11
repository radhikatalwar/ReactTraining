import { ListItem, ListItemText, makeStyles } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { HandleChange } from "../reduxComponents/action";

const styles = makeStyles({
  listItem: {
    margin: "7px",
    color: "#686cbb",
  },
  icon: {
    color: "#686cbb",
    fontSize: "15px",
  },
});

export const ListItemComp = ({ heading, value }) => {
  const classes = styles();
  const dispatch = useDispatch();
  const { parts } = useSelector((state) => {
    return state.dataReducer;
  });

  const handleClick = (value) => {
    const currValue = parts[value];
    dispatch(HandleChange({ value, newValue: !currValue }));
  };

  return (
    <ListItem button onClick={() => handleClick(value)}>
      {parts[value] ? (
        <Remove className={classes.icon} />
      ) : (
        <Add className={classes.icon} />
      )}
      <ListItemText primary={heading} className={classes.listItem} />
    </ListItem>
  );
};
