{
    // constraints 
    const addCourseToStudent = <T extends {name: string; email: string}>(student: T)=>{
        const course = 'web development course'
        return {
            ...student,
            course
        }
    } // here when we extends the property that means without this property no object can call this function.

    const student = addCourseToStudent({
        name: 'masud',
        email: 'masudrhmn6560@gmail.com',
        address: 'narayanganj'
    })
    // const student2 = addCourseToStudent({
    //     name: 'masud',
    //     // email: 'masudrhmn6560@gmail.com',
    //     address: 'narayanganj'
    // }) // here without email there will be error.
}