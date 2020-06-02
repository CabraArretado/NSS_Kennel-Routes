import React, { useState, useEffect } from 'react';

import AnimalManager from '../../modules/AnimalManager';
import EmployeeManager from '../../modules/EmployeeManager';

const AnimalForm = props => {
    const [animal, setAnimal] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [employees, setEmployees] = useState([]);

    const handleFieldChange = evt => {
        const stateToChange = { ...animal };
        stateToChange[evt.target.id] = evt.target.value;
        setAnimal(stateToChange);
    };

    const getEmployees = () => {
        return EmployeeManager.getAll().then(data => setEmployees(data))
    }

    useEffect(() => {getEmployees()}, [])

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    const constructNewAnimal = evt => {
        evt.preventDefault();
        if (!animal.name || !animal.breed || !animal.employeeId) {
            window.alert("Please input an animal name and breed");
        } else {
            setIsLoading(true);
            // Create the animal and redirect user to animal list
            AnimalManager.post(animal).then(() => props.history.push("/animals"));
        }
    };

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="name"
                            placeholder="Animal name"
                        />
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="breed"
                            placeholder="Breed"
                        />
                        <label htmlFor="breed">Breed</label>
                    </div>
                    <div>
                        <select id="employeeId" onChange={handleFieldChange}>
                        <option>Select carer</option>
                            {employees.map(e => <option key={e.id} value={e.id}>{e.name}</option>)}
                        </select>
                    </div>
                    <div className="alignRight">
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={constructNewAnimal}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
};

export default AnimalForm