import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { makeStyles, Typography } from "@material-ui/core";

const styles = makeStyles({
  heading: {
    margin: "32px 0",
    color: "#fff",
    fontSize: "24px",
  },
});

const TodoList = () => {
  const classes = styles();
  const [todos, setTodos] = useState([]);
  if (localStorage.getItem("tasks") === null) {
    localStorage.setItem("tasks", JSON.stringify([]));
  }

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    localStorage.setItem("tasks", JSON.stringify(newTodos));
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    const updatedArr = [...todos].map((item) =>
      item.id === todoId ? newValue : item
    );
    setTodos(updatedArr);
    localStorage.setItem("tasks", JSON.stringify(updatedArr));
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
    localStorage.setItem("tasks", JSON.stringify(removedArr));
  };

  return (
    <>
      <Typography className={classes.heading}>
        {"What's the Plan for Today?"}
      </Typography>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={JSON.parse(localStorage.getItem("tasks"))}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
};

export default TodoList;
