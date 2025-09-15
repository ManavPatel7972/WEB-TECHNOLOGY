import React, { useState } from "react";

export const InputSpreadDemo = () => {
  const [student, setStudent] = useState({
    name: "",
    roll: "",
    password: "",
    semester: "",
    batchNum: "",
  });

  const [stuList, setStuList] = useState([]);

  const handelOnchange = (e) => {
    const { id, value } = e.target;
    setStudent((pre) => ({ ...pre, [id]: value }));
  };

  const handleAdd = () => {
    setStuList([...stuList, { ...student }]);
    setStudent({
      name: "",
      roll: "",
      password: "",
      semester: "",
      batchNum: "",
    });
  };

  const handleDelete = (idx) => {
    const deleted = stuList.filter((stu, index) => {
      return idx !== index;
    });
    setStuList(deleted);
  };

  const handleUpdate = (idx) => {
    
  };

  return (
    <>
      <div className="text-center mt-5">
        <input
          type="text"
          id="name"
          placeholder="Enter name"
          value={student.name}
          onChange={handelOnchange}
        />
        <br />
        <input
          type="text"
          id="roll"
          placeholder="Enter roll"
          value={student.roll}
          onChange={handelOnchange}
        />
        <br />
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          value={student.password}
          onChange={handelOnchange}
        />
        <br />
        <input
          type="number"
          id="semester"
          placeholder="Enter Semester"
          max={8}
          min={1}
          value={student.semester}
          onChange={handelOnchange}
        />
        <br />
        <input
          type="number"
          id="batchNum"
          placeholder="Enter Batch number"
          value={student.batchNum}
          onChange={handelOnchange}
        />
        <br />
        <button onClick={handleAdd}>Add</button>
      </div>

      <div className="text-center">
        <table className="text-center border-2">
          <thead>
            <tr>
              <th>name</th>
              <th>Roll</th>
              <th>password</th>
              <th>semester</th>
              <th>batchNum</th>
            </tr>
          </thead>

          <tbody>
            {stuList.map((stu, index) => {
              return (
                <tr key={index}>
                  <td>{stu.name}</td>
                  <td>{stu.roll}</td>
                  <td>{stu.password}</td>
                  <td>{stu.semester}</td>
                  <td>{stu.batchNum}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleDelete(index);
                      }}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleUpdate(index);
                      }}
                      className="btn btn-success btn-sm"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
