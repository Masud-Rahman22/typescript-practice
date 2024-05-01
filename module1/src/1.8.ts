{
    // object destructuring
    const me = {
        id: 1520,
        name: {
            firstName: 'masud',
            lastName: 'rahman'
        },
        contact: '01850556560',
        isMarried: 'waiting'
    }
    const { id, name: { lastName: name }, contact: phone } = me; // we can get the lastName value by this method and we can alias the name also. This is called name alias

    //array destructuring
    const friends = ['monica', 'rachel', 'phoebe', 'chandler', 'joey', 'ross']
    const [,,weirdOne,...rest] = friends; //here we used the rest operator for all the rest names and first two commas for first two elements and then we changed the name of phoebe to weirdOne.
}