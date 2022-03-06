const inquirer = require('inquirer');
const fs = require('fs');
const { writeFile } = require('./index.js');
const generatePage = require('./src/page-template.js');

const promptUser = () => {
    return inquirer
    .prompt([
        {
        type: 'input',
        name: 'teamManagerName', //or should this be generic name?
        //every employee's name will be asked
        message: "What is team manager's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
              } else {
                console.log("Please enter the team manager's name!");
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'employeeName', //or should this be generic name?
            //every employee's name will be asked
            message: "What is your name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                  } else {
                    console.log("Please enter your name!");
                    return false;
                  }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: "What is your employee ID number?",
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true;
                } else {
                    console.log("Please enter your employee ID number!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'emailAddress',
            message: "What is your e-mail address?",
            validate: emailAddressInput => {
                if (emailAddressInput) {
                    return true;
                } else {
                    console.log("Please enter your e-mail address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is your office space number?",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log("Please enter your office space number!");
                    return false;
                }
            }
        }
    ]);
};

const promptAddEmployee = (managerData) => {
    console.log(`
    ================
    Add an Employee
    ================
    `)

    if(!managerData.employee) {
        managerData.employee = [];
    }
    return inquirer
    .prompt([
        {
            type: 'checkbox',
            name: 'addEmployee',
            message: 'Would you like to add another employee from your team? Please select their role and respond to the additional prompts.',
            choices: ['Engineer', 'Intern', 'Finished building my team']
        },
        //add coding here for if they select Engineer
        ///prompted to enter the engineer’s name, ID, email, and GitHub username, then sent to main menu
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter your GitHub username!');
                return false;
              }
            }
          },
        //add coding here for if they select Intern
        ///prompted to enter the intern’s name, ID, email, and school
        {
            type: 'input',
            name: 'school',
            message: 'Enter your school name',
            validate: schoolInput => {
              if (schoolInput) {
                return true;
              } else {
                console.log('Please enter your school name!');
                return false;
              }
            }
          },
        //add coding here if checked they're finish building their team
        {
            type: 'input',
            name: 'goodbyeGreeting',
            message: 'Thank you for your inputs in building your team profile! Your team profile will be generated shortly on the webpage.'
        }
    ])
    //add manager data to employee array
    .then(employeeData => {
        managerData.employee.push(employeeData);
        //evaluate if user wishes to add another team member
        if(employeeData.confirmAddEmployee) {
            return promptAddEmployee(managerData);
        } else {
            return managerData; 
        }
    });
};

