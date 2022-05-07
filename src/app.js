var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        //   private name: string = "Default";
        this.employees = [];
        //   this.id=
        // this.name = n
    }
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInfo = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.fiscalYear = 2022;
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log('IT department', this.name);
    };
    ITDepartment.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ITDepartment('01', ['s']);
    };
    return ITDepartment;
}(Department));
var fiscalYear = Department.fiscalYear;
var createEmployee = Department.createEmployee('John');
console.log(fiscalYear, createEmployee);
// const accounting = new Department('01','Accounting')
// console.log(accounting);
// accounting.describe()
// accounting.addEmployee('john')
// accounting.addEmployee('sarah')
// accounting.printEmployeeInfo()
