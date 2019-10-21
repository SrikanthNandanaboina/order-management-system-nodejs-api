var db = require('../../models/index');
sequelize = db.sequelize;
Sequelize = db.Sequelize;
exports.user = sequelize.define('users', {
    name: { type: Sequelize.STRING, notNull: true},
    email: { type: Sequelize.STRING, notNull: true},
    password: { type: Sequelize.STRING, notNull: true},
},{
    underscored: true // to allow underscores in column names
});