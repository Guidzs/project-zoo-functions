const data = require('../data/zoo_data');

const { species } = data;
function countAnimals(animal) {
  if (animal === undefined) {
    const result = {};
    species.forEach((specie) => {
      const { name, residents } = specie;
      result[name] = residents.length;
    });
    return result;
  }
  const { specie, sex } = animal;
  const { residents } = species.find((elmt) => elmt.name === specie);
  if (sex === undefined) { return residents.length; }
  return residents.filter((resident) => resident.sex === sex).length;
}

module.exports = countAnimals;
