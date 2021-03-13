import React, { useState } from "react";
import classes from "./form.module.css";
import FormFilter from "../FormFilter/FormFilter";
import FormInput from "../FormInput/FormInput";
import { FormPropsType } from "../../types/types";

const Form: React.FC<FormPropsType> = ({ addTodo, applyFilter }) => {
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
      <FormFilter applyFilter={applyFilter} />
    </form>
  );
};

export default Form;
