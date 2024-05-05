{
    // abstraction in oop can be implemented by two ways one is interface and the second one is abstract.

    // interface

    // here in interface all the methods are tagged void means we do not know what it will do but we have a slight idea which is start the engine , stop th engine and move the car.

    interface Vehicle1 {
        makeStartEngine(): void;
        makeStopEngine(): void;
        makeMove(): void;
    }

    class Car1 implements Vehicle1 {
        makeStartEngine(): void {
            console.log('i am starting the car engine')
        }
        makeStopEngine(): void {
            console.log('i am stopping the car engine')
        }
        makeMove(): void {
            console.log('i am moving the car')
        }
    }

    // abstract
    // abstract class can be referred as a leader class. We can inherit this class but we can not make an instance.
    abstract class Car2 {
        abstract makeStartEngine(): void // abstract method means we can not do anything like console log or anything we just know it does something abstractly
        abstract makeStopEngine(): void 
        abstract makeMove(): void 
        test(): void{
            console.log('i am testing the car')
        }
    }

    class ToyotaCar extends Car2 {
        //abstract class has to be implemented here others are inherited
        makeStartEngine(): void {
            console.log('i am starting the car engine')
        }
        makeStopEngine(): void {
            console.log('i am stopping the car engine')
        }
        makeMove(): void {
            console.log('i am moving the car')
        }
    }

    const hondaCar = new Car1()
    hondaCar.makeStartEngine()

}