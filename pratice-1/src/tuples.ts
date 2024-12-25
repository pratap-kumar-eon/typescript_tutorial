let username :[string,number,boolean,number] = ["pratap",1,true,30];

type Employee = [string,number,boolean];

const displayEmpinfo = (emp:Employee)=>{
    const [name,scale,loggedIn] = emp;
    console.log(`${name} , scale ${scale}, isLoggedIn ${loggedIn}`);
    
}
const emp1:Employee=['Pratap',1,true];
const emp2:Employee=['Pooja',2,false];

displayEmpinfo(emp1)
displayEmpinfo(emp2)



type ProductInfo = readonly [string,number,number];

const displayProduct = (product:ProductInfo) =>{
    const[name,price,quantity] = product;
    console.log(`Product name ${name}, Each Product Price is ${price} and Quantity in stock ${quantity}`);
    
}

const product1:ProductInfo=['iPhone',80000,2]
const product2:ProductInfo=['laptop',50000,7]

displayProduct(product1)
displayProduct(product2)