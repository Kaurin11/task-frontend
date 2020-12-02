import React from "react";

const ButtonRegist = ({ onClick, name }) => {
  return (
    <div className="btn btn-registration  btn--animated u-margin-bottom-small">
      <div onClick={onClick}>{name}</div>
    </div>
  );
};

export default ButtonRegist;
