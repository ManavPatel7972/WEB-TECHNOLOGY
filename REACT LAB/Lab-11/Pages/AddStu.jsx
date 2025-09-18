import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export const AddStu = () => {
  const { id } = useParams();

  const [input, setInput] = useState({
    name: "",
    Email: "",
  });
  const navigate = useNavigate();

  const handleClick = () => {
    //Using Ternary Operator

    !id
      ? fetch(
          "https://68b58f80e5dc090291af7138.mockapi.io/api/img/poster/name/imdb/Student",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(input),
          }
        ).then((res) => {
          navigate("/");
        })
      : fetch(
          "https://68b58f80e5dc090291af7138.mockapi.io/api/img/poster/name/imdb/Student" +
            "/" +
            id,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(input),
          }
        ).then((res) => {
          navigate("/");
        });
  };

  const getParticularData = () => {
    fetch(
      "https://68b58f80e5dc090291af7138.mockapi.io/api/img/poster/name/imdb/Student" +
        "/" +
        id
    )
      .then((res) => res.json())
      .then((res) => setInput(res));
  };

  useEffect(() => {
    getParticularData();
  }, [id]);

  return (
    <div className="text-center d-flex flex-column container mt-5 w-50 gap-3">
      <h1 className="mb-5 text-decoration-underline">Add Student </h1>
      <input
        type="text"
        className="w-75 p-1"
        onChange={(e) => setInput({ ...input, name: e.target.value })}
        placeholder="Enter name"
        value={input.name}
      />
      <input
        type="email"
        className="w-75 p-1"
        onChange={(e) => setInput({ ...input, Email: e.target.value })}
        placeholder="Enter Email"
        value={input.Email}
      />
      <button
        onClick={handleClick}
        className="btn btn-primary mx-start-0 w-25 text-center"
      >
        {id ? "Edit" : "Add"}
      </button>
      <button
        className="btn btn-dark mx-start-0 w-25 text-center"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </div>
  );
};
