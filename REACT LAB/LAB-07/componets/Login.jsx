import React from "react";
import { use } from "react";
import { useState } from "react";

export const Login = ({setIsLogin,setData}) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();
    // console.log("user === " ,user);
    // console.log("pass === ", password);

    if(user == 'manav' && password == '12345' ){
        setIsLogin(true);
        setData(user);
    }
    else{
        setIsLogin(false);
        alert("Please valid Information");
    }
  };

  return (
    <>
      <div className="container d-flex flex-column align-items-center card mt-5 shadow shadow-lg">
        <h1 className="text-center mt-5 mb-5">Login Page</h1>
        <div class="input-group flex-nowrap w-25 mt-5">
          <span class="input-group-text btn btn-primary" id="addon-wrapping">
            UserName
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Enter UserName"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            value={user}
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
        </div>

        <div class="input-group flex-nowrap w-25 mt-5">
          <span class="input-group-text btn btn-primary" id="addon-wrapping">
            Password
          </span>
          <input
            type="password"
            class="form-control"
            placeholder="Enter Password"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div class="input-group flex-nowrap w-25 mt-5">
          <span class="ms-5" id="addon-wrapping"></span>
          <button
            onClick={(e) => {
              handleSubmit(e);
            }}
            className="btn btn-dark ms-5 mb-5"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};
