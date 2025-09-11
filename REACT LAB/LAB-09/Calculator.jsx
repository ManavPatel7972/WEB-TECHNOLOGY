import React, { useState } from 'react'

export const Calculator = () => {

  const [exp, setExp] = useState("");

  const handleClick = (value)=>{

    if(value === '='){
      setExp(eval(exp));
    }
    else if(value === 'AC'){
      setExp("");
    }
    else if(value === '<-'){
      setExp(exp.slice(0,-1));
    }
    else{
      setExp(exp + value);
    }
  }


  return (
    <>
      <div class="table">
      <table border="0" cellspacing="0px">
      <tr>
        <td colspan="4"><input readOnly type="text" id="mytext" value={exp} onChange={(e)=> setExp(e.target.value)}/></td>
      </tr>

      <tr>
        <td><button onClick={()=>{handleClick("AC")}}>AC</button></td>
        <td><button onClick={()=>{handleClick("<-")}}>{"<-"}</button></td>
        <td><button onClick={()=>{handleClick("%")}}>%</button></td>
        <td><button onClick={()=>{handleClick("/")}}>/</button></td>
      </tr>

      <tr>
        <td><button onClick={()=>{handleClick("7")}}>7</button></td>
        <td><button onClick={()=>{handleClick("8")}}>8</button></td>
        <td><button onClick={()=>{handleClick("9")}}>9</button></td>
        <td><button onClick={()=>{handleClick("+")}}>+</button></td>
      </tr>

      <tr>
        <td><button onClick={()=>{handleClick("4")}}>4</button></td>
        <td><button onClick={()=>{handleClick("5")}}>5</button></td>
        <td><button onClick={()=>{handleClick("6")}}>6</button></td>
        <td><button onClick={()=>{handleClick("-")}}>-</button></td>
      </tr>

      <tr>
        <td><button onClick={()=>{handleClick("1")}}>1</button></td>
        <td><button onClick={()=>{handleClick("2")}}>2</button></td>
        <td><button onClick={()=>{handleClick("3")}}>3</button></td>
        <td><button onClick={()=>{handleClick("+")}}>+</button></td>
      </tr>

      <tr>
        <td><button onClick={()=>{handleClick("00")}}>00</button></td>
        <td><button onClick={()=>{handleClick("0")}}>0</button></td>
        <td><button onClick={()=>{handleClick(".")}}>.</button></td>
        <td><button onClick={()=>{handleClick("=")}} style={{backgroundColor:"#f97316"}}>=</button></td>
      </tr>
    </table>
    </div>
    
    </>
  )
}
