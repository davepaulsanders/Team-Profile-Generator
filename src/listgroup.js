const listGroup = (person) => {
  const { role, office, github, school } = person;
  switch (role) {
    case "Manager":
      return `<li class="list-group-item">Office number: ${office}</li>`;
    case "Engineer":
      return `<li class="list-group-item">GitHub: <a href="https://github.com/${github}">${github}</a></li>`;
    case "Intern":
      return `<li class="list-group-item">School: ${school}</li>`;
  }
};

module.exports = listGroup;
