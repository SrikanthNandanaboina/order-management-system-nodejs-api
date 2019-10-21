const messages = {
    SystemError: "System Error",
    InvalidLogin: "Invalid Login Credentials",
    InvalidToken: "Invalid Token",
    NoDataFound: "No Data Found",
    AlreadyExist: "Order Number Already Exists",
    Success: "Success",
}

const secretKey = {
    secretKey: "srikanth_test@navtech"
}

const httpStatus = {
    success: 200,
    failure: 500
}

const emptyDataObject = {};

const response = (status, statusCode, message, data)=>{
    return { status, statusCode, message, data }
}

module.exports = { messages, secretKey, httpStatus, emptyDataObject, response };