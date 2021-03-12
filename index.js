const employee = {
    name:"Sam",
    streetAddress:"11 Broadway"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = Object.assign({},employee)
    newEmployee[key] = value  
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]= "Sam" 
    employee[key]= "12 Broadway"
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = Object.assign({},employee)
    delete newEmployee[key]
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}