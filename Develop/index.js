// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Provide a short description of your project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What steps are required to install your project? Please be thorough.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'How is your project used? Please provide step-by-step instructions.',
        name: 'instructions'
    },
    {
        type:'input',
        message:'Who did you collaborate with on this project? Please provide links their Github profiles',
        name:'credits'
    },
    {
        type:'list',
        message:'What license would you like your project to be used under?',
        choices:['MIT','Apache 2.0','BSD-3-Clause','BSD-2-Clause','GPL','LGPL','MPL-2.0','EPL-2.0'],
        name:'license'
    }



];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
    
// }

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(response => {
        const markDownContent = generateMarkdown(response);
        fs.writeFile('generatedREADME.md', markDownContent, (err)=>{
            err ? console.log(err) : console.log('Successfully created README.md!')
        })

})}



// Function call to initialize app
init();
