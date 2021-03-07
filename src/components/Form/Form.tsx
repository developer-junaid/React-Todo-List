import React from "react";
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

const Form: React.FC<[todosType]> = ({ todos, setTodos }) => {
  return (
    <form className={classes.form}>
      <FormInput />
      <FormButton />
      <FormFilter />
    </form>
  );
};

export default Form;
