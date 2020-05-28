import React from "react";
import { Link } from "react-router-dom";

const LocationCard = (props) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>
                    Location: <span className="card-petname">{props.location.name}</span>
                </h3>
                <p>{props.location.adress}</p>
            </div>
            <button type="button" onClick={() => {props.delete(props.location.id)}}>Close branch</button>
            <Link to={`/locations/${props.location.id}`}><button type="button">Details</button></Link>

        </div>
    );
};

export default LocationCard