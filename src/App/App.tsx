import React, { useState } from "react";
import Title from "../components/Title/Title";
import Form from "../components/Form/Form";
import TodoList from "../components/TodoList/TodoList";
import classes from "./app.module.css";

function App() {
  let [todos, setTodos] = useState<
    Array<{
      key: string;
      value: string;
    }>
  >([
    { title: "first todo" },
    { title: "second todo" },
    { title: "third todo" },
  ]);

  // Add Todo
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
    console.log("added todo !", todos);
  };

  return (
    <div className={classes.container}>
      <Title value="Junaid's Todo List" />
      <Form todos={todos} addTodo={addTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
