const data = require('../data/zoo_data');

const { species, hours } = data;

const hourAnimal = (animal) => species.find((specie) => specie.name === animal).availability;

const targetHour = (day) => {
  const r = {};
  // const animals = species.reduce((array, specie) => {
  //   if (specie.availability.includes(day[0])) { array = [...array, specie.name]; }
  //   return array;
  // }, []);
  const animals = [];
  species.forEach((specie) => {
    if (specie.availability.includes(day[0])) { animals.push(specie.name); }
  });
  r[day[0]] = {
    officeHour: `Open from ${day[1].open}am until ${day[1].close}pm`,
    exhibition: animals,
  };
  return r;
};

const hourDay = (day) => {
  const result = {};
  const arrayday = Object.entries(hours).find((elmt) => elmt[0] === day);
  if (arrayday[1].open === 0) {
    result[arrayday[0]] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    return result;
  }
  return targetHour(arrayday);
};

function getSchedule(scheduleTarget) {
  if (species.some((specie) => specie.name === scheduleTarget)) {
    return hourAnimal(scheduleTarget);
  }
  if (Object.keys(hours).includes(scheduleTarget)) {
    return hourDay(scheduleTarget);
  }
  const geralHour = () => {
    const obj1 = {};
    const week = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    week.forEach((day) => {
      Object.assign(obj1, getSchedule(day));
    });
    const obj2 = getSchedule('Monday');
    return Object.assign(obj1, obj2);
  };
  return geralHour();
}

module.exports = getSchedule;
