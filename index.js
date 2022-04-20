const inquirer = require("inquirer");
const employeeArr = [];
const introductionRequest = () => {
  return inquirer.prompt([
    {
      name: "name",
      message: "What is your name?",
    },
    {
      name: "id",
      message: "What is your employee id?",
    },
    {
      name: "email",
      message: "What is your email address?",
    },
    {
      type: "list",
      name: "role",
      message: "What is your role at this company?",
      choices: ["Manager", "Engineer", "Intern"],
    },
  ]);
};

const managerRequest = (answers) => {
  return inquirer
    .prompt([
      {
        name: "office",
        message: "What is your office number?",
      },
      {
        type: "confirm",
        name: "add",
        message: "Do you want to add more employees?",
      },
    ])
    .then((res) => {
      for (key in res) {
        answers[key] = res[key];
      }
      return answers;
    });
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
        name: "add",
        message: "Do you want to add more employees?",
      },
    ])
    .then((res) => {
      for (key in res) {
        answers[key] = res[key];
      }
      return answers;
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
        name: "add",
        message: "Do you want to add more employees?",
      },
    ])
    .then((res) => {
      for (key in res) {
        answers[key] = res[key];
      }
      return answers;
    });
};

const questions = () => {
  introductionRequest().then((answers) => {
    switch (answers.role) {
      case "Manager":
        managerRequest(answers).then((answers) => {
          if (answers.add === true) {
            employeeArr.push(answers);
            questions();
          } else {
            employeeArr.push(answers);
            console.log(employeeArr);
          }
        });
        break;
      case "Engineer":
        engineerRequest(answers).then((answers) => {
          if (answers.add === true) {
            employeeArr.push(answers);
            questions();
          } else {
            employeeArr.push(answers);
            console.log(employeeArr);
          }
        });
        break;
      case "Intern":
        internRequest(answers).then((answers) => {
          if (answers.add === true) {
            employeeArr.push(answers);
            questions();
          } else {
            employeeArr.push(answers);
            console.log(employeeArr);
          }
        });
        break;
    }
  });
};

questions().then(console.log(employeeArr));
