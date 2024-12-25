var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
var user1 = {
    username: "pratap",
    password: 123,
    role: Roles.admin
};
var user2 = {
    username: "pooja",
    password: 111,
    role: Roles.user
};
var checkRole = function (user) {
    var username = user.username, password = user.password, role = user.role;
    return user.role === 'admin' ? "".concat(username, " is allow to edit") : "".concat(username, " is not allow to edit");
};
console.log(checkRole(user1));
console.log(checkRole(user2));
