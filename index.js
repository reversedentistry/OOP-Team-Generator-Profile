const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/employee");
const Manager = require("./lib/manager"); 
const Engineer = require("./lib/engineer"); 
const Intern = require("./lib/intern"); 

const createCards = require("./src/template.js");


const teamManager = [
    {
        type: "input",
        name: "managerName",
        message: "Enter the team manager's name.",
        validate: async (input) => {
            if (input) {
                return true;
            } else {
                console.log("Project manager required. Please enter a name.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "managerId",
        message: "Enter the manager's ID.",
        validate: async (input) => {
            if (input) {
                return true;
            } else {
                console.log("Manager ID required");
                return false;
            }
        }
    },
    
    {
        type: "input",
        name: "managerEmail",
        message: "Enter the manager's email.",
        validate: async (input) => {
            if (input) {
                return true;
            } else {
                console.log("Manager email required");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Enter the manager's office number.",
        validate: async (input) => {
            if (input) {
                return true;
            } else {
                console.log("Manager office number required.");
                return false;
            }
        }
    },
    {
        type: "checkbox",
        name: "teamAdditions",
        message: "Would you like to add a team member?",
        choices: ["Engineer", "Intern", "None"],
        validate: async (checkbox) => {
            if (checkbox.length == 1) {
                return true;
            } else {
                console.log("Please choose one option.");
                return false;
            }
        }
    }
]

const engineer = [
    {
        type: "input",
        name: "engiName",
        message: "Enter the name of the engineer."
    },
    {
        type: "input",
        name: "engiId",
        message: "Enter the ID of the engineer."
    },
    {
        type: "input",
        name: "engiEmail",
        message: "Enter the email of the engineer."
    },
    {
        type: "input",
        name: "engiGithub",
        message: "Enter the GitHub username of the engineer."
    },
    {
        type: "checkbox",
        name: "teamAdditions",
        message: "Would you like to add another team member?",
        choices: ["Engineer", "Intern", "None"],
        validate: async (checkbox) => {
            if (checkbox.length == 1) {
                return true;
            } else {
                console.log("Please choose one option.");
                return false;
            }
        }
    }
]

const intern = [
    {
        type: "input",
        name: "internName",
        message: "Enter the name of the intern."
    },
    {
        type: "input",
        name: "internId",
        message: "Enter the ID of the intern."
    },
    {
        type: "input",
        name: "internEmail",
        message: "Enter the email of the intern."
    },
    {
        type: "input",
        name: "internSchool",
        message: "Enter the school of the intern."
    },
    {
        type: "checkbox",
        name: "teamAdditions",
        message: "Would you like to add another team member?",
        choices: ["Engineer", "Intern", "None"],
        validate: async (checkbox) => {
            if (checkbox.length == 1) {
                return true;
            } else {
                console.log("Please choose one option.");
                return false;
            }
        }
    }
]; 

function createInternProfile() {
    inquirer.prompt(intern)
    .then((data) => {
        const newIntern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
        const internHtml = createCards.createInternCard(newIntern); 
        addProfile(internHtml);
        if (data.teamAdditions[0]) {
            createEngiProfile();
        } else if (data.teamAdditions[1]) {
            createInternProfile()
        } else {
            return;
        }
    }) 
};

function createEngiProfile() {
    inquirer.prompt(engineer) 
    .then((data) => {
        const newEngineer = new Engineer(data.engiName, data.engiId, data.engiEmail, data.engiGithub)
        const engiHtml = createCards.createEngineerCard(newEngineer); 
        addProfile(engiHtml); 
        if (data.teamAdditions[0]) {
            createEngiProfile();
        } else if (data.teamAdditions[1]) {
            createInternProfile()
        } else {
            return;
        }
    })
    
};

function createManagerProfile() {
    inquirer.prompt(teamManager)
    .then((data) => {
        const newManager = new Manager(data.managerName, data.managerId, data.managerEmail, data.officeNumber);
        const managerHtml = createCards.createManagerCard(newManager);
        if (data.teamAdditions[0]) {
            createEngiProfile();
        } else if (data.teamAdditions[1]) {
            createInternProfile()
        } else {
            addProfile(managerHtml);
        }
    })
}

function createProfiles() {
    let html = createCards.createHTML();
    fs.writeFileSync("./dist/index.html", html)
    createManagerProfile();

};

function addProfile(data) {
    fs.appendFileSync("./dist/index.html", data)
};

createProfiles(); 