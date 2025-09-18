import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const StudentList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatedData, setUpdateData] = useState({});
  const navigate = useNavigate();

  const getStudent = () => {
    setLoading(true);
    fetch(
      "https://68b58f80e5dc090291af7138.mockapi.io/api/img/poster/name/imdb/Student"
    )
      .then((res) => res.json())
      .then((res) => setData(res));
    setLoading(false);
  };

  useEffect(() => {
    getStudent();
  }, []);

  const handleDelete = (id) => {
    fetch(
      "https://68b58f80e5dc090291af7138.mockapi.io/api/img/poster/name/imdb/Student" +
        "/" +
        id,
      {
        method: "DELETE",
      }
    ).then((res) => getStudent());
  };

  const handleEdit = (id) => {
    fetch(
      "https://68b58f80e5dc090291af7138.mockapi.io/api/img/poster/name/imdb/Student" +
        "/" +
        id
    )
      .then((res) => res.json())
      .then((res) => {
        setUpdateData(res);
        console.log("dat----------" + updatedData);
      });
  };

  return !loading ? (
    <div className="text-center container px-5">
      <h2 className="text-center mt-4 text-decoration-underline">Student List</h2>
      <Link to="/add" >
        <button className="btn btn-primary mt-5 mb-5">
          Add
        </button>
      </Link>
      <table className="table table-hover">
        <tr className="">
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th className="">Action</th>
        </tr>
        <tbody>
          {data.map((data) => {
            return (
              <tr key={data.id}>
                <th>{data.id}</th>
                <th>{data.name}</th>
                <th>{data.Email}</th>
                <th>
                  <Link to={`/add/${data.id}`}>
                  <button
                    className="btn btn-dark me-3"
                    onClick={() => {
                      handleEdit(data.id);
                    }}
                  >
                    Edit
                  </button>
                  </Link>
                  
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(data.id);
                    }}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ) : (
    <h1 className="text-center">Loading...</h1>
  );
};
