import { makeStyles, Typography } from "@material-ui/core";
import { Option } from "./Option";
import PetsIcon from "@material-ui/icons/Pets";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

const styles = makeStyles({
  sideBarContainer: {
    backgroundColor: "#eee",
    width: "19%",
    maxHeight: "100vh",
    overflow: "auto",
    padding: "35px",
    position: "fixed",
  },
  logo: {
    maxWidth: "120px",
  },
  heading: {
    margin: "20px 0 50px 0",
  },
  options: {
    fontSize: "17px",
    margin: " 15px 0",
    letterSpacing: "2px",
    borderBottom: "1px solid #ddd",
    paddingBottom: "15px",
    color: "#333",
    "&:hover": {
      color: "#1a91db",
      borderBottom: "1px solid #1a91db",
    },
  },
});

export const Sidebar = () => {
  const classes = styles();

  return (
    <div className={classes.sideBarContainer}>
      <div>
        <img
          src="https://dog.ceo/img/dog-api-logo.svg"
          alt="dog"
          className={classes.logo}
        />
        <Typography variant="h4" className={classes.heading}>
          {"Dog API"}
        </Typography>
        <Typography className={classes.options}>{"Documentation"}</Typography>
        <Typography className={classes.options}>{"Breeds List"}</Typography>
        <Typography className={classes.options}>{"About"}</Typography>
        <Typography className={classes.options}>{"Submit Your Dog"}</Typography>
      </div>
      <Option icon={<PetsIcon fontSize={"small"} />} title={"Dog CEO Zine"} />
      <Option
        icon={<AttachMoneyIcon fontSize={"small"} />}
        title={"Buy Dog Treat"}
      />
      <Option
        icon={<GitHubIcon fontSize={"small"} />}
        title={"View on github"}
      />
      <Option
        icon={<TwitterIcon fontSize={"small"} />}
        title={"Follow on Twitter"}
      />
    </div>
  );
};
