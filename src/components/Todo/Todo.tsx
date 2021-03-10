import React from "react";
import classes from "./todo.module.css";
import { FaTrash, FaCheck } from "react-icons/fa";

interface TodoType {
  title: string;
}

const Todo: React.FC<TodoType> = ({ todo, removeTodo }) => {
  return (
    <div className={classes.todo}>
      <li className={classes.todoItem}>{todo["title"]}</li>
      <button className={classes.completeBtn}>
        <span className={classes.faCheck}>
          <FaCheck />
        </span>
      </button>
      <button className={classes.trashBtn} onClick={() => removeTodo(todo)}>
        <span className={classes.faTrash}>
          <FaTrash />
        </span>
      </button>
    </div>
  );
};

export default Todo;
