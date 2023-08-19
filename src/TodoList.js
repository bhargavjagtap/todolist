import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo'
import './TodoList.css'
import NewTodoForm from './NewTodoForm';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: uuidv4(), task: "task 1", completed: false },
    { id: uuidv4(), task: "task 2", completed: true }
  ])

  const create = (newTodo) => {
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };

  const remove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const update = (id, updtedTask) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updtedTask };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };


  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const todoList = todos.map((item) => (
    <Todo
      toggleComplete={toggleComplete}
      update={update}
      remove={remove}
      key={item.id}
      item={item}
    />
  ))
  
  return (
    <div className="TodoList">
      <h1>
        Todo List <span>A simple React Todo List App</span>
      </h1>
      <ul>{todoList}</ul>
      <NewTodoForm createTodo={create} todoList={todos} />
    </div>
  )
}

export default TodoList