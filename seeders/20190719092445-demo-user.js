const imports = require('../src/controllers/imports');
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      name: 'Srikanth',
      email: 'srikanth@navtech.com',
      password: imports.cryptr.encrypt('Srikanth@navtech'),
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
