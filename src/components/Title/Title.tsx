import React from "react";
import { TitlePropsType } from "../../types/types";
import "./title.css";

const Title: React.FC<TitlePropsType> = ({ value, style }) => {
  return (
    <p style={style} className="title">
      {value}
    </p>
  );
};

export default Title;
