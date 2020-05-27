import React from "react";

const OwnerCard = (props) => {
  let owner = props.owners
  return (
    <div className="card">
      <div className="card-content">
        <h3>
            { owner.name}
        </h3>
        <p>Age: { owner.age}</p>
      </div>
    </div>
  );
};

export default OwnerCard;