{
    // type alias for object

    type Student = {
        name: string,
        age: number,
        contact: string,
        address: string
    }

    const student1 : Student = {
        name: 'Masud',
        age: 25,
        contact: '01650556560',
        address: 'narayanganj',
    }

    // type alias can be used in string too
    type Name = string;
    const name : Name= 'Masud Rahman'

    // type alias can be used in function too
    type Add = (num1: number, num2: number)=> Number;
    const add : Add = (num1, num2) =>{
        return num1 + num2;
    }
}