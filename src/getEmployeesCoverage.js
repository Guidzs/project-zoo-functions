const { species, employees } = require('../data/zoo_data');

const createObj = (employee) => {
  const { id, firstName, lastName, responsibleFor } = employee;
  const animals = species
    .filter((specie) => responsibleFor.includes(specie.id))
    .map((specie) => specie.name);
  const locations = species
    .filter((specie) => responsibleFor.includes(specie.id))
    .map((specie) => specie.location);
  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species: animals,
    locations,
  };
};

const createObjCmplt = () => employees.map((employee) => createObj(employee));

function getEmployeesCoverage(nI) {
  if (nI === undefined) return createObjCmplt();
  const verifyNOrI = employees.find((employee) => {
    if (employee.id === nI.id || employee.firstName === nI.name || employee.lastName === nI.name) {
      return employee;
    }
    return undefined;
  });
  if (verifyNOrI === undefined) {
    throw new Error('Informações inválidas');
  }
  return createObj(verifyNOrI);
}

// console.log(getEmployeesCoverage(''));

module.exports = getEmployeesCoverage;
