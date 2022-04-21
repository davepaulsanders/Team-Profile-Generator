const iconSelector = (person) => {
  switch (person.role) {
    case "Manager":
      return `<i class="fa-solid fa-mug-hot m-2"></i>`;
    case "Engineer":
      return `<i class="fa-solid fa-glasses m-2"></i>`;
    case "Intern":
      return `<i class="fa-solid fa-user-graduate m-2"></i>`;
  }
};

module.exports = iconSelector;
