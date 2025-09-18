import { useState } from "react";
import { createContext } from "react";
import {DashBoard} from '../Pages/Dashboard';
import { Login } from "../Pages/Login";


// createContext Return Fun Component so Must variable name is UpperCase !!!
export const UserContext = createContext();

export const UserContextProvider = () => {
  const [login, setIsLogin] = useState(false);
  const [data, setData] = useState("");

  const handleLogin = (data) => {
    setData(data);
  };

  const handleLogout = () => {
    setData(null);
  };

  return (
    <UserContext.Provider value={{data,setIsLogin,setData,handleLogout}}>
      {data ? <DashBoard /> : <Login />}
    </UserContext.Provider>
  );
};
