const orderController = require('../controllers/orderController');
const validateToken = require('../controllers/validateToken').validateSession;

module.exports = function(app,router){
  app.get('/api/get-all-orders', validateToken, orderController.getAllOrders);
  app.post('/api/save-order', validateToken, orderController.addOrder);
  app.get('/api/delete-order/:id', validateToken, orderController.deleteOrder);
  app.get('/api/get-order/:id', validateToken, orderController.getOrder);
  app.post('/api/update-order', validateToken, orderController.updateOrder)
}