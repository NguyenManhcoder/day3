class Student{
    name:string;
    age:number;
    grade:string

    constructor (name:string,age:number,grade:string){
        this.name = name;
        this.age = age;
        this.grade = grade
    }

    getInfo():void{
        console.log(`day la ${this.name} tuoi ${this.age} hoc lop ${this.grade}`)
    }
}

const student1 = new Student("manh",20,"64ktrb")

student1.getInfo()

class BankAccount{
    accountNumber:number;
    balance:number;
    

    constructor (accountNumber:number,balance:number){
        this.accountNumber = accountNumber;
        this.balance = balance
    }

    deposit(amount:number):void{
        console.log(`So du hien tai cua ban la ${this.balance + amount}`)
    }

    withdraw(amount:number):void{
        console.log(`So du sau khi rut la ${this.balance - amount}`)
    }
}

const bank1 = new BankAccount(789291313,15000)
bank1.deposit(4000)
bank1.withdraw(1000)

