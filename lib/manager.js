const Employee = require("./employee.js"); 

class Manager extends Employee {
    constructor(officeNumber) {
        super(name, 1, email); 

        this.officeNumber = officeNumber; 
    }

    getRole() {
        return "Manager"
    }; 
}