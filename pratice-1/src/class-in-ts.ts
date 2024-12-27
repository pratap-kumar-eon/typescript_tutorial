class StudentClass{
    name:string;
    rollno:number
    constructor(sname:string,srollno:number){
        this.name=sname;
        this.rollno=srollno
    }
}

const s1 = new StudentClass('pooja',1);
console.log(s1);

