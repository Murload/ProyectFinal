export class Nannie{
    _id?: any;
    name!: string;
    lastName!: string;
    country!: string;
    bornCountry!: string;
    age!: number;
    description!: string;
    price!: number;
    experience!: string;
    criminalRecord!: boolean;

    Constructor(name: string, lastName: string, country: string, bornCountry: string, 
        age: number, description: string, price: number,
    experience: string, criminalRecord: boolean){
        this.name = name;
        this.lastName = lastName;
        this.country = country;
        this.bornCountry = bornCountry;
        this.age = age;
        this.description = description;
        this.price = price;
        this.experience = experience;
        this.criminalRecord = criminalRecord
    }
}