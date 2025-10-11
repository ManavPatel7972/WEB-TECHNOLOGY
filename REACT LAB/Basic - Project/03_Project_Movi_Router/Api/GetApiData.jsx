import React from "react";

export const getApiData = async ()=>{
    const API = "https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1"
    const res = await fetch(API);
    const data = await res.json();
    console.log(data);
    return data;
}
