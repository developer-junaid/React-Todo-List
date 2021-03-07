import React from "react";
import classes from "./formButton.module.css";

const FormButton = () => {
  return (
    <button className="todo-btn" type="submit">
      <i className="fas fa-plus-square"></i>
    </button>
  );
};

export default FormButton;
