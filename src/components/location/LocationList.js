import React, { useState, useEffect } from "react";

import LocationCard from "./LocationCard"
import LocationManager from "../../modules/LocationManager"

const LocationList = (props) => {
    const [locations, setLocations] = useState([])

    const getLocation = () => LocationManager.getAll().then(locationAPI => setLocations(locationAPI))

    useEffect(() => { getLocation() }, [])

    const deleteLocation = async (id) => {
        await LocationManager.delete(id)
        await getLocation()
    }

    return <>
        <section className="section-content">
            <button type="button" className="btn" onClick={() => { props.history.push("/locations/new") }}>New Location</button>
        </section>
        <div>
            {locations.map(e => <LocationCard key={e.id} location={e} delete={deleteLocation} />)}
        </div>
    </>
}

export default LocationList
