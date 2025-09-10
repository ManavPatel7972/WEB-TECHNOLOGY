import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function UseStateHook() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [second, setSecond] = useState(0);
  const [running, setRunning] = useState(false);
  

  useEffect(()=>{
   const time =  setTimeout(()=>{
      setSecond(second + 1);
    },100)

    if(running == true){
      clearTimeout(time);
    }
  },[second,running])

  return (
    <>
      <div className="container d-flex flex-column mt-5 justify-content-center align-items-center align-middle ">
        <h2>{count}</h2>
        <button
          className="btn btn-warning mt-2"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
      </div>

      <div className="mt-5 text-center">
        <h1>{isVisible && "Hello Manuuu"}</h1>
        <button
          className="btn btn-primary"
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          {isVisible ? "Hide" : "Show"}
        </button>
      </div>

          <div className="text-center mt-5">
             <button className="btn btn-dark" onClick={()=>{
              setRunning(!running);
             }}>{running ? "Start" : "Stop"}</button>
            <h1>Timer : {second}</h1>
          </div>
    </>
  );
}

export default UseStateHook;
