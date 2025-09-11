import React, { useState } from "react";

export const ScientificCalculator = () => {
  const [exp, setExp] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      setExp(eval(exp));
    } else if (value === "AC") {
      setExp("");
    } else if (value === "<-") {
      setExp(exp.slice(0, -1));
    } else if (value === "sqrt") {
      setExp(Math.sqrt(parseFloat(exp)).toString());
    } else if (value === "square") {
      setExp(Math.pow(parseFloat(exp), 2).toString());
    } else if (value === "sin") {
      setExp(Math.sin((parseFloat(exp) * Math.PI) / 180).toString());
    } else if (value === "cos") {
      setExp(Math.cos((parseFloat(exp) * Math.PI) / 180).toString());
    } else if (value === "tan") {
      setExp(Math.tan((parseFloat(exp) * Math.PI) / 180).toString());
    } else if (value === "log") {
      setExp(Math.log10(parseFloat(exp)).toString());
    } else if (value === "ln") {
      setExp(Math.log(parseFloat(exp)).toString());
    } else if (value === "pi") {
      setExp(exp + Math.PI.toFixed(6));
    } else if (value === "e") {
      setExp(exp + Math.E.toFixed(6));
    } else {
      setExp(exp + value);
    }
  };

  return (
    <>
      <div className="table" style={{ width: "360px", margin: "20px auto" }}>
        <table border="0" cellSpacing="5px">
          <tbody>
            <tr>
              <td colSpan="6">
                <input
                  readOnly
                  type="text"
                  id="mytext"
                  value={exp}
                  style={{
                    width: "100%",
                    fontSize: "20px",
                    textAlign: "right",
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={() => handleClick("AC")}>AC</button>
              </td>
              <td>
                <button onClick={() => handleClick("<-")}>{"<="}</button>
              </td>
              <td>
                <button onClick={() => handleClick("sqrt")}>_/</button>
              </td>
              <td>
                <button onClick={() => handleClick("square")}>x²</button>
              </td>
              <td>
                <button onClick={() => handleClick("%")}>%</button>
              </td>
              <td>
                <button onClick={() => handleClick("/")}>÷</button>
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={() => handleClick("7")}>7</button>
              </td>
              <td>
                <button onClick={() => handleClick("8")}>8</button>
              </td>
              <td>
                <button onClick={() => handleClick("9")}>9</button>
              </td>
              <td>
                <button onClick={() => handleClick("*")}>×</button>
              </td>
              <td>
                <button onClick={() => handleClick("sin")}>sin</button>
              </td>
              <td>
                <button onClick={() => handleClick("cos")}>cos</button>
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={() => handleClick("4")}>4</button>
              </td>
              <td>
                <button onClick={() => handleClick("5")}>5</button>
              </td>
              <td>
                <button onClick={() => handleClick("6")}>6</button>
              </td>
              <td>
                <button onClick={() => handleClick("-")}>-</button>
              </td>
              <td>
                <button onClick={() => handleClick("tan")}>tan</button>
              </td>
              <td>
                <button onClick={() => handleClick("log")}>log</button>
              </td>
            </tr>

            <tr>
              <td>
                <button onClick={() => handleClick("1")}>1</button>
              </td>
              <td>
                <button onClick={() => handleClick("2")}>2</button>
              </td>
              <td>
                <button onClick={() => handleClick("3")}>3</button>
              </td>
              <td>
                <button onClick={() => handleClick("+")}>+</button>
              </td>
              <td>
                <button onClick={() => handleClick("ln")}>ln</button>
              </td>
              <td>
                <button onClick={() => handleClick("pi")}>π</button>
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={() => handleClick("00")}>00</button>
              </td>
              <td>
                <button onClick={() => handleClick("0")}>0</button>
              </td>
              <td>
                <button onClick={() => handleClick(".")}>.</button>
              </td>
              <td colSpan="2">
                <button
                  onClick={() => handleClick("=")}
                  style={{ backgroundColor: "#f97316", width: "100%" }}
                >
                  =
                </button>
              </td>
              <td>
                <button onClick={() => handleClick("e")}>e</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
