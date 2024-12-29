var Student = /** @class */ (function () {
    function Student(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    Student.prototype.getInfo = function () {
        console.log("day la ".concat(this.name, " tuoi ").concat(this.age, " hoc lop ").concat(this.grade));
    };
    return Student;
}());
var student1 = new Student("manh", 20, "64ktrb");
student1.getInfo();
