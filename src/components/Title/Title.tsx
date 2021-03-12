import React from "react";
import { TitlePropsType } from "../../types/types";

const Title: React.FC<TitlePropsType> = ({ value, className, style }) => {
  return (
    <p style={style} className={className}>
      {value}
    </p>
  );
};

export default Title;
