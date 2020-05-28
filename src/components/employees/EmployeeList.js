import React, { useState, useEffect } from "react";

import EmployeeCards from "./EmployeeCard"
import EmployeeManager from "../../modules/EmployeeManager"

const EmployeeList = () => {
    let [employees, setEmployees] = useState([]);

    const getEmployees = () => {
        return  EmployeeManager.getAll().then(employeesAPI => setEmployees(employeesAPI))
    }

    let deleteEmployee = async (id) => {
        await EmployeeManager.delete(id)
        await getEmployees()
    }
    
    useEffect(() => {getEmployees()}, [])
    
    return <div className="container-cards">
            { employees.map(employee => <EmployeeCards key={employee.id} delete={deleteEmployee} employee={ employee } />) }
        </div>
}

export default EmployeeList