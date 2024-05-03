{
    // generics
    type GenericArray<T> = Array<T>; // generic array using dynamic value [T just a convention and it is referring params]

    // const arrayOfNumber : Array<number> = [1,2,3,4]
    const arrayOfNumber : GenericArray<number> = [1,2,3,4]
    // const arrayOfString : Array<string> = ['1','2','3','4']
    const arrayOfString : GenericArray<string> = ['1','2','3','4']
    // const arrayOfBoolean : Array<boolean> = [true, false, true]
    const arrayOfBoolean : GenericArray<boolean> = [true, false, true]

    // for array fo objects

    const myself : GenericArray<{name: string, age: number}> = [
        {
            name: 'masud',
            age: 25,
        },
        {
            name: 'nitol',
            age: 25,
        },
    ]

    //  for tuples
    type GenericTuple<x,y> = [x,y] 

    const userWithId : GenericTuple<number, {name: string,age: number}>= [1234, {name: 'John', age: 19}]
}