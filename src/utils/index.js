export function returnError(message = "Failure request",code = 201){
    return {code:code,message:message,success: false}
}
export function returnSuccess(data = {},message = "Successful request",code = 0){
    return  {code:code,message:message,success: true,data:data}
}