const { species } = require('../data/zoo_data');

const allSpecies = () => {
  const result = {};
  const areas = ['NE', 'NW', 'SE', 'SW'];
  areas.forEach((area) => {
    const Animals = species
      .filter((specie) => specie.location === area)
      .map((specie) => specie.name);
    result[area] = Animals;
  });
  return result;
};

const nameOnly = () => {
  const result = {};
  const areas = ['NE', 'NW', 'SE', 'SW'];
  areas.forEach((area) => {
    const Animals = species
      .filter((specie) => specie.location === area)
      .map((specie) => {
        const r = {};
        const { name } = specie;
        const animals = specie.residents.map((resident) => resident.name);
        r[name] = animals;
        return r;
      });
    result[area] = Animals;
  });
  return result;
};

const sorted = ({ sorted: sort }) => {
  const result = {};
  const areas = ['NE', 'NW', 'SE', 'SW'];
  areas.forEach((area) => {
    const Animals = species
      .filter((specie) => specie.location === area)
      .map((specie) => {
        const r = {};
        const { name } = specie;
        const animals = specie.residents.map((resident) => resident.name);
        if (sort === true) animals.sort();
        r[name] = animals;
        return r;
      });
    result[area] = Animals;
  });
  return result;
};

const sex = ({ sex: s }) => {
  const result = {};
  const areas = ['NE', 'NW', 'SE', 'SW'];
  areas.forEach((area) => {
    const Animals = species
      .filter((specie) => specie.location === area)
      .map((specie) => {
        const r = {};
        const { name } = specie;
        const animalsSex = [];
        specie.residents.forEach((resident) => {
          if (s === resident.sex) animalsSex.push(resident.name);
        });
        r[name] = animalsSex;
        return r;
      });
    result[area] = Animals;
  });
  return result;
};

const sexAndSorted = ({ sex: s1, sorted: sort1 }) => {
  const result = {};
  const areas = ['NE', 'NW', 'SE', 'SW'];
  areas.forEach((area) => {
    const Animals = species.filter((specie) => specie.location === area)
      .map((specie) => {
        const r = {};
        const { name } = specie;
        const animalsSex = [];
        specie.residents.forEach((resident) => {
          if (s1 === resident.sex) animalsSex.push(resident.name);
        });
        if (sort1 === true) animalsSex.sort();
        r[name] = animalsSex;
        return r;
      });
    result[area] = Animals;
  });
  return result;
};

function getAnimalMap(options) {
  switch (true) {
  case !options || !Object.keys(options).includes('includeNames'):
    return allSpecies();
  case Object.keys(options).length === 1:
    return nameOnly();
  case !Object.keys(options).includes('sex'):
    return sorted(options);
  case !Object.keys(options).length > 2:
    return sex(options);
  default:
    return sexAndSorted(options);
  }
}

getAnimalMap({ includeNames: true, sorted: true });

module.exports = getAnimalMap;
