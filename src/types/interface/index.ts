// --------- Authorization  -------------

export interface ISignin{
    password: string;
    phone_number: string;
}

export interface ISignup extends ISignin{
    email: string;
    lastname: string;
    phonenumber: string;
}

export interface IAuth{
    signin:(data:ISignin)=>any,
    signup?:(data:ISignup)=>any,
}
