import React, { useState, useEffect } from "react";

import EmployeeCards from "./EmployeeCard"
import EmployeeManager from "../../modules/EmployeeManager"

const EmployeeList = (props) => {
    let [employees, setEmployees] = useState([]);

    const getEmployees = () => {
        return  EmployeeManager.get().then(employeesAPI => setEmployees(employeesAPI))
    }

    let deleteEmployee = async (id) => {
        await EmployeeManager.delete(id)
        await getEmployees()
    }
    
    useEffect(() => {getEmployees()}, [])
    
    return <div className="container-cards">
            { employees.map(employee => <EmployeeCards key={employee.id} delete={deleteEmployee} employee={ employee } {...props}/>) }
        </div>
}

export default EmployeeList