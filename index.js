const inquirer = require("inquirer");
const fs = require("fs");

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
]