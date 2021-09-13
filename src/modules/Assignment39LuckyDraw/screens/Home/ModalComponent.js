import React from "react";
import { Fade, makeStyles, Modal, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const styles = makeStyles({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mainContainer: {
    display: "flex",
    alignItems: "center",
    padding: "20px 5% 30px 5%",
    justifyContent: "center",
  },
  leftMainContainer: {
    width: "35%",
  },
  rightMainContainer: {
    width: "30%",
    display: "flex",
    flexDirection: "column",
    padding: "50px",
    backgroundColor: "#f9f9f9",
    height: "452px",
  },
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
    fontSize: "40px",
    lineHeight: "1",
  },
  icon: {
    position: "fixed",
    top: "10%",
    right: "19%",
  },
  winner: {
    textAlign: "center",
    padding: "5px 0 0",
    fontWeight: "700",
    fontSize: "20px",
  },
  winnerContainer: {
    margin: "auto",
  },
});

export const ModalComponent = ({ open, handleModal }) => {
  const classes = styles();
  var data = JSON.parse(localStorage.getItem("values"));

  return (
    <>
      <Modal className={classes.modal} open={open} closeAfterTransition>
        <Fade in={open}>
          <div className={classes.mainContainer}>
            <CloseIcon className={classes.icon} onClick={handleModal} />
            <div className={classes.leftMainContainer}>
              <img
                src="../images/assignment39/photo2.png"
                alt={"background"}
                width={"100%"}
                height={"550px"}
              />
            </div>
            <div className={classes.rightMainContainer}>
              <Typography variant="h5" className={classes.heading}>
                {"Congratulations!"}
              </Typography>
              <Typography variant="h5" className={classes.subHeading}>
                {"LUCKY DRAW WINNERS"}
              </Typography>
              <div className={classes.winnerContainer}>
                {data.map((val, i) => {
                  return (
                    <Typography key={i} className={classes.winner}>
                      {val}
                    </Typography>
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
};
