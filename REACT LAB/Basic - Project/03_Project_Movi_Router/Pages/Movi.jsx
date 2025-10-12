import React from "react";
import { useLoaderData } from "react-router-dom";
import { Card } from "../Layout/Ui/Card";

export const Movi = () => {
  const data = useLoaderData();

  return (
    <>
      <div className="container">
        <div className="row mt-4">
          {data.Search.map((currMovi, index) => {
            return <Card key={index} data={currMovi} />;
            })
          }
        </div>
      </div>
    </>
  );
};
