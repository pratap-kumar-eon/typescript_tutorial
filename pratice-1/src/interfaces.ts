interface IStudent{
    name:string;
    username:string;
    isLoggedIn:boolean;
}

interface IMarks extends IStudent{
    marks:number;
    grade:string;
}

const stu1:IMarks ={
    name:"Pratap",
    username:"user1",
    isLoggedIn:true,
    marks:500,
    grade:'A+'
}

const displayStudent = (student:IMarks)=>{
    return `Name ${student.name} have marks ${student.marks}`;
}

console.log(displayStudent(stu1))
