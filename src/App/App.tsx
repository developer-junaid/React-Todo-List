import React, { useState } from "react";
import Title from "../components/Title/Title";
import Form from "../components/Form/Form";
import TodoList from "../components/TodoList/TodoList";
import classes from "./app.module.css";

interface TodosType {
  title: string;
}

function App() {
  let [todos, setTodos] = useState<TodosType[]>([
    { title: "first todo" },
    { title: "second todo" },
    { title: "third todo" },
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

  return (
    <div className={classes.container}>
      <Title value="Junaid's Todo List" />
      <Form todos={todos} addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
