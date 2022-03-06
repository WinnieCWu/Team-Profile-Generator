const Employee = require('./Employee');

class Manager extends Employee {
    constructor (officeNumber) {
        super(officeNumber)
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return this.role = "Manager"
    }
};

module.exports = Manager;
