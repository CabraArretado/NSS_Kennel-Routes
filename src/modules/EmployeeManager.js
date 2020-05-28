const remoteURL = "http://localhost:5002/employees"

const EmployeesManager = {
    getAll() {return fetch(remoteURL).then(data => data.json())},

    getOne(id) {return fetch(`${remoteURL}/${id}`).then(data => data.json())},

    delete(id) {
        return fetch(`${remoteURL}/${id}`, {
          method: "DELETE",
          headers: { 'Content-Type': 'application/json' }
        }).then(data => data.json())
      }
}

export default EmployeesManager