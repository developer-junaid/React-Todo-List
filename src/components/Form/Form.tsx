import React, { useState } from "react";
import classes from "./form.module.css";
import FormFilter from "../FormFilter/FormFilter";
import FormButton from "../FormButton/FormButton";
import FormInput from "../FormInput/FormInput";

interface todosType {
  todos: {
    title: string;
  }[];
}

const Form: React.FC<[todosType]> = ({ todos, addTodo, applyFilter }) => {
  let [input, setInput] = useState({ title: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo({ ...input, completed: false }); // Add Todo
    setInput({ title: "" }); // Clear input
  };

  return (
    <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
      <FormInput input={input["title"]} setInput={setInput} />
      <FormButton />
      <FormFilter applyFilter={applyFilter} />
    </form>
  );
};

export default Form;
