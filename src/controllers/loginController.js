let imports = require('../controllers/imports');

exports.login = function(req,res,next)  
{
    imports.userModel.findOne({
        attributes: [ 'id', 'name', 'email', 'password' ],
        where:{
            email: req.body.email
        }
    })
    .then(function(user){
        if(user && req.body.password == imports.cryptr.decrypt(user.dataValues.password)){
            let token = imports.jwt.sign({
                data: req.body.email
              }, imports.constants.secretKey.secretKey);
            res.send(imports.constants.response(true, imports.constants.httpStatus.success, imports.constants.messages.Success, { token, user }))
        }else{
            res.send(imports.constants.response(false, imports.constants.httpStatus.success, imports.constants.messages.InvalidLogin, imports.constants.emptyDataObject))
        }
    })
    .catch(function(err){
        res.send(imports.constants.response(false, imports.constants.httpStatus.failure, imports.constants.messages.SystemError, imports.constants.emptyDataObject))
    })
}