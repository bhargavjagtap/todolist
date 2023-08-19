import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './newToDoForm.css'

export const NewTodoForm = ({createTodo}) => {

  const [userInput, setUserInput] = useState({task:""});
  const handleChange = (event) => {
    console.log("evt", event.target.value);
    setUserInput({ [event.target.name]: event.target.value });
  };

  const handleSubmit = (evt) => {
    console.log("evt", evt);
    evt.preventDefault();
    const newTodo = { id: uuidv4(), task: userInput.task, completed: false };
    // console.log(
    //   "check",
    //   todoList.some((item) => item.task === newTodo.task)
    // );
    // if (todoList.some((item) => item.task === newTodo.task)) {
    //   toast("Task already exists");
    //   return;
    // } else {
      createTodo(newTodo);
      setUserInput({ task: "" });
      // toast("New task added!");
    // }
  };

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <label htmlFor="task">New todo</label>
      <input
        value={userInput.task}
        onChange={handleChange}
        id="task"
        type="text"
        name="task"
        placeholder="New Todo"
      />
      <button>Add Todo</button>
      {/* <ToastContainer /> */}
    </form>
  )
}

export default NewTodoForm