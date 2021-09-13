import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { ModalComponent } from "./ModalComponent";

const styles = makeStyles({
  mainContainer: {
    display: "flex",
    alignItems: "center",
    padding: "20px 5% 30px 5%",
    justifyContent: "space-between",
  },
  leftMainContainer: {
    width: "45%",
  },
  rightMainContainer: {
    width: "44%",
    display: "flex",
    flexDirection: "column",
    padding: "50px",
    backgroundColor: "#f9f9f9",
  },
  image: {
    width: "100%",
    marginLeft: "120px",
  },
  input: { backgroundColor: "white", width: "100%", marginBottom: "10px" },
  heading: {
    fontSize: "16px",
    letterSpacing: "3px",
    fontWeight: "700",
    color: "#1b251d",
    marginBottom: "5px",
    display: "block",
    padding: "10px 0",
  },
  subHeading: {
    fontWeight: "900",
    fontSize: "52px",
    lineHeight: "1",
  },
  form: {
    margin: "20px 0",
  },
  button: {
    margin: "20px 30px 0 0",
    fontSize: "17px",
    textTransform: "none",
    padding: "15px",
    color: "white",
    backgroundColor: "#1b251d",
    fontWeight: "900",
    width: "100%",
    letterSpacing: "2px",
    "&:hover": {
      color: "white",
      backgroundColor: "#1b251d",
    },
  },
});

export const LuckyDrawGenerator = () => {
  const classes = styles();
  const [values, setValues] = useState({ minId: "", maxId: "", count: "" });
  var randomValues = [];
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!open);
  };

  const handleAnnouncement = () => {
    if (values.minId > values.maxId) {
      alert("Please provide Valid Range");
    }

    while (randomValues.length < values.count) {
      const value = Math.floor(
        Math.random() * (values.maxId - values.minId + 1) + values.minId
      );
      if (!randomValues.includes(value)) {
        randomValues.push(value);
      }
    }

    localStorage.setItem("values", JSON.stringify(randomValues));
    setOpen(!open);
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.leftMainContainer}>
        <img
          src="../images/assignment39/photo1.png"
          alt={"background"}
          width={"100%"}
          height={"550px"}
        />
      </div>
      <ModalComponent
        handleModal={handleModal}
        open={open}
        randomValues={[...randomValues]}
      />
      <div className={classes.rightMainContainer}>
        <Typography variant="h5" className={classes.heading}>
          {"LUCKY DRAW!"}
        </Typography>
        <Typography variant="h5" className={classes.subHeading}>
          {"Creative vision and digital experience"}
        </Typography>

        <form className={classes.form} noValidate autoComplete="off">
          <div>
            <Typography>{"No of Winners:"}</Typography>
            <TextField
              className={classes.input}
              type="number"
              variant="outlined"
              value={values.count}
              name="count"
              onChange={(e) =>
                setValues({ ...values, count: Number(e.target.value) })
              }
            />
          </div>
          <div>
            <Typography>{"Minimum Id:"}</Typography>
            <TextField
              className={classes.input}
              type="number"
              variant="outlined"
              value={values.minId}
              name="minId"
              onChange={(e) =>
                setValues({ ...values, minId: Number(e.target.value) })
              }
            />
          </div>
          <div>
            <Typography>{"Maximum Id:"}</Typography>
            <TextField
              className={classes.input}
              type="number"
              name="maxId"
              onChange={(e) =>
                setValues({ ...values, maxId: Number(e.target.value) })
              }
              variant="outlined"
              value={values.maxId}
            />
          </div>
          <Button
            fullWidth
            variant="contained"
            className={classes.button}
            endIcon={<ArrowRightAltIcon />}
            onClick={handleAnnouncement}
          >
            {"Announce winners"}
          </Button>
        </form>
      </div>
    </div>
  );
};
