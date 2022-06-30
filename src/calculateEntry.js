const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const result = {
    adult: 0,
    child: 0,
    senior: 0,
  };
  entrants.forEach((entrant) => {
    if (entrant.age < 18) { result.child += 1; }
    if (entrant.age >= 18 && entrant.age < 50) { result.adult += 1; }
    if (entrant.age >= 50) { result.senior += 1; }
  });
  return result;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) { return 0; }
  const { adult, child, senior } = countEntrants(entrants);
  const { prices } = data;

  return adult * prices.adult + child * prices.child + senior * prices.senior;
}

module.exports = { calculateEntry, countEntrants };
