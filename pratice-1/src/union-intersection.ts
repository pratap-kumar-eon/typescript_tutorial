type Ustudent={
    name:string;
    rollno:number
}

type Ubranch={
    section:string;
    total:number
}

type UstudentInfo = Ustudent|Ubranch

const std1:UstudentInfo={
    name:"pratap",
    rollno:12,
    
}
const std2:UstudentInfo={
   section:"C",
   total:20
}

const studentInfo = (ustudent:Ustudent)=>{
    console.log(`Student Name ${ustudent.name}`);
    
};

studentInfo(std1)

const score : (string | number)[] = [1,"12"]

type IstudentInfo = Ustudent&Ubranch

const istd1:IstudentInfo={
    name:"pratap",
    rollno:12,
    section:"C",
    total:20
}