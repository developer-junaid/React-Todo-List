import React from "react";
import classes from "./todo.module.css";
import { FaTrash, FaCheck } from "react-icons/fa";

interface TodoType {
  title: string;
}

const Todo: React.FC<TodoType> = ({ todo, changeClass, removeTodo }) => {
  return (
    <div className={todo["completed"] ? classes.todoCompleted : classes.todo}>
      <li className={classes.todoItem}>{todo["title"]}</li>
      <button
        className={classes.completeBtn}
        onClick={() => {
          changeClass(todo, !todo["completed"]);
        }}
      >
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
