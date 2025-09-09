import React, { useState } from "react";

export const Todo = () => {
  const [inputVal, setInputVal] = useState("");
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);

    if (!inputVal) {
      return;
    }

    if (task.includes(inputVal)) {
      setInputVal("");
      return;
    }

    setTask((prev) => [...prev, inputVal]);

    setInputVal("");
    console.log(task);
  };

  setInterval(() => {
    const date = new Date();
    const formateDate = date.toLocaleDateString();

    const time = new Date();
    const formateTime = time.toLocaleTimeString();
    setDateTime(`${formateDate} - ${formateTime}`)
  }, 1000);

  return (
    <>
      <div className=" text-center mt-5 fs-3 fw-bolder border border-2 border-black p-2 rounded-2 text-primary border-dark-subtle">
        Todo List
      </div>

      <section className="mt-4 text-center">
        <h5 className="text-center">
          {dateTime}
        </h5>
      </section>

      <div className="mt-5">
        <form onSubmit={handleSubmit} className="d-flex">
          <input
            type="text"
            placeholder="Enter Item"
            className="border-0 rounded-2 p-1 rounded-end-0"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button className="btn btn-primary p-1 border border-0 rounded-2 rounded-start-0">
            Add Task
          </button>
        </form>

        <section className="mt-5">
          <ul className="list-unstyled">
            {task.map((data, index) => {
              return (
                <>
                  <li key={index} className="d-flex">
                    <span>{data}</span>
                  </li>
                  <button className="btn btn-primary "></button>
                </>
              );
            })}
          </ul>
        </section>
      </div>
    </>
  );
};
