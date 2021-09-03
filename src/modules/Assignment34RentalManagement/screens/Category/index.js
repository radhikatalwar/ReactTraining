import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Card } from "../../Components/Card";
import { HandleCategory } from "../../reduxComponents/action";

const styles = makeStyles({
  mainContainer: {
    margin: "10%",
  },
  title: {
    letterSpacing: "1px",
    fontWeight: "900",
    fontSize: "19px",
    textDecoration: "underline",
  },
});

export const Category = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.infoReducer);
  const history = useHistory();

  const handleClick = (category) => {
    dispatch(HandleCategory({ category }));
    history.push("/subcategory");
  };

  return (
    <div className={classes.mainContainer}>
      <Typography className={classes.title}>{"Equipment Catalog"}</Typography>
      <Grid container spacing={2}>
        {category.map((val, i) => {
          return (
            <Grid item xs={12} sm={4} key={i}>
              <Card
                name={val.name}
                image={val.image}
                handleClick={handleClick}
                button={"See Sub-Categories"}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
