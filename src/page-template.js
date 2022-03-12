const Manager = require("../lib/Manager");

//create manager summary
const generateManager = (aboutManager) => {
  if (!aboutManager) {
    return "";
  }
  return `
    <section class="my-3" id="about">
        <div class="flex-row justify-space-between centered text-dark bg-primary p-2 display-inline-block"> About My Team Members 
            <div class ="card col-12">
                <h2 class ="employee-name-role">Employee Data</h2>
                <p>${aboutManager}</p>
                <a href="mailto:{emailAddress}">{emailAddress}</a>
            </div>
        </div>
    </section>
    `;
};

//create engineer summary from 'addEngineer'
const generateEngineer = (addEngineer) => {
  if (!addEngineer) {
    return "";
  }
  return `
    <section class="my-3" id="about">
        <div class="flex-row justify-space-between centered text-dark bg-primary p-2 display-inline-block"> About My Team Members 
            <div class ="card col-12">
                <h2 class ="employee-name-role">Employee Data</h2>
                <p>${addEngineer}</p>
                <a href="http://www.github.com/${github}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
                <a href="mailto:{emailAddress}">{emailAddress}</a>
            </div>
        </div>
    </section>
    `;
};

//create intern summary
//how to access the specific deets within each section, like email
const generateIntern = (addIntern) => {
  if (!addIntern) {
    return "";
  }
  return `
    <section class="my-3" id="about">
        <div class="flex-row justify-space-between centered text-dark bg-primary p-2 display-inline-block"> About My Team Members 
            <div class ="card col-12">
                <h2 class ="employee-name-role">Employee Data</h2>
                <p>${addIntern}</p>
                <p>${employeeId}</p>
                <a href="mailto:{emailAddress}">{emailAddress}</a>
            </div>
        </div>
    </section>
    `;
};

/*add hyperlink of email address, that
             When clicked, default email program opens and addy is populated to TO field*/
/*add hyperlink of GitHub, that
             When user enters username, it'll add to 'www.github.com/[]*/
