import React from "react";
import classes from "./todo.module.css";
import { FaTrash, FaCheck } from "react-icons/fa";

const Todo = () => {
  return (
    <div className={classes.todo}>
      <li className={classes.todoItem}>Dummy Text</li>
      <button className={classes.completeBtn}>
        <span className={classes.faCheck}>
          <FaCheck />
        </span>
      </button>
      <button className={classes.trashBtn}>
        <span className={classes.faTrash}>
          <FaTrash />
        </span>
      </button>
    </div>
  );
};

export default Todo;
