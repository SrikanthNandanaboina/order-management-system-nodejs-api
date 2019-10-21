'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: { type:Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      order_number: { type:Sequelize.INTEGER },
      order_due_date: { type: Sequelize.DATE }, 
      customer_name: { type: Sequelize.STRING },
      customer_address: { type: Sequelize.TEXT },
      customer_phone: { type: Sequelize.STRING },
      order_total: { type: Sequelize.NUMERIC(10, 2) },
      created_at: { type: Sequelize.DATE, defaultValue: new Date() },
      updated_at: { type: Sequelize.DATE, defaultValue: new Date() }
    })
},

down: (queryInterface, Sequelize) => {
  return queryInterface.dropTable('orders');
}
};
