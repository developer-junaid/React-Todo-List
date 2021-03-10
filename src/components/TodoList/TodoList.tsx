import React from "react";
import classes from "./todoList.module.css";
import Todo from "../Todo/Todo";

interface TodosType {
  todos: {
    title: string;
  }[];

  setTodos: Array<{
    key: string;
    value: string;
  }>;
  ([{ key, value }]);
}

const TodoList: React.FC<[TodosType]> = ({ todos, setTodos }) => {
  return (
    <div className={classes.todoContainer}>
      <ul className={classes.todoList}>
        {todos &&
          todos.map((todo, index) => (
            <Todo key={index} title={todo["title"]} />
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
