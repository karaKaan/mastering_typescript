interface AddFn {
    (a: number, b:number): number,
}

let add: AddFn
add = (n1: number, n2:number) => {
    return n1+n2
}

interface Named {
    readonly name: string
    outputName?: string
}

interface Greetable extends Named{
    greet(phrase: string): void
}

class Person implements Greetable {
    name: string
    age = 30

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    greet(phrase: string): void {
        console.log(phrase, this.name);

        
    }
}

let user1 = new Person('john', 30)

user1.greet("Hello")
