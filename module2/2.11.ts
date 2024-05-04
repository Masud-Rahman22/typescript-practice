{

    // utility types
    // pick type

    type Myself = {
        name: string;
        age: number;
        email?: string;
        address: string;
    }

    type PickProperty = Pick<Myself, 'name' | 'age'>

    // omit type means all property except that property

    type OmitProperty = Omit<Myself, 'address'>

    // Required type

    type RequiredProperty = Required<Myself>

    // partial type

    type PartialProperty = Partial<Myself>

    // ReadOnly type

    type ReadOnlyProperty = Readonly<Myself>

    const aboutMe: ReadOnlyProperty = {
        name: 'rahman',
        age: 24,
        address: 'Dhaka'
    }

    // aboutMe.age = 23; // can not alter readonly property

    /*
    properties of object are always string type and index of array is number
    */

    // record type

    type MyObj = Record<string, string>

    const emptyObj : Record<string, unknown> = {} // this is very important we will use it in our future projects.

    const myObj : MyObj = {
        a: 'a',
        b: 'b',
        c: 'c',
    }
}