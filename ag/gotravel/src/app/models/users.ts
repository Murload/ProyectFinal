// const url_api = 'http://localhost:3000/api/entry';


export class users{

//     _id? : any;
//     name: string;
//     lastname : string;
//     email : string;
//     password : any;
//     telephone : number;
//     role : string;

//     constructor(name: string, lastname : string, email : string, telephone : number, password : string, role : string  )
//     {

//     this.name = name;
//     this.lastname = lastname;
//     this.email = email;
//     this.telephone = telephone;
//     this.password = password;
//     this.role = role;
// }

//   imprimirNombre(){
//     console.log(this.name);
//   }


  constructor(

    public _id? : any,
    public name?: string,
    public lastname?: string,
    public email?: string,
    public password?: any,
    public telephone?: number,
    public role?: string,
    public privatetrips?: Array<Object>

  ) {}

  // get trips() {
  //   return `${url_api}`

  // }
}
