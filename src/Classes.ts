abstract class Department {
//   private name: string = "Default";
  private employees: string[] = []
  static fiscalYear = 2022

  constructor(private readonly id: string, public name: string) {
    //   this.id=
    // this.name = n
  }

  abstract describe(this: Department):void
  addEmployee(employee: string){
      this.employees.push(employee)
  }

  printEmployeeInfo(){
      console.log(this.employees.length)
      console.log(this.employees)
  }
  static createEmployee(name:string){
      return {name}
  }
}

class ITDepartment extends Department {
    private static instance: ITDepartment
    private constructor(id:string, public admins: string[]){
        super(id, 'IT')
    }
    describe() {
        console.log('IT department', this.name);
        
    }
    static getInstance(){
        if(this.instance){
            return this.instance
        }
        this.instance = new ITDepartment('01',['s'])
    }
}

const fiscalYear = Department.fiscalYear
const createEmployee = Department.createEmployee('John')
console.log(fiscalYear, createEmployee);

// const accounting = new Department('01','Accounting')
// console.log(accounting);
// accounting.describe()

// accounting.addEmployee('john')
// accounting.addEmployee('sarah')
// accounting.printEmployeeInfo()