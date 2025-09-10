import React from "react";
import { Login } from "./Login";

export const DashBoard = ({ data, setIsLogin }) => {
  return (
    <div className="text-center">
      <h1 className="text-center mt-5 mb-5">DashBoard Page</h1>
      <h1 className="mt-5 text-center"> Welcome To DashBoard {data} </h1>
      <button onClick={() => {
        setIsLogin(false);
        // <Login/>
      }} className="text-center mt-4 btn btn-danger">
        LogOut
      </button>
    </div>
  );
};
