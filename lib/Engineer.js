const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (gitHub) {
        super(gitHub);
        this.gitHub = gitHub;
    }

    getGithub() {
        return this.gitHub;
    }

    getRole() {
        return this.role = "Engineer"
    }
};

module.exports = Engineer;