import React from "react";
import { useState , useEffect} from "react";

export const Todo = () => {
  const [search, setSearch] = useState("");
  const [task, setTask] = useState([]);
  const [inputVal, setInputVal] = useState("");
  
  const addTodo = () => {
    if (inputVal) {
      setTask([...task, inputVal]);
    }
    setInputVal("");
  };

  const handleDelete = (idx) => {
    // console.log(idx);
    const updatedTask = task.filter((currTask, index) => {
      return index != idx;
    });
    // console.log(updatedTask);
    setTask(updatedTask);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo();
  };

  const filteredTasks = task.filter((currTask) =>
    currTask.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div class="container">
        <header class="text-center text-light my-4">
          <h1 class="mb-4">Todo List</h1>
          <form class="search">
            <input
              class="form-control m-auto"
              type="text"
              name="search"
              placeholder="search todos"
              onChange={(e)=>setSearch(e.target.value)}
            />
          </form>
        </header>

        <ul class="list-group todos mx-auto text-light delete">
          {filteredTasks.map((currTask, index) => {
            return (
              <li
                key={index}
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>{currTask}</span>
                <i
                  class="far fa-trash-alt delete"
                  onClick={() => {
                    handleDelete(index);
                  }}
                ></i>
              </li>
            );
          })}
        </ul>

        <form class="add text-center my-4">
          <label class="text-light">Add a new todo...</label>
          <input
            class="form-control m-auto"
            type="text"
            name="add"
            placeholder="Add Todo"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <br />
          <div class="text-center">
            <input type="submit" class="btn btn-light" onClick={handleSubmit} />
          </div>
        </form>
      </div>
    </>
  );
};
