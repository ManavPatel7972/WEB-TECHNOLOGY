import { useContext } from "react";
import { UserContext } from "../Context/UserContextProvider";
import { Login } from "./Login";

export const DashBoard = () => {
  const { data, handleLogout } = useContext(UserContext);
  return (
    <div className="text-center">
      <h1 className="text-center mt-5 mb-5 text-decoration-underline">DashBoard Page</h1>
      <h1 className="mt-5 text-center"> Welcome To DashBoard {data} </h1>
      <button
        onClick={() => {
          handleLogout();
          <Login />;
        }}
        className="text-center mt-4 btn btn-danger"
      >
        LogOut
      </button>
    </div>
  );
};
