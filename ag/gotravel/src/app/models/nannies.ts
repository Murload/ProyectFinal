export class Nannie{
    _id?: any;
    name: string;
    lastName: string;
    country: string;
    bornCountry: string;
    age: number;
    description: string;
    price: number;
    experience: string;
    criminalRecord: boolean;
    available: boolean;
    phone: number;

    constructor(name: string, lastName: string, country: string, bornCountry: string, 
        age: number, description: string, price: number,
    experience: string, criminalRecord: boolean, available: boolean, phone: number){
        this.name = name;
        this.lastName = lastName;
        this.country = country;
        this.bornCountry = bornCountry;
        this.age = age;
        this.description = description;
        this.price = price;
        this.experience = experience;
        this.criminalRecord = criminalRecord;
        this.available = available;
        this.phone = phone;
        }
    }