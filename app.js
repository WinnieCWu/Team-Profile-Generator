const inquirer = require("inquirer");
const fs = require("fs");
const { writeFile } = require("./index.js");
const generatePage = require("./src/page-template.js");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employees = [];

const promptManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "teamManagerName",
        message: "What is team manager's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the team manager's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeId",
        message: "What is your employee ID number?",
        validate: (employeeIdInput) => {
          if (employeeIdInput) {
            return true;
          } else {
            console.log("Please enter your employee ID number!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "emailAddress",
        message: "What is your e-mail address?",
        validate: (emailAddressInput) => {
          if (emailAddressInput) {
            return true;
          } else {
            console.log("Please enter your e-mail address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your office space number?",
        validate: (officeNumberInput) => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log("Please enter your office space number!");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const manager = new Manager(
        answers.teamManagerName,
        answers.employeeId,
        answers.emailAddress,
        answers.officeNumber
      );
      employees.push(manager);
      mainMenu();
    });
};

const mainMenu = (employeeData) => {
  if (!employeeData.employees) {
    employeeData.employees = [];
  }

  inquirer
    .prompt([
      {
        type: "list",
        name: "memberChoice",
        message: "What team member would you like to add?",
        choices: ["add Engineer", "add Intern", "Finished building my team"],
      },
    ])
    .then((answers) => {
      console.log(answers);
      if (answers.memberChoice === "add Engineer") {
        addEngineer();
      }
      if (answers.memberChoice === "add Intern") {
        addIntern();
      }
      if (answers.memberChoice === "Finished building my team") {
        goodbyeGreeting();
      }
    });
};

const addEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "employeeName",
        message: "What is your employee's name?",
        validate: (employeeNameInput) => {
          if (employeeNameInput) {
            return true;
          } else {
            console.log("Please enter your employee's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeId",
        message: "What is your employee's ID number?",
        validate: (employeeIdInput) => {
          if (employeeIdInput) {
            return true;
          } else {
            console.log("Please enter your employee's ID number!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "emailAddress",
        message: "What is your employee's e-mail address?",
        validate: (emailAddressInput) => {
          if (emailAddressInput) {
            return true;
          } else {
            console.log("Please enter your employee's e-mail address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Enter your employee's GitHub username",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter your GitHub username!");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      //Create Engineer Object and add to Employee Array
      console.log(answers);
      const engineer = new Engineer(
        answers.employeeName,
        answers.employeeId,
        answers.emailAddress,
        answers.github
      );
      employees.push(engineer);
      mainMenu();
    });
};

const addIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "employeeName",
        message: "What is your employee's name?",
        validate: (employeeNameInput) => {
          if (employeeNameInput) {
            return true;
          } else {
            console.log("Please enter your employee's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeId",
        message: "What is your employee's ID number?",
        validate: (employeeIdInput) => {
          if (employeeIdInput) {
            return true;
          } else {
            console.log("Please enter your employee's ID number!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "emailAddress",
        message: "What is your employee's e-mail address?",
        validate: (emailAddressInput) => {
          if (emailAddressInput) {
            return true;
          } else {
            console.log("Please enter your employee's e-mail address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "What is your school's name?",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please enter your school name!");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      //Create Intern Object and add to Employee Array
      console.log(answers);
      const intern = new Intern(
        answers.employeeName,
        answers.employeeId,
        answers.emailAddress,
        answers.school
      );
      employees.push(intern);
      mainMenu();
    });
};

const goodbyeGreeting = () => {
  inquirer
    .prompt({
      type: "input",
      name: "goodbyeGreeting",
      message:
        "Thank you for your inputs in building your team profile! Your team profile will be generated shortly on the webpage.",
    })
    .then((answers) => {
      return answers;
    });
};

promptManager()
  .then(mainMenu)
  .then((employeeData) => {
    return generatePage(employeeData);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .catch((err) => {
    console.log(err);
  });
