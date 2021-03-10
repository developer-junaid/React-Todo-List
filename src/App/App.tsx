import React, { useState } from "react";
import Title from "../components/Title/Title";
import Form from "../components/Form/Form";
import TodoList from "../components/TodoList/TodoList";
import classes from "./app.module.css";

interface TodosType {
  title: string;
  completed: boolean;
}

function App() {
  let [todos, setTodos] = useState<TodosType[]>([
    { title: "first todo", completed: true },
    { title: "second todo", completed: false },
    { title: "third todo", completed: true },
  ]);

  // Add Todo
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // Remove Todo
  const removeTodo = (todo) => {
    const newTodos = todos.filter((item) => item !== todo);
    // console.log(newTodos);
    setTodos(newTodos);
  };

  // ChangeClass
  const changeClass = (todo, value) => {
    console.log("change to", value);
    const newTodos = todos.map((item) => {
      if (item === todo) {
        return { ...item, completed: value };
      } else {
        return item;
      }
    });

    setTodos(newTodos);
  };

  return (
    <div className={classes.container}>
      <Title value="Junaid's Todo List" />
      <Form todos={todos} addTodo={addTodo} />
      <TodoList
        todos={todos}
        changeClass={changeClass}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
