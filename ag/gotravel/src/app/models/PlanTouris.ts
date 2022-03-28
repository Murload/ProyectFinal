export class Tourimsplan{
    _id? : any;
    Place_name : string;
    Hosting_name : string;
    Flight : string;
    Arrival : any;
    Departure : any;
    Total_Price : number;
    Details: string

    constructor( place_name : string,  hosting_name : string, flight : string, arrival : any,  departure : any, total_price : number ,details : string){

        this.Place_name = place_name;
        this.Hosting_name = hosting_name;
        this.Flight = flight;
        this.Arrival = arrival;
        this.Departure = departure;
        this.Total_Price = total_price;
        this.Details =details;
    }




}