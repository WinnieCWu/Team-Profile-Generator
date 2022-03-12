//create manager summary
const generateManager = () => {

  return `
    <section class="my-3" id="about">
        <div class="flex-row justify-space-between centered text-dark bg-primary p-2 display-inline-block"> About My Team Members 
            <div class ="card col-12">
                <h2 class ="employee-name-role">
                Team Manager: ${manager.getName()}<br>
                ${manager.getRole()}<br>
                </h2>
                <h3 class = "employee-additional-info">
                <p> ID: ${manager.getId()}</p>
                <a href="mailto:${manager.getEmail()}"> Email </a>
                <p> Office Number: ${manager.getOfficeNumber()}</p>
                </h3>
            </div>
        </div>
    </section>
    `;
};

//create engineer summary from 'addEngineer'
const generateEngineer = () => {
  return `
    <section class="my-3" id="about">
        <div class="flex-row justify-space-between centered text-dark bg-primary p-2 display-inline-block"> About My Team Members 
            <div class ="card col-12">
                <h2 class ="employee-name-role">
                ${engineer.getName()}<br>
                ${engineer.getRole()}<br>
                </h2>
                <h3 class = "employee-additional-info">
                <p>${engineer.getId()}</p>
                <a href="mailto:${engineer.getEmail()}">Email</a>
                <a href="http://www.github.com/${engineer.getGithub()}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
                </h3>
            </div>
        </div>
    </section>
    `;
};

//create intern summary
const generateIntern = (n) => {
 
  return `
    <section class="my-3" id="about">
        <div class="flex-row justify-space-between centered text-dark bg-primary p-2 display-inline-block"> About My Team Members 
            <div class ="card col-12">
                <h2 class ="employee-name-role">
                ${intern.getName()}<br>
                ${intern.getRole()}<br>
                </h2>
                <h3 class = "employee-additional-info">
                <p>${intern.getId()}</p>
                <a href="mailto:${intern.getEmail()}">Email</a>
                <p> School: ${intern.getSchool()}</p>
                </h3>
            </div>
        </div>
    </section>
    `;
};

module.exports = templateData => {
  // destructure projects and about data from templateData based on their property key names
  const { generateManager, generateEngineer, generateIntern } = templateData;
};