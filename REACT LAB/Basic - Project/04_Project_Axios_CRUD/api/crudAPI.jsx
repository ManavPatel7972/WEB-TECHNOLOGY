import React from 'react'
import axios from 'axios'

const API = 'https://jsonplaceholder.typicode.com';

const api = axios.create({
    baseURL : API,
})

// for get the Data from API
export const getData = ()=>{
    return api.get("/posts");
}

//for delete data from API
export const deleteData = (id)=>{
    console.log(id);
    return api.delete(`/posts/${id}`)
}

//for Post Data on API server;
export const postData = (addData) => {
    return api.post(`/posts/`,addData);
}

//for Update the Data from API;
export const updateData = (id, updatedData) => {
  return api.put(`/posts/${id}`, updatedData);
};