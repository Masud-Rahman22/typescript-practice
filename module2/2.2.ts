{
    // for all primitive we should use type alias and for object we can use interface along with type alias.
    // interface for object

    type User1 = {
        name: string;
        age: number;
    }
    interface User2 {
        name: string;
        age: number;
    }

    type UserWithRole1 = User1 & { role: string } // for type alias we use intersection to extend.

    interface UserWithRole2 extends User2 {
        role: string
    } // for interface we use 'extends' to extend interface

    const user: UserWithRole2 = {
        name: 'masud',
        age: 25,
        role: 'student'
    }

    // interface for array

    interface Roll {
        [index : number] : number
    }
    const roll : Roll = [1,2,3]

    // interface for function

    interface Add {
        (num1 : number, num2 : number, num3 : number) : number
    }
    const add : Add = (num1,num2,num3) => num1 + num2 + num3
}