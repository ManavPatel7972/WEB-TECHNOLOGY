import React, { useState, useEffect } from "react";

 function LifeCycleDemoFunctional() {
  const [count, setCount] = useState(0);

  // Mounting + Updating
  useEffect(() => {
    console.log("useEffect (runs after render)");

    return () => {
      console.log("Cleanup before re-run or unmount");
    };
  }, [count]); // runs on mount + whenever count changes

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default LifeCycleDemoFunctional;
