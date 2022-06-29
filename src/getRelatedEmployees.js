const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((employee) => {
    const { managers } = employee;
    return managers.some((manager) => manager === id);
  });
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const result = [];
    employees.forEach((employee) => {
      const { firstName, lastName, managers } = employee;
      if (managers.some((manager) => manager === managerId)) {
        result.push(`${firstName} ${lastName}`);
      }
    });
    return result;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
