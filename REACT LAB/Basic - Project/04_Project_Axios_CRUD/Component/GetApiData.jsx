import React from "react";
import { useState, useEffect } from "react";
import { deleteData, getData } from "../api/crudAPI";
import { Card } from "./Card";
import { FormInput } from "./FormInput";

export const GetApiData = () => {
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState(null); // for Edit data

  // for Get data from API
  const getApiData = async () => {
    try {
      const res = await getData();
      // console.log(res);
      setData(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  // for Delete Data From API
  const handleDelete = async (id) => {
    try {
      console.log("id == ", id);
      const res = await deleteData(id);
      if (res.status === 200) {
        const updatedData = data.filter((cardData) => {
          return cardData.id != id;
        });
        setData(updatedData);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <section className="">
        <FormInput
          data={data}
          setData={setData}
          editData={editData}
          setEditData={setEditData}
        />
      </section>
      <div className="container mt-4">
        <div className="row g-4 p-5">
          {data.map((curr) => (
            <Card
              key={curr.id}
              cardData={curr}
              data={data}
              setData={setData}
              setEditData={setEditData}
            />
          ))}
        </div>
      </div>
    </>
  );
};
