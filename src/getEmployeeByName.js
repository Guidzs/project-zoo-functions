const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data;
  return (employeeName === undefined) ? {} : employees.find((employee) => {
    const { firstName, lastName } = employee;
    return firstName === employeeName || lastName === employeeName;
  });
}

module.exports = getEmployeeByName;
