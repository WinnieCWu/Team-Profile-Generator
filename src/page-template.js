const Manager = require("../lib/Manager");

//create manager summary
const generateManager=  (Manager) => {
    if (!Manager) {
        return '';
    }
    return `
    <section class="my-3" id="about">
        <div class="flex-row justify-space-between centered text-dark bg-primary p-2 display-inline-block"> About My Team Members 
            <div class ="card col-12">
                <h2 class ="employee-name-role">Employee Data</h2>
                <p>${Manager}</p>
            </div>
        </div>
    </section>
    `;
};

//create employee summary
const generateEmployees = (Engineer, Intern) => {
    if (!Engineer || !Intern) {
        return '';
    }
    return `
    <section class="my-3" id="about">
        <div class="flex-row justify-space-between centered text-dark bg-primary p-2 display-inline-block"> About My Team Members 
            <div class ="card col-12">
                <h2 class ="employee-name-role">Employee Data</h2>
                <p>${Engineer}</p>
                <p>${Intern}</p>
            </div>
        </div>
    </section>
    `;
};