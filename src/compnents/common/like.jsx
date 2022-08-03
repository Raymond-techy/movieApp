import React, { Component } from "react";

const Like = (props) => {
  let classes = "fa fa-heart";
  if (props.liked !== true) classes += "-o";
  return (
    <i
      style={{ cursor: "pointer" }}
      onClick={props.onClick}
      className={classes}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
