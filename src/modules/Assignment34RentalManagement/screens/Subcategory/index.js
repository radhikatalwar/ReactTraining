import { Breadcrumbs, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Card } from "../../Components/Card";
import { ResetValues } from "../../reduxComponents/action";

const styles = makeStyles({
  mainContainer: {
    margin: "10%",
  },
  title: {
    letterSpacing: "1px",
    fontWeight: "900",
    fontSize: "19px",
    color: "black",
  },
});

export const Subcategory = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const { branch, location, selectedCategory, subcategory } = useSelector(
    (state) => state.infoReducer
  );
  const history = useHistory();

  const handleClick = (name) => {
    alert(
      `You have rented ${selectedCategory.toUpperCase()}'s ${name} from ${branch.toUpperCase()} in ${location}.Thankyou!!`
    );
    dispatch(ResetValues());
    history.push("/");
  };

  const handleLink = () => {
    history.push("/category");
  };

  return (
    <div className={classes.mainContainer}>
      <Breadcrumbs>
        <Link onClick={handleLink} className={classes.title}>
          {"Equipment Catalog"}
        </Link>
        <Link className={classes.title}>{selectedCategory}</Link>
      </Breadcrumbs>
      <Grid container spacing={2}>
        {subcategory.map((val, i) => {
          return (
            <Grid item xs={12} sm={4} key={i}>
              <Card
                name={val.name}
                image={`subcategory/${val.image}`}
                handleClick={() => handleClick(val.name)}
                button={"Rent Me!"}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
