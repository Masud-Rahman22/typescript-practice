{
    // generic with functions
    const createGenericArray = <T, X>(param: T, param2: X) => {
        return [param, param2]
    }

    type CountryInfo = {isPopulated: boolean, capital: string}

    // const res1 = createGenericArray('bangladesh')
    const res2 = createGenericArray<string, CountryInfo >('bangladesh', {
        isPopulated: true,
        capital: 'Dhaka'
    })

    // for tuple

    const createGenericArrayWithTuple = <T,Q> (param1: T, param2: Q) : [T,Q]=> {
        return [param1, param2]
    }

    const res3 = createGenericArrayWithTuple<string, number>('masud', 25)

    //  with fixed value

    const addCourseToStudent = <T>(student: T)=>{
        const course = 'web development course'
        return {
            ...student,
            course
        }
    }

    const student = addCourseToStudent({
        name: 'masud',
        email: 'masudrhmn6560@gmail.com'
    })
}