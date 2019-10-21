var db = require('../../models/index');
sequelize = db.sequelize;
Sequelize = db.Sequelize;
exports.order = sequelize.define('orders', {
    order_number: { type:Sequelize.INTEGER },
    order_due_date: { type: Sequelize.DATE }, 
    customer_name: { type: Sequelize.STRING },
    customer_address: { type: Sequelize.TEXT },
    customer_phone: { type: Sequelize.STRING },
    order_total: { type: Sequelize.NUMERIC(10, 2) }
},{
    underscored: true // to allow underscores in column names
});