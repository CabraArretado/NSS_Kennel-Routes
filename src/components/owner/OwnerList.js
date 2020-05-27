import React, { useState, useEffect } from "react";

import OwnerManager from "../../modules/OwnerManager.js"
import OwnerCard from "./OwnerCard"

const OwnerList = () => {

    const [owners, setOwners] = useState([])

    const getOwners = () => OwnerManager.getAll().then(ownersAPI => setOwners(ownersAPI))

    useEffect(() => {getOwners()}, [])

    return <div>
        {owners.map(owner => <OwnerCard key={owner.id} owners={owner}/>)}
    </div>
}

export default OwnerList