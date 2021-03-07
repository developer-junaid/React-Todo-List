import React from "react";
import classes from "./todoList.module.css";
import Todo from "../Todo/Todo";

const TodoList = () => {
  return (
    <div className={classes.todoContainer}>
      <ul className={classes.todoList}>
        <Todo />
        <Todo />
      </ul>
    </div>
  );
};

export default TodoList;
