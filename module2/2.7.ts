{
    // constraints using key of

    const getPropertyValue = <T , Q extends keyof T> (obj: T, key: Q) =>{
        return obj[key];
    } // keyof means all the keys of an object like this object names myself and all the keys are name, age, isMarried. This is also like 'name' | 'age' | 'isMarried'.

    const myself = {
        name: 'masud',
        age: 25,
        isMarried: false
    }

    // here the comments are to understand keyof.

    // type Myself3 = {
    //     name: string,
    //     age: number,
    //     isMarried: boolean
    // }

    // type Myself = 'name' | 'age' | 'isMarried'

    // type Myself2 = keyof Myself3

    const getProperty = getPropertyValue(myself, 'age')
}