// importing helper functions
const iconSelector = require("./icon");
const listGroup = require("./listgroup");

//generating html template
const generateHTML = (employeeArr) => {
  let template = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <title>My Team</title>
  </head>
  <body>
      <header class="bg-primary p-4 text-center text-white">
          <h1>My Team</h1>
      </header>
      <div class="container d-flex flex-row flex-wrap justify-content-center p-3">`;
  employeeArr.forEach((person) => {
    template =
      template +
      `
        <div class="card m-3" style="width: 22rem>
            <div class="bg-info p-3">
            <h2>${person.name}</h2>
                <div class="d-flex">
                ${iconSelector(person)}
                <h3>${person.role}</h3>
                </div>
            </div>
            <div class="py-4 px-3">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${person.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${
                      person.email
                    }>${person.email}</a></li>
                    ${listGroup(person)}
                </ul>
            </div>
        </div>
        `;
  });
  template =
    template +
    `</div>
  </body>
  </html>`;
  return template;
};

module.exports = generateHTML;
