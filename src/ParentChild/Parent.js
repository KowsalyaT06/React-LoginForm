import React, { useState } from "react";
import Child from "./Child";
function Parent() {
  const [input, setInput] = useState("Red");

  return (
    <div>
      <p>{input}</p>
      <Child changeColor={(inputt) => setInput(inputt)} />
    </div>
  );
}
export default Parent;
