import React, { useState } from "react";
import toDo from "../assets/to-do-list.png";
import add from "../assets/add.png";
import TaskItems from "./TaskItems";

function ToDo() {
  const [task, setTask] = useState("");
  const [tasksList, setTasksList] = useState([]);
  function newTaskHandler(event) {
    setTask(event.target.value);
  }

  function submitHandler(event) {
    if(task!="")
    {
        setTasksList((prevGoals) => {
            const updatedGoals = [...prevGoals];
            updatedGoals.unshift({ task: task, id: Math.random().toString() });
            return updatedGoals;
          });
        setTask("");
    }
  }

  function deleteItem(id1)
  {
    setTasksList((prevdata) => {
      const updatedGoals = prevdata.filter((data) => data.id !== id1);
      return updatedGoals;
    });
  }
  return (
    <>
      <div className="md-todo-wrapper">
        <div className="md-todo-heading">
          <div className="md-todo-image">
            <img src={toDo} className="md-todo-icon" />
          </div>
          <p className="md-todo-heading-p"> To-do list</p>
        </div>
        <div className="md-todo-input-wrapper1">
          <div className="md-todo-input-wrapper">
            <input
              placeholder="New Task"
              type="text"
              className="md-todo-input"
              value={task}
              onChange={newTaskHandler}
            />
          </div>
          <button onClick={submitHandler} className="md-todo-btn">
            <img src={add} className="md-todo-add" alt="Add" />
          </button>
        </div>
        <div className="md-todoListitems">
        {tasksList.map((item)=><TaskItems item={item} onDelete={deleteItem}></TaskItems>)}
        </div>
        
      </div>
    </>
  );
}

export default ToDo;
