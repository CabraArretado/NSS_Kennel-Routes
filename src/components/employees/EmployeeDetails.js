import React, { useState, useEffect } from "react";

import GeneralManager from "../../modules/GeneralManager"

const EmployeesDetails = (props) => {

    const [employee, setEmployee] = useState({"name":"", "position":""})

    const getEmployee = (id) => {
        return GeneralManager.getOneEmbed("employees", "animals", id).then(data => setEmployee(data))
    }

    useEffect(() => {
        getEmployee(props.employeeId)
    }, [props.employeeId])

    return <>
    {/* {console.log(props)} */}
        <div>
            <h3>Name: { employee.name }</h3>
            <h5>Postion: { employee.position }</h5>
            { employee.animals && <div>
                <h4>Animals incare:</h4>
                { employee.animals.map((e) => {
                    return <li key={e.id} >{e.name}</li>
                }) }
            </div>}
            <button type="button" onClick={() => {props.delete(props.employee.id)}}>Fire Employee</button>
        </div>
    </>
}

export default EmployeesDetails