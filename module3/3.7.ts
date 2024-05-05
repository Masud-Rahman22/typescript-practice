{
    // static in oop
    class Counter {
        static count: number = 0; // when we use static we have to use the class name when we use this count.
        static increment(){
            return (Counter.count = Counter.count + 1);
        }
        static decrement(){
            return (Counter.count = Counter.count - 1);
        }
    }
    // const instance1 = new Counter();
    console.log(Counter.increment())
    // const instance2 = new Counter();
    console.log(Counter.decrement())

}