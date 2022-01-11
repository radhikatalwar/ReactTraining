import { makeStyles, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { handleTemplate } from "../../reduxComponents/action";

const styles = makeStyles({
  title: {
    margin: "20px 63px 0px",
    fontWeight: "bold",
  },
  image: {
    margin: "0 63px 50px",
  },
});

export const TemplateBox = (props) => {
  const classes = styles();
  const dispatch = useDispatch();

  return (
    <>
      <Typography className={classes.title}>{props.title}</Typography>
      <img
        className={classes.image}
        src={props.src}
        alt={"Template"}
        onClick={() => dispatch(handleTemplate(props.id))}
      />
    </>
  );
};
