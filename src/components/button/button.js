import React from "react";
import "./stylee.scss";

const Button = ({ onClick, name, disabled, style }) => {
  return (
    <div>
      <button
        style={style}
        className="btn btn--orange btn--animated"
        onClick={onClick}
        disabled={disabled}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
