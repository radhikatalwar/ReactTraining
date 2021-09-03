import { makeStyles } from "@material-ui/core";

export const styles = makeStyles({
  label: {
    fontWeight: "900",
    fontSize: "15px",
  },
  table: {
    margin: "30px 0",
  },
  headerCell: {
    fontWeight: "900",
    textAlign: "left",
    borderBottom: "1px solid lightgray",
  },
  icon: {
    color: "red",
    fontSize: "21px",
  },
  paper: {
    padding: "20px",
    width: "58%",
    margin: "30px auto",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    margin: "2px 10px",
    width: "37%",
  },
  button: {
    textTransform: "none",
    fontWeight: "900",
    backgroundColor: "#20919d",
    color: "white",
    fontSize: "14px",
    margin: "10px 0 0",
    "&:hover": {
      color: "#20919d",
      backgroundColor: "white",
    },
  },
  title: {
    fontWeight: "900",
    letterSpacing: "1px",
    color: "#20919d",
    textAlign: "center",
    fontSize: "32px",
    margin: "13px",
    fontFamily: "monospace",
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerToDownload: {
    width: "100%",
  },
  editable: {
    width: "30%",
    fontSize: "17 px",
    textAlign: "left",
    margin: "5px 10px",
    fontFamily: "sans-serif",
    letterSpacing: "0.5px",
    fontWeight: "900",
  },
  editableRight: {
    textAlign: "right",
  },
  fab: {
    position: "sticky",
    right: "10px",
    top: "10px",
    width: "100px",
    height: "100px",
    backgroundColor: "white",
    textTransform: "none",
    fontWeight: "900",
  },
});
