const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];
const ids = [];

function Menu() {
    function createManager() {
        console.log("Build Your Dev Team!");
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'What is your managers name?',
            },
            {
                type: 'number',
                name: 'managerId',
                message: 'What is your managers id?',
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'What is your managers email?',
            },
            {
                type: 'number',
                name: 'officeNum',
                message: 'What is your managers office number?',
            },
        ])
        const manager = new Manager(answers.managerName, answers.ManagerId, answers.Email, answers.officeNum);
        teamMembers.push(manager);
        ids.push(answers.managerId);
        createManager()

    }

    function createEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is your engineers name?',
            },
            {
                type: 'number',
                name: 'engineerId',
                message: 'What is your engineers id?',
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'What is your engineers email?',
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'What is your engineers GitHub username?',
            },
            {
                type: 'list',
                name: 'addEmployee',
                message: 'Which type of team member would you like to add?'
            }
        ])
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamMembers.push(engineer);
        ids.push(answers.engineerId);
    }

    function createIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'What is your interns name?',
            },
            {
                type: 'number',
                name: 'internsId',
                message: 'What is your interns id?',
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'What is your interns email?',
            },
            {
                type: 'input',
                name: 'internSchool',
                message: 'What school does your intern go to?',
            },
        ]);
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internGithub);
        teamMembers.push(intern);
        ids.push(answers.internId);
    }

}

// Write code to use inquirer to gather information about the development team members,

// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
