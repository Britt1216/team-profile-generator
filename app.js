const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { type } = require("os");

const teamMembers = [];
const idArray = [];

function menu () {
    function createManager () {
        console.log("Please build your team");
        inquirer.prompt([
            {
                type: "input", 
                name: "managerName",
                message: "What is the manager name?",
                vaildate: answer => {
                    if (answer !== "") {
                        return true
                    }
                    return "Please enter your manager name.";
                }}, {
                    type: "input",
                    name: "managerId",
                    message: "What is the manager's ID?",
                    // validate:
                }, {
                type: "input",
                name: "managerEmail",
                message: "What is your manager email?",
                // validate:
                }, {
                    type: "input",
                    name: "managerOfficeNumber",
                    message: "What is your manager office number?"
                    // vaildate:
                }
            
        ]) .then(responses => {
            const manager = new Manager(responses.managerName, responses.managerId, responses.managerEmail, responses.managerOfficeNumber)
            teamMembers.push(manager)
            idArray.push(responses.managerId)
            createTeam()
        })

    }
    function createTeam() {
        inquirer.prompt([{
            type: "list",
            name: "memberChoice",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "Enough Members"]
        }]) .then(userChoice => {
            switch(userChoice.memberChoice) {
                case "Engineer": 
                addEngineer()
                break
                case "Intern":
                addIntern()
                break
                default:
                buildTeam()                
            }
        })
    }
    function addEngineer() {
        inquirer.prompt([{
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?",
            // validate:
        }, {
            type: "input",
            name: "engineerId",
            message: "What is your engineer's ID?",
            // validate:
        }, {
            type: "input",
            name: "engineerEmail",
            message: "What is your engineer's email?",
            // validate:    
        }, {
            type: "input",
            name: "engineerGitHub",
            message: "What is your engineer's GitHub?",
            // validate:
        }]) .then(responses => {
            const engineer = new Engineer(responses.engineerName, responses.engineerId, responses.engineerEmail, responses.engineerGitHub)
            teamMembers.push(engineer)
            idArray.push(responses.engineerId)
            createTeam()
        })
    }
    // add intern
    function buildTeam() {
        if(!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR) 
        }
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8")
    }
    createManager()
}
    menu()
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
