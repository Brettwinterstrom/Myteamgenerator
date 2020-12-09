// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const employee = require("./Employee");

class Engineer extends Employee {
    constructor() {
        super(name, id, email);

    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;