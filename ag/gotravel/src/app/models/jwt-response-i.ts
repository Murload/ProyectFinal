export interface JwtResponseI {
    responseuser :{
        id: any,
        name: String,
        lastname : String,
        email : String,
        accessToken : String,
        expiresIn : String
    }
}
