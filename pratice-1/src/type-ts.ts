type Person={
    name:string;
    email:string;
    address:{city:string};
    phone:number;
}

const person1:Person={
    name:"pooja",
    email:"pooja@pooja.com",
    address:{
        city:'bam'
    },
    phone:12344
}

console.log(person1.phone);
