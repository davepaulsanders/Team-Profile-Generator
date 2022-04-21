const inquirer = require("inquirer");
const generateHTML = require("./src/genHTML");

// importing classes
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

// array to hold instances to be generated
const employeeArr = [];

// create a manager
const addManager = () => {
  return inquirer.prompt([
    {
      name: "name",
      message: "What is the team manager's name?",
    },
    {
      name: "id",
      message: "What is their employee id?",
    },
    {
      name: "email",
      message: "What is their email address?",
    },
    {
      name: "office",
      message: "What is your office number?",
    },
    {
      type: "confirm",
      name: "next",
      message: "Do you want to add an employee?",
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
      },
      {
        name: "id",
        message: "What is the employee's id?",
      },
      {
        name: "email",
        message: "What is their email address?",
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
        employeeArr.push(new Intern(name, id, email, github));
        generateHTML(employeeArr);
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
        generateHTML(employeeArr);
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
    console.log(employeeArr);
  }
});
