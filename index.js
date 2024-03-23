// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer= require('inquirer');
const generateMarkdown = require('./Develop/util/generateMarkDown');

// TODO: Create an array of questions for user input
// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba - here I used the first 10 on the list for the choices
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of the project?'},
    {
        type: 'input',
        name: 'description',
        message: 'Please describe this project:'},
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide any installation instructions for this project:'},
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter any usage information for this project:'},
    {
        type: 'input',
        name: 'credits',
        message: 'Please list any credits or collaborators for this project:'},
    {
        type: 'list',
        name: 'license',
        message: 'Please selcet a license used, if any:',
        choices: [
            'N/A',
            'Apache 2.0 License',
            'Boost Software License 1.0',
            'BSD 3-Clause License',
            'BSD 2-Clause License',
            'CC0',
            'Attribution 4.0 International',
            'Attribution-ShareAlike 4.0 International',
            'Attribution-NonCommercial 4.0 International',
            'Attribution-NoDerivates 4.0 International' ] },
    {
        type: 'input',
        name: 'features',
        message: 'Please list any special function or functions for this project:'},
    {
        type: 'input',
        name: 'contribute',
        message: 'Describe how others may contribute to this project:'},
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide any additional information for testing this project:'},
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your Github username:'},
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) =>
        err ? console.error("File did not write") : console.log("README.MD has been written")
    );
}


// TODO: Create a function to initialize app
function init()  {
inquirer.prompt(questions).then((answers) => {
        // logic to process answers and perhaps generate more data
        const markdownContent = generateMarkdown(answers);
        writeToFile('README.md', markdownContent);
    });
}

// Function call to initialize app
init();
