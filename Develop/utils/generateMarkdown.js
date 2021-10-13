const inquirer = require('inquirer');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`
      break;

    case 'Apache 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      break;

    case 'BSD-3-Clause':
      return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
      break;

    case 'BSD-2-Clause':
      return `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
      break;

    case 'GPL':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      break;

    case 'LGPL':
      return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
      break;
    
    case 'MPL-2.0':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
      break;

    case 'EPL-2.0':
      return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
      break;
      
    default: ''
      break;
  }
}
//   console.log(license)
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
    const licenseBadge=renderLicenseBadge(response.license)
    const licenseLink = renderLicenseLink(response.license)
    const licenseSection = renderLicenseSection(response.license)


return `#${response.title}

${licenseBadge}

##Description

${response.description}


##Table of Contents

-[Installation](#Installation)

-[Usage](#Usage)

-[Credits](#Credits)

-[License](#License)


##Installation

${response.installation}


##Usage

${response.instructions}


##Credits

${response.credits}


##License

${response.license}
`;
}

module.exports = generateMarkdown;
