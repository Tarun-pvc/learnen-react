// TaskItems.jsx
import React from "react";
import dustBin from "../assets/dustbin.png";
function TaskItems(props) {
  return (
    <div className="task-item">
      <span>{props.item.task}</span>
      <button className="delete-button" onClick={() => props.onDelete(props.item.id)}>
       <img src={dustBin}  className="md-todo-dustbin"></img>
      </button>
    </div>
  );
}

export default TaskItems;
