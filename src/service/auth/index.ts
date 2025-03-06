import request from "../config";
import { IAuth } from "../../types/interface";



export const auth:IAuth = {
    signin:(data)=> request.post('/auth/signin' , data)
}

