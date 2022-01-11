const todos = JSON.parse(localStorage.getItem("tasks")) || [];
const workInProgess = JSON.parse(localStorage.getItem("workInProgess")) || [];
const completed = JSON.parse(localStorage.getItem("completed")) || [];

const initialData = {
  todos: todos,

  columns: {
    "column-1": {
      id: 1,
      title: "Work To be Done",
      taskIds: [...todos].map((val) => {
        return val.id;
      }),
    },

    "column-2": {
      id: 2,
      title: "In progess",
      taskIds: [...workInProgess].map((val) => {
        return val.id;
      }),
    },

    "column-3": {
      id: 3,
      title: "Done",
      taskIds: [...completed].map((val) => {
        return val.id;
      }),
    },
  },
};

localStorage.setItem("initialData", JSON.stringify(initialData));

export { initialData };
