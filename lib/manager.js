const Employee = require("./employee.js"); 

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, 1, email); 

        this.officeNumber = officeNumber; 
    }

    getOffice() {
        return this.officeNumber;
    }
    
    getRole() {
        return "Manager"
    }; 
}

module.exports = Manager;