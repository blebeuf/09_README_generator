// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'Apache 2.0 License') {
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else if (license === 'Boost Software License 1.0') {
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    } else if (license === 'BSD 3-Clause License') {
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    } else if (license === 'BSD 2-Clause License') {
      return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
    } else if (license === 'CC0-1.0') {
      return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
    } else if (license === 'CC BY 4.0') {
      return '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)';
    } else if (license === 'CC BY-SA 4.0') {
      return '[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)';
    } else if (license === 'CC BY-NC 4.0') {
      return '[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)';
    } else if (license === 'CC BY-ND 4.0') {
      return '[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)';
    } else {
      return 'License not recognized';
    }
  }
  
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'Apache 2.0 License') {
      return 'https://opensource.org/licenses/Apache-2.0';
    } else if (license === 'Boost Software License 1.0') {
      return 'https://www.boost.org/LICENSE_1_0.txt';
    } else if (license === 'BSD 3-Clause License') {
      return 'https://opensource.org/licenses/BSD-3-Clause';
    } else if (license === 'BSD 2-Clause License') {
      return 'https://opensource.org/licenses/BSD-2-Clause';
    } else if (license === 'CC0-1.0') {
      return 'http://creativecommons.org/publicdomain/zero/1.0/';
    } else if (license === 'CC BY 4.0') {
      return 'https://creativecommons.org/licenses/by/4.0/';
    } else if (license === 'CC BY-SA 4.0') {
      return 'https://creativecommons.org/licenses/by-sa/4.0/';
    } else if (license === 'CC BY-NC 4.0') {
      return 'https://creativecommons.org/licenses/by-nc/4.0/';
    } else if (license === 'CC BY-ND 4.0') {
      return 'https://creativecommons.org/licenses/by-nd/4.0/';
    } else {
      return 'License URL not available';
    }
  }
  
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    // Define the license badge and link
    let badge = '';
    let link = '';
  
    // Check the license and assign the badge and link
    if (license === 'Apache 2.0 License') {
      badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      link = 'https://opensource.org/licenses/Apache-2.0';
    } else if (license === 'Boost Software License 1.0') {
      badge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
      link = 'https://www.boost.org/LICENSE_1_0.txt';
    } else if (license === 'BSD 3-Clause License') {
      badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      link = 'https://opensource.org/licenses/BSD-3-Clause';
    } else if (license === 'BSD 2-Clause License') {
      badge = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
      link = 'https://opensource.org/licenses/BSD-2-Clause';
    } else if (license === 'CC0-1.0') {
      badge = '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
      link = 'http://creativecommons.org/publicdomain/zero/1.0/';
    } // Add additional licenses here
    else {
      return ''; // Return an empty string if no license is provided or recognized
    }
  
    // Return the license section for README
    return `## License
  
  This project is licensed under the ${license} - see the [LICENSE](${link}) for details.
  
  ${badge}
  `;
  }
  

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    // Generate the license badge and section
    const licenseBadge = renderLicenseBadge(data.license);
    const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}${licenseBadge}

  # <Your-Project-Title>

  ## Description
  
 ${data.description}
   
  ## Table of Contents (Optional)
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Features](#features)
  - [License](#license)
  - [Badges](#badges)
  - [How to Contribute](#how-to-contribute)
  - [Test](#tests)
  - [Questions](#questions)

  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}

  ## Credits
  
  ${data.credits}

  ## Badges

  ${licenseBadge}

  ## License
  
  ${data.license}

  ## Features
  
  ${data.features}
  
  ## How to Contribute
  
  ${data.contribute}
  
  ## Tests
  
  ${data.tests}

  ## Questions

  Please email me at ${data.email} if you have any questions or concerns regarding this project. 
  Also visit my ${data.github} for other projects and/or applications.
`;
}

module.exports = generateMarkdown;
