{
    //type assertion
    type CustomError = {
        message : String
    }
    try {
        
    } catch (error) {
        console.log((error as CustomError).message) // we can explicitly say the type of a variable if we are damn sure about it by using 'as'.
    }
}