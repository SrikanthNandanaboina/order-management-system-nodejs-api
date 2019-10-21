let imports = require('./imports');

exports.getAllOrders = (req, res)=>{
    imports.orderModel.findAll({
        attributes: [ 'order_number', 'order_due_date', 'customer_name', 'customer_address', 'customer_phone', 'order_total' ]
    })
    .then(function(orders){
        res.send(imports.constants.response(true, imports.constants.httpStatus.success, imports.constants.messages.Success, { orders }))
    })
    .catch(function(err){
        res.send(imports.constants.response(false, imports.constants.httpStatus.failure, imports.constants.messages.SystemError, imports.constants.emptyDataObject))
    })
}

exports.addOrder = (req, res)=>{
    let orderData = req.body
    imports.orderModel.findOrCreate({
        where: {
            order_number: orderData.order_number
        },
        defaults: { 
                    order_number: orderData.order_number, order_due_date: orderData.order_due_date,
                    customer_name: orderData.customer_name, customer_address: orderData.customer_address,
                    customer_phone: orderData.customer_phone, order_total: orderData.order_total 
                }
    })
    .then(([order, created])=>{
        if(created){
            res.send(imports.constants.response(true, imports.constants.httpStatus.success, imports.constants.messages.Success, { order }))
        }else{
            res.send(imports.constants.response(false, imports.constants.httpStatus.success, imports.constants.messages.AlreadyExist, imports.constants.emptyDataObject))            
        }
    })
    .catch(function(err){
        console.log(err);
        res.send(imports.constants.response(false, imports.constants.httpStatus.failure, imports.constants.messages.SystemError, imports.constants.emptyDataObject))
    })
}

exports.deleteOrder = (req, res)=>{
    imports.orderModel.destroy({
        where:{
            id: req.params.id
        }
    })
    .then(function(result){
        res.send(imports.constants.response(true, imports.constants.httpStatus.success, imports.constants.messages.Success, {}))
    })
    .catch(function(err){
        res.send(imports.constants.response(false, imports.constants.httpStatus.failure, imports.constants.messages.SystemError, imports.constants.emptyDataObject))
    })
}

exports.getOrder = (req, res)=>{
    imports.findOne({
        where:{
            id: req.params.id
        }
    })
    .then(function(order){
        res.send(imports.constants.response(true, imports.constants.httpStatus.success, imports.constants.messages.Success, { order }))
    })
    .catch(function(err){
        res.send(imports.constants.response(false, imports.constants.httpStatus.failure, imports.constants.messages.SystemError, imports.constants.emptyDataObject))
    })
}

exports.updateOrder = (req, res)=>{
    let orderData = req.body
    imports.orderModel.findAll({
        where:{
            order_number: orderData.order_number,
            id: {
                [imports.db.Sequelize.Op.ne]: orderData.order_number
            }
        }
    })
    .then(function(orders){
        if(orders.length > 0){
            res.send(imports.constants.response(false, imports.constants.httpStatus.success, imports.constants.messages.AlreadyExist, imports.constants.emptyDataObject))
        }else{
            imports.orderModel.update({
                order_number: orderData.order_number, order_due_date: orderData.order_due_date,
                customer_name: orderData.customer_name, customer_address: orderData.customer_address,
                customer_phone: orderData.customer_phone, order_total: orderData.order_total 
            },{
                where: {
                    id: orderData.id
                }
            })
            .then(function(updateData){
                res.send(imports.constants.response(true, imports.constants.httpStatus.success, imports.constants.messages.Success, imports.constants.emptyDataObject))
            })
            .catch(function(err){
                res.send(imports.constants.response(false, imports.constants.httpStatus.failure, imports.constants.messages.SystemError, imports.constants.emptyDataObject))
            })
        }
    })
    .catch(function(err){
        res.send(imports.constants.response(false, imports.constants.httpStatus.failure, imports.constants.messages.SystemError, imports.constants.emptyDataObject))
    })
}