import React from "react";

const EmployeesCards = (props) => {
    return <>
        <div>
            <h3>Name: { props.employee.name }</h3>
            <h5>Postion: { props.employee.position }</h5>
            <button type="button" onClick={() => {props.delete(props.employee.id)}}>Fire Employee</button>
        </div>
    </>
}

export default EmployeesCards