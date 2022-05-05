// Object types

// Usually best practise is not to write the type of an object when declaring
// !!! BUT in this scenario it is important for role to be a tuple AND THE TYPE NEEDS to be declared explicitly
// const person: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: [number,string] // tuple
// } = {
//     name: 'John',
//     age: 20,
//     hobbies: ['sports', 'cooking'],
//     role: [2, 'author'],
// }

// let favActivity: string[]
// favActivity = ['sports']

// console.log(person);

// for(const hobby of person.hobbies){
//     console.log(hobby.toUpperCase())
// }


// ENUMS

enum Role {ADMIN, READ_ONLY, AUTHOR}

const person = {
    name: 'John',
    age: 20,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN,
}

if(person.role === Role.ADMIN) {
    console.log("is admin");
    
}
