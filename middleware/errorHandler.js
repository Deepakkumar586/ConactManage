
const constants = require('../constant')
const errorHandler = (err,req,res,next) =>{
        const statusCode = res.statusCode ? res.statusCode :constants.VALIDATION_ERROR;
        res.json({
            message:err.message,
            stackTrace:err.stack
        });

};
module.exports = errorHandler;
