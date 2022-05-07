var add;
add = function (n1, n2) {
    return n1 + n2;
};
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.age = 30;
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase, this.name);
    };
    return Person;
}());
var user1 = new Person('john', 30);
user1.greet("Hello");
