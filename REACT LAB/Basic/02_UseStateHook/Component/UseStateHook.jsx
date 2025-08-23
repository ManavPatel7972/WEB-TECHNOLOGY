import React from "react";
import { useState } from "react";
 

function UseStateHook() {

    const [count, setCount] = useState(0);

  return (
    <>
      <div className="container d-flex flex-column mt-5 justify-content-center align-items-center align-middle ">
        <h2>{count}</h2>
        <button className="bg-primary border-0 rounded-3" onClick={()=>{setCount(count + 1)}}>Increment</button>
      </div>
    </>
  );
}

export default UseStateHook;
