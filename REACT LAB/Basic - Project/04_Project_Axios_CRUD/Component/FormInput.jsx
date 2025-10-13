import React, { useEffect, useState } from "react";
import { postData, updateData } from "../api/crudAPI";

export const FormInput = ({ data, setData, editData, setEditData }) => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  // whenever editData changes - load into form
  useEffect(() => {
    if (editData) {
      setFormData({
        title: editData.title,
        body: editData.body,
      });
    }
    // console.log(editData);
  }, [editData]);

  const handleFormInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prev) => {
      // for only one usestate use and handle all form input Trick...
      return { ...prev, [name]: value };
    });
  };

  const addPostData = async () => {
    const res = await postData(formData);
    // console.log(res);
    // console.log(res.status);

    if (res.status === 201) {
      // res.data beasuse tya male chhe object no data
      setData([...data, res.data]); // spreadData of old data and new data
      console.log("Data successfully Added", res.data);

      //after form data added form all input clear
      setFormData({ title: "", body: "" });
    }
  };

  // update post Data
  const updatePostData = async () => {
    const res = await updateData(editData.id, formData);
    // console.log(res);
    if (res.status === 200) {
      const updatedEditData = data.map((item) =>
        item.id === editData.id ? { ...item, ...formData } : item
      );
      setData(updatedEditData);
      setFormData({ title: "", body: "" });
      setEditData(null); // exit edit mode
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editData) {
      updatePostData();
    } else {
      addPostData();
    }
  };

  return (
    <div className="container mt-5">
      <form
        onSubmit={handleFormSubmit}
        className="bg-dark bg-opacity-75 p-4 rounded-3 shadow-lg mx-auto"
        style={{ maxWidth: "400px" }}
      >
        <div className="row g-3 align-items-center">
          <div className="col-md-5">
            <input
              type="text"
              placeholder="Enter Title"
              id="title"
              name="title"
              className="form-control"
              value={formData.title}
              onChange={handleFormInput}
            />
          </div>
          
          <div className="col-md-5">
            <input
              type="text"
              placeholder="Enter Post"
              id="body"
              name="body"
              className="form-control bg-white"
              value={formData.body}
              onChange={handleFormInput}
            />
          </div>
          <div className="col-md-2 d-flex align-items-end">
            <button className="btn btn-sm btn-primary w-100">
              {editData ? "Edit" : "Add"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
