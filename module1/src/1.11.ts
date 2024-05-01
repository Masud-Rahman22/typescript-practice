{
    const age: number = 20

    // if (age >= 18) {
    //     console.log('adult')
    // } else {
    //     console.log('not adult')
    // }

    // ternary operator
    const isAge = age >= 18 ? 'adult' : 'not adult';
    console.log(isAge)

    // nullish coalescing
    const isAuthenticated = null; // it only works when we use null or undefined 
    const checking = isAuthenticated ?? 'Guest'
    console.log({ checking })

    // optional chaining
    type Me = {
        name: 'masud',
        age: 18,
        address : {
            presentAddress: string,
            permanentAddress?: string
        }
    }

    const me : Me = {
        name: 'masud',
        age: 18,
        address: {
            presentAddress: 'narayanganj'
        }
    }
    const permanentAddress = me?.address?.permanentAddress ?? 'dhaka'; //using nullish coalescing because permanentAddress is undefined here.
    console.log({permanentAddress})
}