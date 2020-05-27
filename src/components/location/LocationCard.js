import React from "react";

const LocationCard = (prop) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>
                    Location: <span className="card-petname">{prop.location.name}</span>
                </h3>
                <p>{prop.location.adress}</p>
            </div>
        </div>
    );
};

export default LocationCard