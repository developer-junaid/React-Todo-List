import React from "react";
import classes from "./todoList.module.css";
import Todo from "../Todo/Todo";
import { TodoListType } from "../../types/types";

const TodoList: React.FC<[TodoListType]> = ({
  todos,
  changeClass,
  removeTodo,
}) => {
  return (
    <div className={classes.todoContainer}>
      <ul className={classes.todoList}>
        {todos &&
          todos.map((todo, index) => (
            <Todo
              key={index}
              changeClass={changeClass}
              removeTodo={removeTodo}
              todo={todo}
            />
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
