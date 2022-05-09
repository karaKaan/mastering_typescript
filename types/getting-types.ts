// intersection
// type Admin = {
//     name: string
//     privileges: string[]
// }

// type Employee = {
//     name: string
//     startDate: Date
// }

// type ElevatedEmployee = Admin & Employee

interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

interface ElevatedEmployee extends Employee, Admin {}

const e1: ElevatedEmployee = {
  name: "John",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

const result = add(1, 5);
const resultString = add('Hello', 'World');
resultString.replace('world','')

const fetchedUserData = {
    id: 'u1',
    name: 'John',
    job: {title: 'CEO', description: 'My own company'}
}
console.log(fetchedUserData?.job?.title);

const userInputNull = null;
const storedDate = userInputNull ?? 'DEFAULT'



type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log("Name: ", emp.name);

  if ("privileges" in emp) {
    console.log("Privileges", emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Privileges", emp.startDate);
  }
}

class Car {
  drive() {
    {
      console.log("driving...");
    }
  }
}

class Truck {
  drive() {
    console.log("driving a truck...");
  }
  loadCargo(amount: number) {
    console.log("loading Cargo...", amount);
  }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Car();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

interface Bird {
  type: "bird";
  flyingSpeed: number;
}
interface Horse {
  type: "horse";
  runningSpeed: number;
}
type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("moving at speed: ", speed);
}

// const userInput = <HTMLInputElement>document.getElementById('user-input')!
// ! this exclamation mark declares that something will not be null
const userInput = document.getElementById("user-input") as HTMLInputElement;
userInput.value = "Hi There";

interface ErrorContainer {
  // index types
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Must start with a capital character",
};
