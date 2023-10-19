// src/services/employee.service.js

const { Address, Employee } = require('../models/');

const getAll = async () => {
  const users = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });

  return users;
};

const getById = async (id) => {
    // metodo EAGER loading
    // const employee = await Employee.findOne({
    //     where: { id },
    //     include: [{ model: Address, as: 'addresses', attributes: { exclude: ['number', 'street']} }],
    // });
    // return employee;
    
    // metodo LAZY loading
    const employee = await Employee.findOne({
        where: { id },
    });
    return employee;
}
module.exports = { 
    getAll,
    getById,
};