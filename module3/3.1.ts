{
    // Object Oriented Programming
    // class
    class Animal {
        // public name: string;
        // public species: string;
        // public sound: string;

        constructor(public name: string, public species: string, public sound: string) {
            // this.name = name;
            // this.species = species;
            // this.sound = sound;
        } // by using parameter properties 'public' the initializing and defining is not necessary.

        makeSound() {
            console.log(`this ${this.species} name is ${this.name} make sound like ${this.sound}`);
        }
    }
    const dog = new Animal('Golden Retriever', 'dog', 'bhewwww')
    const cat = new Animal('persian', 'cat', 'meow')

    cat.makeSound()
}