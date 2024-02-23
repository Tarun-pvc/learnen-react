import React, { useState } from "react";
import toDo from "../assets/to-do-list.png";
import add from "../assets/add.png";
import TaskItems from "./TaskItems";

export default function ToDo() {
  const [task, setTask] = useState("");
  const [tasksList, setTasksList] = useState([]);
  function newTaskHandler(event) {
    setTask(event.target.value);
  }

  function submitHandler(event) {
    if (task != "") {
      setTasksList((prevGoals) => {
        const updatedGoals = [...prevGoals];
        updatedGoals.unshift({ task: task, id: Math.random().toString() });
        return updatedGoals;
      });
      setTask("");
    }
  }

  function deleteItem(id1) {
    setTasksList((prevdata) => {
      const updatedGoals = prevdata.filter((data) => data.id !== id1);
      return updatedGoals;
    });
  }
  return (
    <>
      <div className="sd-todo-wrapper">
        <div className="sd-todo-heading">
          <div className="sd-todo-image">
            <img src={toDo} className="sd-todo-icon" />
          </div>
          <p className="sd-todo-heading-p"> To-do list</p>
        </div>
        <div className="sd-todo-input-wrapper1">
          <div className="sd-todo-input-wrapper">
            <input
              placeholder="New Task"
              type="text"
              className="sd-todo-input"
              value={task}
              onChange={newTaskHandler}
            />
            <button onClick={submitHandler} className="sd-todo-btn">
              <img src={add} className="sd-todo-add" alt="Add" />
            </button>
          </div>
        </div>
        <div className="sd-todoListitems">
          {tasksList.map((item) => (
            <TaskItems item={item} onDelete={deleteItem}></TaskItems>
          ))}
        </div>
      </div>
    </>
  );
}
