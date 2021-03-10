import React, { useState } from "react";
import classes from "./form.module.css";
import FormFilter from "../FormFilter/FormFilter";
import FormButton from "../FormButton/FormButton";
import FormInput from "../FormInput/FormInput";
import { TodosFormType } from "../../types/types";

const Form: React.FC<[TodosFormType]> = ({ todos, addTodo, applyFilter }) => {
  let [input, setInput] = useState({ title: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!(input["title"] === "")) {
      addTodo({ ...input, completed: false }); // Add Todo
      setInput({ title: "" }); // Clear input
    } else {
      alert("Please write some text");
    }
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
