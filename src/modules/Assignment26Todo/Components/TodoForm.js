import { Button, makeStyles } from "@material-ui/core";
import React, { useState, useEffect, useRef } from "react";

const styles = makeStyles({
  todoInput: {
    padding: "14px 32px 14px 16px",
    borderRadius: "4px 0 0 4px",
    border: "2px solid #5d0cff",
    outline: "none",
    width: "320px",
    background: "transparent",
    color: "#fff",
  },
  form: {
    marginBottom: "32px",
  },
  todoButton: {
    padding: "12px",
    borderRadius: "0 4px 4px 0",
    background:
      "linear-gradient(  90deg,  rgba(93, 12, 255, 1) 0%,   rgba(155, 0, 250, 1) 100% )",
    color: "#fff",
  },
  inputEdit: {
    border: "2px solid #149fff",
  },
  buttonEdit: {
    background:
      "linear-gradient( 90deg,  rgba(20, 159, 255, 1) 0%, rgba(17, 122, 255, 1) 100%  )",
  },
});

const TodoForm = (props) => {
  const classes = styles();
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000).toString(),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            className={`${classes.todoInput} ${classes.inputEdit}`}
            ref={inputRef}
          />
          <Button
            onClick={handleSubmit}
            className={`${classes.todoButton} ${classes.buttonEdit}`}
          >
            {"Update"}
          </Button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            name="text"
            className={classes.todoInput}
            ref={inputRef}
          />
          <Button onClick={handleSubmit} className={classes.todoButton}>
            {"Add todo"}
          </Button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
