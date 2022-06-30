const { species, employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const specieid = employees.find((employee) => employee.id === id).responsibleFor[0];
  const animal = species
    .find((specie) => specie.id === specieid).residents
    .reduce((acc, curr) => {
      if (curr.age > acc.age) { return curr; }
      return acc;
    });
  return Object.values(animal);
}

module.exports = getOldestFromFirstSpecies;
