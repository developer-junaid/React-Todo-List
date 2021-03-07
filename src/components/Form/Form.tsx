import React from "react";
import classes from "./form.module.css";

const Form = () => {
  return (
    <form>
      <input type="text" className="todo-input" />
      <button className="todo-btn" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>

      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
