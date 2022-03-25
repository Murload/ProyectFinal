export class users{

    _id? : any;
    name: string;
    lastname : string;
    email : string;
    password : any;
    telephone : number;
    role : string;

    constructor(name: string, lastname : string, email : string, telephone : number, password : string, role : string  )
    {

    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.telephone = telephone;
    this.password = password;
    this.role = role;
}


}