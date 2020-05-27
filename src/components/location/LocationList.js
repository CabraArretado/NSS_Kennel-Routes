import React, { useState, useEffect } from "react";

import LocationCard from "./LocationCard"
import LocationManager from "../../modules/LocationManager"

const LocationList = () => {
    const [locations, setLocations] = useState([])
    
    const getLocation = () => LocationManager.getAll().then(locationAPI => setLocations(locationAPI))

    useEffect(()=> {getLocation()}, [])

    return <div>
        { locations.map(location => <LocationCard key={location.id} location={location}/>) }
    </div>
}

export default LocationList
