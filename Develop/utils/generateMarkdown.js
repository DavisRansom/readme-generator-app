// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache") return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  if (license === "GNU") return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  if (license === "MIT") return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
  ## Description 
  ${data.description}
  ## Table of Contents
  * [Install](#install)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [Testing](#testing)
  * [Questions](#questions)
  ## Install
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributors
  ${data.contributors}
  ## Testing
  ${data.testing}
  ## Questions?
  ${data.questions}
`;
}

module.exports = generateMarkdown;
