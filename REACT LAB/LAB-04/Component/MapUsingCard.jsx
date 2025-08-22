import React from "react";

function MapUsingCard() {
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
      <h1 className="text-center mb-5">MapUsing Card</h1>
      <div className="container">
        <div className="row gap-3">
          {faculty.map((data) => {
            return (
              <div className="col card border-2 g-3">
                <img
                  src="https://th.bing.com/th/id/OIP.j4KdqaXpnhbN94WzVyHUhAHaE8?w=251&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
                  class="card-img-top h-auto p-2"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">{data.name}</h5>
                  <p class="card-text">{data.department}</p>
                  <a href="#" class="btn btn-primary">
                    {data.facultyId}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <hr />
      <hr />
    </>
  );
}

export default MapUsingCard;
