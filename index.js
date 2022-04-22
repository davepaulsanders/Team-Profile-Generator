const inquirer = require("inquirer");
const generateHTML = require("./src/genHTML");
// importing file building functions
const {
  folderExist,
  createFolder,
  createFile,
} = require("./src/file-creation");

// importing classes
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

// array to hold instances to be generated
let employeeArr = [];

// create a manager
const addManager = () => {
  employeeArr = [];
  return inquirer.prompt([
    {
      name: "name",
      message: "What is the team manager's name?",
      validate: (name) => {
        if (!name) {
          console.log("Include the manager's name please!");
          return false;
        }
      },
    },
    {
      name: "id",
      message: "What is their employee id?",
      validate: (id) => {
        if (!id) {
          console.log("Include the manager's id please!");
          return false;
        }
      },
    },
    {
      name: "email",
      message: "What is their email address?",
      validate: (email) => {
        if (!email) {
          console.log("Include the manager's email please!");
          return false;
        }
      },
    },
    {
      name: "office",
      message: "What is their office number?",
      validate: (office) => {
        if (!office) {
          console.log("Include the manager's office number please!");
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "next",
      message: "Do you want to add an employee?",
      default: true,
    },
  ]);
};

// generic employee creation before adding engineer or intern specific queries
const employeeInfo = () => {
  return inquirer
    .prompt([
      {
        name: "name",
        message: "What is the employee's name?",
        validate: (name) => {
          if (!name) {
            console.log("Include the employee's name please!");
            return false;
          }
        },
      },
      {
        name: "id",
        message: "What is the employee's id?",
        validate: (id) => {
          if (!id) {
            console.log("Include the employee's id please!");
            return false;
          }
        },
      },
      {
        name: "email",
        message: "What is their email address?",
        validate: (email) => {
          if (!email) {
            console.log("Include the employee's email please!");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "add",
        message: "What is their position?",
        choices: ["Engineer", "Intern"],
      },
    ])
    .then((res) => {
      switch (res.add) {
        // passing the responses to another prompt to cover more specific questions
        case "Engineer":
          engineerRequest(res);
          break;
        case "Intern":
          internRequest(res);
          break;
      }
    });
};

// create an engineer
const engineerRequest = (answers) => {
  return inquirer
    .prompt([
      {
        name: "github",
        message: "What is your github username?",
        validate: (github) => {
          if (!github) {
            console.log("Include the employee's github username please!");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "next",
        message: "Do you want to add more employees?",
      },
    ])
    .then((res) => {
      // add new info to existing answers object that has been passed in
      for (key in res) {
        answers[key] = res[key];
      }
      const { name, id, email, github, next } = answers;

      if (next === true) {
        // create instance of Engineer and push to employeeArr
        employeeArr.push(new Engineer(name, id, email, github));
        // call employeeInfo if the user wants to add a new employee
        employeeInfo();
      } else {
        employeeArr.push(new Engineer(name, id, email, github));
        // start page creation and build
        buildPage();
      }
    });
};

// create an intern
const internRequest = (answers) => {
  return inquirer
    .prompt([
      {
        name: "school",
        message: "What school do you attend?",
        validate: (school) => {
          if (!school) {
            console.log("Include the manager's name please!");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "next",
        message: "Do you want to add more employees?",
      },
    ])
    .then((res) => {
      // add new info to existing answers object that has been passed in
      for (key in res) {
        answers[key] = res[key];
      }
      const { name, id, email, school, next } = answers;
      if (next === true) {
        // create instance of Intern and push to employeeArr
        employeeArr.push(new Intern(name, id, email, school));
        // call employeeInfo if the user wants to add a new employee
        employeeInfo();
      } else {
        employeeArr.push(new Intern(name, id, email, school));
        buildPage();
      }
    });
};

// This begins the query process, which is ended in either the intern or engineer functions
addManager().then((answers) => {
  const { name, id, email, office, next } = answers;
  employeeArr.push(new Manager(name, id, email, office));
  if (next === true) {
    employeeInfo();
  } else {
    return;
  }
});

// this function creates index.html
const buildPage = () => {
  // generating page template
  const pageTemplate = generateHTML(employeeArr);
  // checking if dist exists
  const folderCheck = folderExist();

  // build file
  if (folderCheck === true) {
    createFile(pageTemplate);
  } else {
    createFolder().then(createFile(pageTemplate));
  }
};
