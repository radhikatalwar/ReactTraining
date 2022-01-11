import { Button, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { setScore, trackAnswers } from "../../reduxComponents/action";
import { ModalComponent } from "./ModalComponent";
import { Options } from "./options";

const styles = makeStyles({
  questionContainer: {
    width: "75%",
    padding: "50px 15px",
  },
  category: {
    margin: "10px 30px",
    letterSpacing: "1px",
  },
  question: {
    margin: "10px 30px",
    letterSpacing: "1px",
    fontSize: "30px",
    color: "#3887f6",
    fontWeight: "900",
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
  link: {
    textDecoration: "none",
  },
});

export const Question = () => {
  const classes = styles();
  const { data, track } = useSelector((state) => {
    return state.dataReducer;
  });
  const { id } = useParams();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  var score = 0;

  const handleModal = () => {
    setOpen(!open);
  };

  const handleSubmit = () => {
    score = track.filter((val) => val).length;
    dispatch(setScore(score));
    handleModal();
  };

  const handleClear = () => {
    dispatch(
      trackAnswers({ id, status: "", selectedOption: "", selectedIndex: "" })
    );
  };

  var selectedQuestion = data.results[id - 1];
  var optionArray = [];

  if (id % 4 === 0) {
    optionArray = [
      selectedQuestion.correct_answer,
      ...selectedQuestion.incorrect_answers,
    ];
  } else if (id % 4 === 1) {
    optionArray = [
      selectedQuestion.incorrect_answers[1],
      selectedQuestion.correct_answer,
      selectedQuestion.incorrect_answers[0],
      selectedQuestion.incorrect_answers[2],
    ];
  } else if (id % 4 === 2) {
    optionArray = [
      selectedQuestion.incorrect_answers[1],
      selectedQuestion.incorrect_answers[0],
      selectedQuestion.incorrect_answers[2],
      selectedQuestion.correct_answer,
    ];
  } else if (id % 4 === 3) {
    optionArray = [
      selectedQuestion.incorrect_answers[1],
      selectedQuestion.incorrect_answers[0],
      selectedQuestion.correct_answer,
      selectedQuestion.incorrect_answers[2],
    ];
  }

  return (
    <div className={classes.questionContainer}>
      <ModalComponent handleModal={handleModal} open={open} score={score} />
      <Typography className={classes.question}>
        {`${id}. ${selectedQuestion.question}`}
      </Typography>
      <div>
        <Options
          optionArray={optionArray}
          correct={selectedQuestion.correct_answer}
          id={id}
        />
      </div>
      <div>
        <Button className={classes.button} onClick={() => handleSubmit()}>
          {"Submit"}
        </Button>
        <Button className={classes.button} onClick={() => handleClear()}>
          {"Clear Response"}
        </Button>
      </div>
    </div>
  );
};
