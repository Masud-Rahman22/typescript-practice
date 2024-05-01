{
    // nullable types means we can union null here if nothing is provided then null
    const searchName = (name: string | null) => {
        if (name) {
            console.log(`hello dear ${name}`)
        } else {
            console.log('no name provided')
        }
    }
    searchName(null)

    // unknown types means the type is unknown until it is assigned with a type.

    const speedToMeter = (speed: unknown) => {
        if (typeof speed === 'number') {
            console.log(`this is speed ${speed}`)
        }
        else if (typeof speed === 'string') {
            console.log(`this is speed ${speed} in string`)
        }
        else {
            console.log('wrong input is provided')
        }
    }
    speedToMeter('20')

    // never types it means this will never run.

    const makeError = (message: string):never=>{
        throw new Error(message)
    } 
    makeError('error ho gaya')
}