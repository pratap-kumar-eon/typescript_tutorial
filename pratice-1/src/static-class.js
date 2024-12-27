var Sum = /** @class */ (function () {
    function Sum() {
    }
    Sum.add = function (a, b) {
        return a + b;
    };
    Sum.a = 10;
    return Sum;
}());
console.log(Sum.a);
console.log(Sum.add(10, 20));
