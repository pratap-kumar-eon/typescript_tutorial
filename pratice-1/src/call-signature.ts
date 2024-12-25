type Student={
    name:string;
    age:number;
    greet:(country:string) => string
}

const stud1:Student={
    name:'richu',
    age:3,
    greet:((country)=>`I am ${stud1.name} and age ${stud1.age}, from ${country}`)
}

console.log(stud1.greet('india'));

type MyObject={
    (input:string):string;
    username:string;
}

const myobj:MyObject= (input:string)=>{
    return `Hello ${input}`;

}
const uname = myobj.username="Pratap"
console.log(myobj(uname));

// calculate add & mul

type Calculator={
    (a:number,b:number,operation:string):unknown;
}

const cal:Calculator= (a:number,b:number,operation:string)=>{
    if(operation == 'add'){
        return `Addition:${a+b}`;
    }
    if(operation == 'sub'){
        return `substration:${a-b}`;
    }
}

console.log(cal(10,20,"add"));
console.log(cal(12,10,"sub"));

