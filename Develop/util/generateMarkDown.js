// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}${licenseBadge}

  # <Your-Project-Title>

  ## Description
  
 ${data.description}
   
  ## Table of Contents (Optional)
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Features](#features)
  - [How to Contribute](#how-to-contribute)
  - [Test](#test)
  - [Questions](#questions)

  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}

  ## Credits
  
  ${data.credits}
  
  ## License
  
 
  ## Badges
  

  ## Features
  
  ${data.features}
  
  ## How to Contribute
  
  ${data.contribute}
  
  ## Tests
  
  ${data.tests}

`;
}

module.exports = generateMarkdown;
