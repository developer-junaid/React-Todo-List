import React from "react";
import classes from "./todoList.module.css";
import Todo from "../Todo/Todo";

const TodoList = () => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        <Todo />
        <Todo />
      </ul>
    </div>
  );
};

export default TodoList;
