import { useState } from "react";
function MapUsingArr() {

const arr = [1,2,3,4,5,6,7,8,10,11,12,34];
 const [count,setCount] = useState(0);

  return (
    <>
    <h1 className="text-center">MapUsing Array</h1>
      <h2>Hello World - {count}</h2>
      <ul className=''>
        {
          arr.map((ele)=>{
           return <li className='text-primary'>Count - {ele}</li>
          })
        }
      </ul>
      <button onClick={()=>{setCount(count + 1)}}>Click Me</button>
      <hr />
      <hr />
    </>
  );
}

export default MapUsingArr;