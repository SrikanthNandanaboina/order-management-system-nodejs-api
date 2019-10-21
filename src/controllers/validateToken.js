const imports = require('../controllers/imports');

const validateSession = (req , res, next)=>{
    imports.jwt.verify(req.headers.token, imports.constants.secretKey.secretKey, function(err, decoded) {
        if(!decoded){
            res.send(imports.constants.response(false, imports.constants.httpStatus.success, imports.constants.messages.InvalidToken, imports.constants.emptyDataObject))
        }else{
            return next();
        }
    });
}

module.exports = { validateSession }