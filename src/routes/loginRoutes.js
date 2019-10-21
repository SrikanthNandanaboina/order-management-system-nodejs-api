const loginController = require('../controllers/loginController');
module.exports = function(app,router){
  app.post('/api/login',loginController.login);
}