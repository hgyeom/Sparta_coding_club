function Student(name, gender, school) {
    this.name = name;
    this.gender = gender;
    this.school = school;
}

function Employee(name, gender, company) {
    this.name = name;
    this.gender = gender;
    this.company = company;
}

function Person(name, gender) {
    this.name = name;
    this.gender = gender;
};

function Student(name, gender, school) {
    Person.call(this, name, gender)
    this.school = school;
};

function Employee(name, gender, company) {
    Person.call(this, name, gender)
    this.company = company;
};

let kd = new Student('홍길동', 'male', '서울대');
let ks = new Employee('홍길순', 'female', '삼성');

console.log(kd)
console.log(ks)