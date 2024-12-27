
class Parent{   
    private _student:string | undefined
    constructor(public parentname:string){ }
    displayInfo():string{
        return `Parent name ${this.parentname} and Stuent name ${this._student}`
    }

    set student(name:string){
        if(name === this._student){
            throw new Error("Name duplicate")
        }
        this._student = name
    }

    get student():string{
        if(this._student === undefined){
            throw new Error("Name is undefined")
        }
        return this._student
    }
    
}

const p1:Parent = new Parent("Pooja");
p1.student = "pratap"
console.log(p1);
