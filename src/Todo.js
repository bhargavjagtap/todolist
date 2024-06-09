import React, { useState } from 'react'
import "./Todo.css"

const Todo = ({item, update, remove, toggleComplete}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(item.task)

  const toggleFrom = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = evt => {
    setTask(evt.target.value);
  };

  const handleUpdate = evt => {
    evt.preventDefault();
    update(item.id, task);
    toggleFrom();
  };

  const toggleCompleted = evt => {
    toggleComplete(evt.target.id);
  };

  const handleClick = evt => {
    remove(evt.target.id);
  };
// This is Todo Component
  return (  
    <>
      {isEditing ? (
        <div className="Todo">
          <form className="Todo-edit-form" onSubmit={handleUpdate}>
            <input onChange={handleChange} value={task} type="text" />
            <button>Save</button>
          </form>
        </div>
      ) : (
        <div className="Todo">
          <li
            id={item.id}
            onClick={toggleCompleted}
            className={item.completed ? "Todo-task completed" : "Todo-task"}
          >
            {item.task}
          </li>
          <div className="Todo-buttons" onClick={toggleFrom}>
            <button>
              <i className="fas fa-pen" />
            </button>
            <button onClick={handleClick}>
              <i id={item.id} className="fas fa-trash" />
            </button>
          </div>
        </div>
      )
      }
    </>
  )
}

export default Todo