export default function ErrorHandler(statusCode,message){
const error = new Error()
error.statusCode = statusCode;
error.message = message;
return error
}