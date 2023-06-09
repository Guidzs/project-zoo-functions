const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  return species.some((specie) => {
    const { name, residents } = specie;
    if (name === animal) {
      return residents.every((resident) => resident.age >= age);
    }
    return null;
  });
}

module.exports = getAnimalsOlderThan;
