"use strict";
class Person {
    constructor(n, g) {
        this.name = n;
        this.gender = g;
    }
    welcome() {
        console.log(`hello,how are you`);
    }
}
class Student extends Person {
    constructor(n, g, r) {
        super(n, g);
        this.rollNum = r;
    }
    welcome() {
        console.log(`hello ${this.name}`);
    }
}
class Teacher extends Person {
    constructor(n, g, e) {
        super(n, g);
        this.email = e;
    }
    welcome() {
        super.welcome();
    }
}
let t = new Teacher("Malaika", "M", "abc@abc.com");
console.log(t.welcome());
