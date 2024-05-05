{
    // inheritance in oop
    // parent
    class Person {
        // name: string;
        // age: number;
        // address: string;

        constructor(public name: string, public age: number, public address: string) {
            // this.name=name;
            // this.age=age;
            // this.address=address;
        }

        getSleep(numOfHours: string){
            console.log(`${this.name} will get ${numOfHours} of sleep`)
        }
    }

    // child 1

    class Student extends Person{
        constructor(public name: string, public age: number, public address: string){
            super(name, age, address); // by calling super we pass parameters from child to parent constructor
        }
    }
    const student = new Student('masud', 25, 'narayanganj');
    student.getSleep('1hr')

    // child 2 

    class Teacher extends Person{
        constructor(public name: string, public age: number, public address: string, public designation: string){
            super(name, age, address);
        }

        takeClass(numOfHours: string){
            console.log(`${this.name} will take ${numOfHours} class`)
        }
    }

    const teacher = new Teacher('nitol', 25 , 'zinzira', 'professor');
    teacher.takeClass('2hr')
}