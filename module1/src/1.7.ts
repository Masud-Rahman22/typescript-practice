{
    const friends1: string[] = ['nitol', 'tahsina', 'iqbal']
    const friends2: string[] = ['masud', 'rahman', 'aubhi']

    friends1.push(...friends2) // spread operator it spreads the elements of an array. we can use it for object too.

    const greetFriends = (...friends: string[]) =>{
        friends.forEach((friend : string) =>
            console.log(`hello ${friend}`)
        )
    }

    greetFriends('nitol', 'tahsina', 'iqbal') // this is rest operator this operator combines all the elements and make an array just the opposite of spread operator.

}