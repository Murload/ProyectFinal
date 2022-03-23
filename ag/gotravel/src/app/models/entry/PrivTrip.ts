export class PrivTrip {

    _id?: any;
    name: string;
    origin: string;
    destiny: string;
    date: Date;
    passengers: number;
    budget: number;
    wishlist: Array<string>; // cambiar a Array<string> por si se requiere
    nannies: object;

    constructor( name:string, origin:string, destiny:string, date:Date, passengers:number, budget: number, wishlist:Array<string>, nannies: object) {

      this.name = name;
      this.origin = origin;
      this.destiny = destiny;
      this.date = date;
      this.passengers = passengers;
      this.budget = budget;
      this.wishlist = wishlist;
      this.nannies = nannies;
    }

}
