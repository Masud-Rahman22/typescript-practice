const user : {
    firstName: string;
    middleName?: string; // optional type
    lastName: string;
    age: '24'; // literal types means fixed value
    readonly religion: string; //access modifier readOnly it means you can not change the value just like literal types
} = {
    firstName: 'Masud',
    lastName: 'Rahman',
    age: '24',
    religion: 'islam',
}
