import React from "react";
import {NavLink} from 'react-router-dom'

export const Card = ({ data }) => {
  const { Title, Year, imdbID, Type, Poster } = data;
  // console.log("data From Card ",data);

  return (
    <li className="col-md-4 list-unstyled mt-3">
      <div className="card" style={{width: "18rem"}}>
        <img src={Poster} className="card-img-top img-thumbnail" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center">{Title}</h5>
          <p className="card-text">
            {}
          </p>
          <a href="#" className="btn btn-dark text-center">
            Watch Now
          </a>
        </div>
      </div>
    </li>
  );
};
