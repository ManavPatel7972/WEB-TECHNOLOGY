import React from "react";

const MapUsingObj = () => {
  const myObjArr = [
    { id: 1, name: "Another1", roll: 101 },
    { id: 2, name: "Another2", roll: 102 },
    { id: 3, name: "Another3", roll: 103 },
    { id: 4, name: "Another4", roll: 104 },
    { id: 5, name: "Another5", roll: 105 },
  ];

  return (
    <>  
        <h1 className="text-center">MapUsing Object</h1>
        <div>
            <ul>
                {
                    myObjArr.map(({id,name,roll})=>{
                        return  <li>id : {id} name : {name} rollNo : {roll} </li>
                    })
                }
            </ul>
        </div>
        <hr />
        <hr />
    </>
  )
  
};

export default MapUsingObj;
