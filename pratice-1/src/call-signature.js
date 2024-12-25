var stud1 = {
    name: 'richu',
    age: 3,
    greet: (function (country) { return "I am ".concat(stud1.name, " and age ").concat(stud1.age, ", from ").concat(country); })
};
console.log(stud1.greet('india'));
var myobj = function (input) {
    return "Hello ".concat(input);
};
var uname = myobj.username = "Pratap";
console.log(myobj(uname));

var cal = function (a, b, operation) {
    if (operation == 'add') {
        return "Addition:".concat(a + b);
    }
    if (operation == 'sub') {
        return "substration:".concat(a - b);
    }
};
console.log(cal(10, 20, "add"));
console.log(cal(12, 10, "sub"));
