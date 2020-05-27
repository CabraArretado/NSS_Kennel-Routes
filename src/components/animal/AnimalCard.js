import React from "react";

const AnimalCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={props.animal.picture} alt="My Dog" className="pictoreDog" />
        </picture>
        <h3>
          Name: <span className="card-petname">{ props.animal.name }</span>
        </h3>
      <p>Breed: {props.animal.breed}</p>
      </div>
    </div>
  );
};

export default AnimalCard;