{
    // mapped types
    type AreaNumbers = {
        height: number;
        width: number;
    }

    type AreaStrings1 = {
        [key in keyof AreaNumbers] : string;
    }
    // lookup types 

    const area = {
        height: 500,
        width: 300
    }
    const propertyType = area["width"] // this is lookup types.

    type AreaStrings<T> = {
        [key in keyof T] : T[key]; // this is like map method key is the properties of object and then it loops inside the array and then it makes each property string. T[key] is using lookup types.
    }

    type Area = {height: string, width: number}

    const area1 : AreaStrings<Area>={
        height: '100',
        width: 100,
    }

}