import React from "react";
import axios from "axios";

export const Movi = () => {
  const API =
    "https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1";

  const getApiData = async () => {
    const res =  await axios.get(API);
    console.log(res);
  };

  const handle = ()=>{
    getApiData();
  }

  return <div>
    <button onClick={handle}>click</button>
  </div>;
};
