import HttpError from "./util/httpError"

export const sayHello = ()=>
{
    throw new HttpError(400, "WTF");
}