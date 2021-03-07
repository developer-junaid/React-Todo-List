import React from "react";
import classes from "./formFilter.module.css";

const FormFilter = () => {
  return (
    <div className="select">
      <select name="todos" className="filter-todo">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
    </div>
  );
};

export default FormFilter;
