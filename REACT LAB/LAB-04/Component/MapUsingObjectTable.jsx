import React from "react";

const MapUsingObjectTable = () => {
  const faculty = [
    {
      name: "Dr. Meera Shah",
      department: "Computer Science",
      facultyId: 101,
    },

    {
      name: "Dr. Arjun Patel",
      department: "Information Technology",
      facultyId: 102,
    },

    {
      name: "Dr. Kavita Desai",
      department: "Electronics",
      facultyId: 103,
    },

    {
      name: "Dr. Rakesh Iyer",
      department: "Mechanical Engineering",
      facultyId: 104,
    },

    {
      name: "Dr. Sneha Joshi",
      department: "Civil Engineering",
      facultyId: 105,
    },
  ];

  return (
    <>
      <h1 className="text-center mb-2">MapUsing ObjectTable</h1>
      <div>
        <table className="table table-success table-striped text-white p-3 mb-2">
          <thead>
            <th>FacultyId</th>
            <th>FacultyName</th>
            <th>Department</th>
          </thead>
          {faculty.map((data) => {
            return (
              <tr>
                <td>{data.facultyId}</td>
                <td>{data.name}</td>
                <td>{data.department}</td>
              </tr>
            );
          })}
        </table>
      </div>
      <hr />
      <hr />
    </>
  );
};

export default MapUsingObjectTable;
