const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const { species } = data;
  return species.filter((specie) => specie.id === ids.find((id) => id === specie.id))
}

module.exports = getSpeciesByIds;
