{
    // type guards in typescript

    // typeof
    type Alphanumeric = string | number;

    const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    }
    const result = add('2', 3)
    console.log(result)

    // type in
    type NormalUser = {
        name: string;
    }
    type AdminUser = {
        name: string;
        role: string;
    }

    type UserType = NormalUser | AdminUser

    const identifyUser = (user: UserType) => {
        if ('role' in user){
            console.log(`this is ${user.name} and the role is ${user.role}`)
        }
        else{
            console.log(`the user is ${user.name}`)
        }
    }

    const normalUser : NormalUser = {
        name: 'Normal User'
    } 
    const adminUser : AdminUser = {
        name: 'Admin User',
        role: 'Admin',
    } 

    identifyUser(adminUser)
}