import React from "react";
import Title from "../components/Title/Title";
import Form from "../components/Form/Form";
import TodoList from "../components/TodoList/TodoList";
import classes from "./app.module.css";

function App() {
  return (
    <div className={classes.container}>
      <Title value="Junaid's Todo List" />
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
