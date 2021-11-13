// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const { clear } = require("console");
// TODO: Create an array of questions for user input
const questions = [
    {
        message: "What is the Title of your project?",
        name: "title"
    },
    {
        message: "Which License is this application used under?",
        name: "license",
        type: "list",
        choices: ["Apache", "MIT", "GNU"]
    },
    {
        message: "Write a brief description of the application and its functionality.",
        name: "description"
    },
    {
        message: "Installation - Write bulletpoints or any other important information about how to install this application.",
        name: "installation"
    },
    {
        message: "Write a detailed description of How To Use the application.",
        name: "usage"
    },
    {
        message: "Who are the Contributors to this project and what is their contact information?",
        name: "contributors"
    },
    {
        message: "What Testing has been performed on this application?",
        name: "testing"
    },
    {
        message: "If you have any Questions or would like to contribute to this project, please make those notes here, and one of our developers will get back to you ASAP.",
        name: "questions"
    },
];

// TODO: Create a function to initialize app
function init() {
    console.log ("Welcome to the README Generator");
    inquirer.prompt(questions).then(finish);
}

function finish (responses) {
    const markdown = generateMarkdown (responses);
    fs.writeFileSync ("./dist/README.md",markdown);
    console.log("Your README markdown file is in the dist folder");
    process.exit();
}
// Function call to initialize app
init();
