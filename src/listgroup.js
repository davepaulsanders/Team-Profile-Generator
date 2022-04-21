const listGroup = (person) => {
  switch (person.role) {
    case "Manager":
      return `<li class="list-group-item">Office number: ${person.office}</li>`;
    case "Engineer":
      return `<li class="list-group-item">GitHub: ${person.github}</li>`;
    case "Intern":
      return `<li class="list-group-item">School: ${person.school}</li>`;
  }
};

module.exports = listGroup;
