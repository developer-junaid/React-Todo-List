import React, { useState } from "react";
import classes from "./form.module.css";
import FormFilter from "../FormFilter/FormFilter";
import FormButton from "../FormButton/FormButton";
import FormInput from "../FormInput/FormInput";

interface todosType {
  todos: {
    title: string;
  }[];

  setTodos: Array<{
    key: string;
    value: string;
  }>;
  ([{ key, value }]);
}

const Form: React.FC<[todosType]> = ({ todos, addTodo }) => {
  let [input, setInput] = useState({ title: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(input); // Add Todo
    setInput({ title: "" }); // Clear input
  };

  return (
    <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
      <FormInput input={input["title"]} setInput={setInput} />
      <FormButton />
      <FormFilter />
    </form>
  );
};

export default Form;
