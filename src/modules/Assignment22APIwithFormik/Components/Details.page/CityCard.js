import { Divider, makeStyles } from "@material-ui/core";
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = makeStyles({
  card: {
    margin: "10px ",
    borderBottom: "10px solid #b03938",
    padding: "5px",
    minHeight: "270px",
  },
  confirmed: {
    color: "#b03938",
  },
  recovered: {
    color: "#033103",
  },
  divider: {
    backgroundColor: "#b03938",
    margin: " 10px 0",
  },
  heading: {
    fontWeight: "bold",
  },
  headingBox: {
    minHeight: "120px",
  },
});

export const CityCard = (props) => {
  const classes = styles();
  const { lat, long, confirmed, recovered, deaths } = props.city;

  return (
    <>
      <Card className={classes.card} raised={true}>
        <CardContent>
          <div className={classes.headingBox}>
            <Typography
              variant="h5"
              className={classes.heading}
            >{`${props.cityName}`}</Typography>
            <Typography>{`${lat} , ${long}`}</Typography>
          </div>
          <Divider className={classes.divider} />
          <Typography
            className={classes.confirmed}
          >{`Confirmed : ${confirmed}`}</Typography>
          <Typography
            className={classes.recovered}
          >{`Recovered : ${recovered}`}</Typography>
          <Typography
            className={classes.confirmed}
          >{`Deaths : ${deaths}`}</Typography>
        </CardContent>
      </Card>
    </>
  );
};
