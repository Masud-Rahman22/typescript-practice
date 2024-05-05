{
    // polymorphism in oop means same method but giving different outputs for different class

    class Shape {
        getArea():number{
            return 0; 
        }
    }
    class Circle extends Shape {
        radius: number;
        constructor(radius: number){
            super()
            this.radius = radius;
        }
        getArea():number{
            return Math.PI  * this.radius * this.radius 
        }
    }
    class Rectangle extends Shape {
        height: number;
        width: number;
        constructor(height: number, width: number){
            super()
            this.height = height;
            this.width = width;
        }
        getArea():number{
            return this.height * this.width
        }
    }
    const shape1 = new Shape()
    const shape2 = new Circle(10)
    const shape3 = new Rectangle(10,20)

    console.log(shape3.getArea())

    // here same getArea method is giving different values for different classes this is called polymorphism.
}