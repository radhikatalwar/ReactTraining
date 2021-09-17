import React from "react";
import {
  Button,
  Fade,
  makeStyles,
  Modal,
  Paper,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { clearAnswers } from "../../reduxComponents/action";

const styles = makeStyles({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "auto",
  },
  rightMainContainer: {
    width: "800px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "50px",
    backgroundColor: "#f9f9f9",
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
  button: {
    margin: "10px 0 0 32px",
    backgroundColor: "#2d81f7",
    color: "white",
    textTransform: "none",
    padding: "7px 20px",
    fontWeight: "900",
    "&:hover": {
      backgroundColor: "#2d81f7",
      color: "white",
    },
  },
  paper: {
    width: "100%",
    padding: "20px",
    margin: "10px",
  },
  question: {
    fontWeight: "900",
  },
  corrAnswer: {
    fontWeight: "900",
    color: "#2d81f7",
    letterSpacing: "1px",
  },
});

export const ModalComponent = ({ open, handleModal }) => {
  const classes = styles();
  const { score, trackAnswers, data } = useSelector((state) => {
    return state.dataReducer;
  });
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClose = () => {
    handleModal();
    dispatch(clearAnswers());
    console.log(history);
    history.push("/");
  };

  return (
    <>
      <Modal className={classes.modal} open={open} closeAfterTransition>
        <Fade in={open}>
          <div className={classes.rightMainContainer}>
            <Typography variant="h5" className={classes.heading}>
              {"Thanks for Submission!"}
            </Typography>
            <Typography variant="h5" className={classes.subHeading}>
              {`Your Score is: ${score}`}
            </Typography>
            {data.results.map((val, index) => {
              return (
                <Paper className={classes.paper}>
                  <Typography className={classes.question}>{`${index + 1}. ${
                    val.question
                  }`}</Typography>
                  <Typography
                    className={classes.corrAnswer}
                  >{`Correct Answer - ${val.correct_answer}`}</Typography>
                  <Typography className={classes.question}>{`Your Answer - ${
                    trackAnswers[index] !== ""
                      ? trackAnswers[index]
                      : `Not Attempted`
                  }`}</Typography>
                </Paper>
              );
            })}
            <Button className={classes.button} onClick={handleClose}>
              {"Close"}
            </Button>
          </div>
        </Fade>
      </Modal>
    </>
  );
};
