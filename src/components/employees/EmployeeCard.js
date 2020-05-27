import React from "react";

const EmployeesCards = (prop) => {
    return <>
        <div>
            <h3>Name: { prop.employee.name }</h3>
            <h5>Postion: { prop.employee.position }</h5>
        </div>
    </>
}

export default EmployeesCards