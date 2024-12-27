var Parent = /** @class */ (function () {
    function Parent(parentname) {
        this.parentname = parentname;
    }
    Parent.prototype.displayInfo = function () {
        return "Parent name ".concat(this.parentname, " and Stuent name ").concat(this._student);
    };
    Object.defineProperty(Parent.prototype, "student", {
        set: function (name) {
            if (!name) {
                throw new Error("Name duplicate");
            }
            this._student = name;
        },
        enumerable: false,
        configurable: true
    });
    return Parent;
}());
var p1 = new Parent("Pooja");
p1.student = "pratap";
console.log(p1.student);
