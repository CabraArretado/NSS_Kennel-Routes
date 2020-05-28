import React from "react";
import { Link } from "react-router-dom";

const AnimalCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={props.animal.picture} alt="My Dog" className="pictoreDog" />
        </picture>
        <h3>
          Name: <span className="card-petname">{props.animal.name}</span>
        </h3>
        <p>Breed: {props.animal.breed}</p>
      </div>
      <button type="button" onClick={() => { props.delete(props.animal.id) }}>Delete Animal</button>
      <Link to={`/animals/${props.animal.id}`}><button>Details</button></Link>
    </div>
  );
};

export default AnimalCard;