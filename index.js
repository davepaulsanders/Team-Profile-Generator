const inquirer = require("inquirer");
const generateHTML = require("./src/genHTML");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const employeeArr = [];

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
      for (key in res) {
        answers[key] = res[key];
      }
      const { name, id, email, github, next } = answers;
      if (next === true) {
        employeeArr.push(new Engineer(name, id, email, github));
        employeeTypeAdd();
      } else {
        employeeArr.push(new Intern(name, id, email, github));
        console.log(employeeArr);
      }
    });
};
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
      for (key in res) {
        answers[key] = res[key];
      }
      const { name, id, email, school, next } = answers;
      if (next === true) {
        employeeArr.push(new Intern(name, id, email, school));
        employeeTypeAdd();
      } else {
        employeeArr.push(new Intern(name, id, email, school));
        console.log(employeeArr);
      }
    });
};

const employeeTypeAdd = () => {
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
addManager().then((answers) => {
  const { name, id, email, office, next } = answers;
  employeeArr.push(new Manager(name, id, email, office));
  if (next === true) {
    employeeTypeAdd();
  } else {
    console.log(employeeArr);
  }
});
