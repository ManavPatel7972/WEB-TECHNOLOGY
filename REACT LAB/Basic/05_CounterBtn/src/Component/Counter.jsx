import React, { useState } from "react";

export const Counter = () => {
  const max = 20;
  const min = 0;

  const [countIncrement, setCountIncrement] = useState(0);
  const [inputVal,setInputVal] = useState(0);


  const handleIncrement = () => {
    // if (countIncrement + inputVal > max - 1) return;
    setCountIncrement(countIncrement + inputVal)
  };

  const handleDecrement = () => {
    // if (countIncrement + inputVal < min + 1) return;
    setCountIncrement(countIncrement - inputVal);
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card border-1 rounded-3 shadow shadow-lg w-50 p-3">
          <h2 className="p-3 text-center text-capitalize text-primary">
            Use State Challenge
          </h2>
          <div className="mb-3 ms-4 fw-medium">
            Count :
            <span className="fw-medium ms-2 fs-5 text-primary">
              {countIncrement}
            </span>
          </div>
          <div className="ms-4 mb-4 ">
            <span className="fw-medium">
              Step : <input type="number" value={inputVal} onChange={(e)=> setInputVal(Number(e.target.value))}/>
            </span>
          </div>
          <div className="d-flex justify-content-evenly mb-3">
            <button
              onClick={() => handleIncrement()}
              className="btn btn-primary w-25 bg-dark"
              disabled={countIncrement >= 100}
            >
              Increment
            </button>
            <button
              onClick={() => {
                handleDecrement();
              }}
              className="btn btn-primary w-25 bg-dark"
              disabled={countIncrement < 0}
            >
              Decrement
            </button>
            <button onClick={() => {
              setCountIncrement(0);
              setInputVal(0);
            }} className="btn btn-primary w-25 bg-dark">
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
