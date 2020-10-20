const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project called?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe what your project is about.",
  },
  {
    type: "input",
    message: "How do you install your application?",
    name: "installation",
  },
  {
    type: "input",
    message: "How do you use your application?",
    name: "usage",
  },
  {
    type: "list",
    message: "What kind of license would you like to add to your application?",
    name: "license",
    choices: ["MIT", "Apache2.0"],
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "gitHub",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
fs.appendFile("README.md", function (err) {
  if (err) {
    console.log(err);
  }
});

// function to initialize program
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("README.md", generateMarkdown({ ...data }));
  });
}

// function call to initialize program
init();
