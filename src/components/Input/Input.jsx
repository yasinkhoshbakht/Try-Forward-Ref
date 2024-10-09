import React, { forwardRef } from "react";
import "./Input.css";

let Input = forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      type="text"
      className="input-style"
      placeholder="Search..."
    />
  );
});

export default Input;
