const fs = require('fs');
const inquirer = require('inquirer');

Function Employee (name = '') {
    this.name = name;
    this.id = id;
    this.email = email;
} 

//methods; break down each one like this: 
// Employee.prototype.getName = function(){
//     return ...
// };
// {
//     getName(),
//     getId(), 
//     getEmail(),
//     getRole() //Returns 'Employee'
// }

module.exports = Employee;