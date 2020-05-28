import React, { useState, useEffect } from "react";

import OwnerManager from "../../modules/OwnerManager.js"
import OwnerCard from "./OwnerCard"

const OwnerList = () => {

    const [owners, setOwners] = useState([])

    const getOwners = () => OwnerManager.getAll().then(ownersAPI => setOwners(ownersAPI))

    const deleteOwner = async (id) => {
        await OwnerManager.delete(id)
        await getOwners()
    }
    

    useEffect(() => {getOwners()}, [])

    return <div>
        {owners.map(owner => <OwnerCard delete={deleteOwner} key={owner.id} owners={owner}/>)}
    </div>
}

export default OwnerList