{
    // type guard or type narrowing in oop using instance of

    class Animal {
        constructor(public name: string, public species: string){}
        makeSound(){
            console.log('animal is making sound')
        }
    }

    class Dog extends Animal{
        constructor(name: string, species: string){
            super(name, species)
        }
        makeBark(){
            console.log(`I am barking`)
        }
    }

    class Cat extends Animal{
        constructor(name: string, species: string){
            super(name, species)
        }
        makeMeaw(){
            console.log(`I am Meawing`)
        }
    }
    // this is a way
    // const getAnimal = (animal : Animal) =>{
    //     if(animal instanceof Dog){
    //         animal.makeBark()
    //     }
    //     else if(animal instanceof Cat){
    //         animal.makeMeaw()
    //     }
    //     else{
    //         animal.makeSound()
    //     }
    // }

    // if we do it smartly
    // here animal is Dog is used except boolean to understand that is animal is dog or cat surely.
    const isDog = (animal : Animal): animal is Dog =>{
        return animal instanceof Dog
    }
    const isCat = (animal : Animal): animal is Cat =>{
        return animal instanceof Cat
    }
    const getAnimal = (animal : Animal) =>{
        if(isDog(animal)){
            animal.makeBark()
        }
        else if(isCat(animal)){
            animal.makeMeaw()
        }
        else{
            animal.makeSound()
        }
    }

    const dog = new Dog('German Shepard', 'dog');
    const cat = new Cat('Mix Breed', 'cat');
}