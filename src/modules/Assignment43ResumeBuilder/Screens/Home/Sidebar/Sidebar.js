import {
  Collapse,
  createMuiTheme,
  ListItem,
  ListItemText,
  makeStyles,
  MuiThemeProvider,
  Paper,
  List,
  Typography,
  Drawer,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { ButtonComp } from "../../../Components/Button";
import { ListItemComp } from "../../../Components/ListItem";
import { ChromePicker, SwatchesPicker } from "react-color";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { changeColor, HandleDrawer } from "../../../reduxComponents/action";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const styles = makeStyles({
  sideBarContainer: {
    position: "fixed",
    width: "20%",
    padding: "20px",
    maxHeight: "100vh",
    overflow: "auto",
    backgroundColor: "#fbfaff",
  },
  img: {
    width: "28px",
  },
  logoDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 0 40px",
  },
  innerLogoDiv: {
    display: "flex",
    alignItems: "center",
  },
  logoHeading: {
    fontWeight: "700",
    fontSize: "20px",
    marginLeft: "8px",
    color: "#495057",
    letterSpacing: "1px",
  },
  cardDiv: {
    padding: "30px",
    backgroundColor: "#eeedfc",
    margin: "30px auto",
    textAlign: "center",
  },
  cardHeading: {
    color: "#8e92e2",
    fontSize: "18px",
    fontWeight: 900,
  },
  cardContent: {
    margin: "20px 0",
    fontSize: "14px",
    color: "#495057",
  },
  subheading: {
    color: "#686cbb",
    fontWeight: "900",
    textAlign: "center",
  },
  paper: {
    padding: "8px",
    backgroundColor: "#e4dff7",
    color: "#686cbb",
  },
  colorPicker: {
    width: "100% !important",
  },
});

const theme = createMuiTheme({
  overrides: {
    MuiListItem: {
      gutters: {
        paddingLeft: "0",
        paddingRight: "0",
      },
    },
  },
});

export const Sidebar = ({ handleSidebar }) => {
  const classes = styles();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { color } = useSelector((state) => state.dataReducer);

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.sideBarContainer}>
        <div className={classes.logoDiv}>
          <div className={classes.innerLogoDiv}>
            <img
              className={classes.img}
              src="http://minia-v-light.react.themesbrand.com/static/media/logo-sm.87ff5472.svg"
              alt="Main logo"
            />
            <Typography className={classes.logoHeading}>{"Minia"}</Typography>
          </div>
          {/* <Close
            onClick={() => {
              handleSidebar();
            }}
          /> */}
        </div>
        <Typography className={classes.subheading}>
          {"You can add or remove by clicking the particular section!"}
        </Typography>
        <ListItemComp heading={"Name"} value={"name"} />
        <ListItemComp heading={"Contact Details"} value={"contactdetails"} />
        <ListItemComp heading={"Skills"} value={"skills"} />
        <ListItemComp heading={"Language"} value={"language"} />
        <ListItemComp heading={"Hobbies"} value={"hobbies"} />
        <ListItemComp heading={"Professional Goal"} value={"goal"} />
        <ListItemComp heading={"Work Experience"} value={"experience"} />
        <ListItemComp heading={"Academic History"} value={"history"} />
        <ListItemComp heading={"Co-curriculam"} value={"cocurriculam"} />

        <List aria-labelledby="nested-list-subheader">
          <Paper elevation={3} className={classes.paper}>
            <ListItem
              button
              onClick={() => {
                setOpen(!open);
              }}
            >
              <ListItemText primary="Change Color Scheme" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open}>
              <ChromePicker
                className={classes.colorPicker}
                color={color}
                onChangeComplete={(updatedColor) => {
                  dispatch(changeColor(updatedColor.hex));
                }}
              />
              <SwatchesPicker
                className={classes.colorPicker}
                color={color}
                onChangeComplete={(updatedColor) => {
                  dispatch(changeColor(updatedColor.hex));
                }}
              />
            </Collapse>
          </Paper>
        </List>

        <div className={classes.cardDiv}>
          <Typography className={classes.cardHeading}>
            {"Unlimited Access"}
          </Typography>
          <Typography className={classes.cardContent}>
            {"Upgrade your plan from a Free trial, to select ‘Business Plan’."}
          </Typography>
          <ButtonComp label={"Upgrade Now"} />
        </div>
      </div>
    </MuiThemeProvider>
  );
};
