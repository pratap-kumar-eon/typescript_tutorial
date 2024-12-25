enum Roles {
    user="user",
    admin="admin"
}
type User={
    username:string;
    password:number;
    role:Roles;
}

const user1:User={
    username:"pratap",
    password:123,
    role:Roles.admin
}

const user2:User={
    username:"pooja",
    password:111,
    role:Roles.user
}

const checkRole = (user:User) =>{
    const {username,password,role} = user;

    return user.role==='admin' ? `${username} is allow to edit` : `${username} is not allow to edit`
}

console.log(checkRole(user1));
console.log(checkRole(user2));
