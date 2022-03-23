export class Nannies {

    _id?: any;
    name: string;
    lastname: string;
    country: string;
    bornCountry: Date;
    age: number;
    description: string;
    price: number;
    experience: string;
    criminalRecord: Boolean;
    disp: Boolean;

    constructor( name:string,
      lastname: string,
      country: string,
      bornCountry: Date,
      age: number,
      description: string,
      price: number,
      experience: string,
      criminalRecord: Boolean,
      disp: Boolean,) {

      this.name = name;
      this.lastname = lastname;
      this.country = country;
      this.bornCountry = bornCountry;
      this.age = age;
      this.description = description;
      this.price = price;
      this.experience = experience;
      this.criminalRecord =  criminalRecord;
      this.disp =  disp;
    }

}
