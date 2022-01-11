import { Divider, makeStyles } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const styles = makeStyles({
  icons: {
    display: "flex",
    padding: "15px",
    backgroundColor: "#33475b",
  },
  divider: {
    backgroundColor: "gray",
  },
});

export const Icons = () => {
  const classes = styles();

  return (
    <>
      <div className={classes.icons}>
        <FiberManualRecordIcon style={{ color: "red" }} fontSize="small" />
        <FiberManualRecordIcon
          style={{ color: "rgb(245, 194, 107)" }}
          fontSize="small"
        />
        <FiberManualRecordIcon style={{ color: "green" }} fontSize="small" />
      </div>
      <Divider className={classes.divider} />
    </>
  );
};
