import React, { useContext } from "react";
import { DataContext } from "../page";

function Child1() {
  const context = useContext(DataContext);

  return (
    <div>
      <h1>Child 1 Component</h1>
      <p>Full Name: {context.fullName}</p>
    </div>
  );
}

export default Child1;
