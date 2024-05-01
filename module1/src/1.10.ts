{
    // union
    type Person = {
        name: 'masud',
        age : 25,
        bloodGroup: 'A+' | 'AB+' | 'B+',
        email?: string //optional it means one can avoid it if he or she wants to
    }
    const person : Person = {
        name: 'masud',
        age: 25,
        bloodGroup: 'AB+' //we can choose one of these elements this is union like the or of js ||.
    }
    // intersection
    type FrontendDeveloper = {
        skills: string[],
        tag1: 'FrontendDeveloper'
    }
    type BackendDeveloper = {
        skills: string[],
        tag2: 'BackendDeveloper'
    }
    type Developer = FrontendDeveloper & BackendDeveloper // this is called intersection it is used to combine different things together just like the && operator in javascript.
    const fullstackDeveloper : Developer = {
        skills: ['react', 'express', 'mongoose'],
        tag1: 'FrontendDeveloper',
        tag2: 'BackendDeveloper'
    }
}