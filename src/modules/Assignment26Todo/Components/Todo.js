import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { List, ListItem, makeStyles, Typography } from "@material-ui/core";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { initialData } from "./initialData";

const styles = makeStyles({
  toDoRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "4px auto",
    color: "#fff",
    background:
      "linear-gradient(90deg,rgba(255, 12, 241, 1) 0%,rgba(250, 0, 135, 1) 100%)",
    padding: "16px",
    borderRadius: "5px",
    width: "90%",

    "&:nth-child(2n)": {
      background:
        "linear-gradient(90deg,rgba(93, 12, 255, 1) 0%,rgba(155, 0, 250, 1) 100%)",
    },
    "&:nth-child(2n+1)": {
      background:
        "linear-gradient( 90deg,rgba(20, 159, 255, 1) 0%,rgba(17, 122, 255, 1) 100%)",
    },
  },
  toDoRowComplete: {
    textDecoration: "line-through",
    opacity: "0.4",
  },
  icons: {
    display: "flex",
    alignItems: "center",
    fontSize: "24px",
    cursor: "pointer",
    color: "#fff",
  },
  delete: {
    marginRight: "5px",
  },
  list: {
    minHeight: "300px",
    width: "278px",
    border: "1px solid #ba82ee",
    padding: "16px",
    borderRadius: "30px",
  },
  todoLists: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  heading: {
    color: "white",
    fontWeight: "900",
    margin: "20px 40px",
  },
  listItem: {
    padding: "5px 0px",
  },
});

const Todo = ({ todos, removeTodo, updateTodo }) => {
  const classes = styles();
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  const [initialState, setInitialState] = useState(initialData);
  console.log(initialData);

  localStorage.setItem("workInProgess", JSON.stringify([]));
  localStorage.setItem("completed", JSON.stringify([]));
  var workInProgess = JSON.parse(localStorage.getItem("workInProgess"));
  var completed = JSON.parse(localStorage.getItem("completed"));
  localStorage.setItem("initialData", JSON.stringify(initialData));

  useEffect(() => {
    workInProgess = JSON.parse(localStorage.getItem("workInProgess"));
  }, [localStorage.getItem("workInProgess")]);

  useEffect(() => {
    completed = JSON.parse(localStorage.getItem("completed"));
  }, [localStorage.getItem("completed")]);

  useEffect(() => {
    const initialVal = JSON.parse(localStorage.getItem("initialData"));
    initialVal.todos = todos;
    localStorage.setItem("initialData", JSON.stringify(initialVal));
  }, [localStorage.getItem("tasks")]);

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.draggableId === source.draggableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = initialData.columns[source.droppableId];
    const finish = initialData.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      console.log(newTaskIds);
      const one = newTaskIds.filter((val) => val !== draggableId);
      console.log(one);
      one.splice(destination.index, 0, draggableId);

      console.log(
        one,
        one.splice(destination.index, 0),
        draggableId,
        source.index,
        destination.index
      );

      const newColumn = {
        ...start,
        taskIds: one,
      };

      console.log([`column-${newColumn.id}`]);

      const newInitialData = {
        ...initialState,
        columns: {
          ...initialState.columns,
          [`column-${newColumn.id}`]: newColumn,
        },
      };
      console.log({ newInitialData });

      setInitialState(JSON.stringify(newInitialData));
      localStorage.setItem("initialData", JSON.stringify(newInitialData));
    } else {
      //Moving from one list to another
      const startTaskIds = Array.from(start.taskIds);
      startTaskIds.splice(source.index, 1);
      const newStart = {
        ...start,
        taskIds: startTaskIds,
      };

      const finishTaskIds = Array.from(finish.taskIds);
      finishTaskIds.splice(destination.index, 0, draggableId);

      const newFinish = {
        ...finish,
        taskIds: finishTaskIds,
      };
      const newState = {
        ...initialData,
        columns: {
          ...initialData.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
      };
      console.log({
        startTaskIds,
        newStart,
        draggableId,
        finishTaskIds,
        newFinish,
        newStart,
      });
      console.log(newState);
      setInitialState(JSON.stringify(newState));
      localStorage.setItem("initialData", JSON.stringify(newState));
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={classes.todoLists}>
        <div className={classes.list}>
          <Typography className={classes.heading}>
            {"Work To Be Done"}
          </Typography>
          <Droppable droppableId={"column-1"}>
            {(provided, snapshot) => (
              <List
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
                innerRef={provided.innerRef}
              >
                {todos.map((todo, index) => (
                  <Draggable draggableId={todo.id.toString()} index={index}>
                    {(provided, snapshot) => (
                      <ListItem
                        key={index}
                        className={classes.listItem}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        innerRef={provided.innerRef}
                        isDragging={snapshot.isDragging}
                      >
                        <div className={classes.toDoRow} key={index}>
                          <div key={todo.id}>{todo.text}</div>
                          <div className={classes.icons}>
                            <DeleteIcon
                              onClick={() => removeTodo(todo.id)}
                              className={classes.delete}
                            />
                            <EditIcon
                              onClick={() =>
                                setEdit({ id: todo.id, value: todo.text })
                              }
                            />
                          </div>
                        </div>
                      </ListItem>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </List>
            )}
          </Droppable>
        </div>
        <div className={classes.list}>
          <Typography className={classes.heading}>
            {"Work In Progress"}
          </Typography>
          <Droppable droppableId={"column-2"}>
            {(provided, snapshot) => (
              <List
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
                innerRef={provided.innerRef}
              >
                {workInProgess.map((work, index) => (
                  <Draggable draggableId={work.id.toString()} index={index}>
                    {(provided, snapshot) => (
                      <ListItem
                        key={index}
                        className={classes.listItem}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        innerRef={provided.innerRef}
                        isDragging={snapshot.isDragging}
                      >
                        <div className={classes.toDoRow} key={index}>
                          <div key={work.id}>{work.text}</div>
                          <div className={classes.icons}></div>
                        </div>
                      </ListItem>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </List>
            )}
          </Droppable>
        </div>
        <div className={classes.list}>
          <Typography className={classes.heading}>{"Completed"}</Typography>
          <Droppable droppableId={"column-3"}>
            {(provided, snapshot) => (
              <List
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
                innerRef={provided.innerRef}
              >
                {completed.map((completed, index) => (
                  <Draggable
                    draggableId={completed.id.toString()}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <ListItem
                        key={index}
                        className={classes.listItem}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        innerRef={provided.innerRef}
                        isDragging={snapshot.isDragging}
                      >
                        <div className={classes.toDoRow} key={index}>
                          <div key={completed.id}>{completed.text}</div>
                          <div className={classes.icons}></div>
                        </div>
                      </ListItem>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </List>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
};

export default Todo;
