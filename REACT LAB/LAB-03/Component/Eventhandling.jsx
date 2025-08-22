import React from 'react'

const onclick = ()=>{
  console.log("Click Event Fire");
  
}
const onmouseup = ()=>{
  console.log("Mouse Up Event Fire");
  
}
const onkeydown = ()=>{
  console.log("Key Down Event Fire");
}
const onblur = ()=>{
  console.log("Blur Event Fire");
  
}
const onfocus = ()=>{
  console.log("Focus Event Fire");
  
}
const Eventhandling = () => {
  return (
    <>
    <h1>Click</h1>
    <button onClick={onclick}>Click</button>
    <hr />
    <h1>Mouse Up</h1>
    <button onMouseUp={onmouseup}>Mouse Up</button>
    <hr />
    <h1>Key Down</h1>
    <button onKeyDown={onkeydown}>Key Down</button>
    <hr />
    <h1>Input Blur</h1>
    <input type="text" onBlur={onblur} placeholder='Blur Event'/>
    <hr />
    <h1>Input Focus</h1>
    <input type="text" onFocus={onfocus} onBlur={onblur} placeholder='Focus Event'/>
    <hr />
  
    </>
  )
}

export default Eventhandling