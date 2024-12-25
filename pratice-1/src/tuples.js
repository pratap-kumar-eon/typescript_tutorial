var username = ["pratap", 1, true, 30];
var displayEmpinfo = function (emp) {
    var name = emp[0], scale = emp[1], loggedIn = emp[2];
    console.log("".concat(name, " , scale ").concat(scale, ", isLoggedIn ").concat(loggedIn));
};
var emp1 = ['Pratap', 1, true];
var emp2 = ['Pooja', 2, false];
displayEmpinfo(emp1);
displayEmpinfo(emp2);
var displayProduct = function (product) {
    var name = product[0], price = product[1], quantity = product[2];
    console.log("Product name ".concat(name, ", Each Product Price is ").concat(price, " and Quantity in stock ").concat(quantity));
};
var product1 = ['iPhone', 80000, 2];
var product2 = ['laptop', 50000, 7];
displayProduct(product1);
displayProduct(product2);
