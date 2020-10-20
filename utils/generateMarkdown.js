// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    ![github license](https://img.shields.io/badge/license-${data.license}-lightgray)
    ## Description
    ${data.description}
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Questions](#questions)
    ## Installation
    ${data.installation}
    ## Usage
    ${data.usage}
    ## License
    ![github license](https://img.shields.io/badge/license-${data.license}-lightgray)
    ## Contributing
    ${data.contribute}
    ## Questions
    If you have any other questions, please contact me at:
    Github: http://github.com/${data.gitHub}
    Email: ${data.email}
`;
}

module.exports = generateMarkdown;
