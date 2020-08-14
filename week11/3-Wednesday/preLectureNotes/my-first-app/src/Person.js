

class Person {

    constructor(firstName, lastName) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.count = 0;
    }


    greeting() {

        this.count++;
        console.log(`${this.firstName} ${this.lastName} count ${this.count}`);
    }
}


let dan = new Person('Dan', 'Gelok');


dan.greeting()

let michael = new Person('Michael', 'Cortez');

michael.greeting();
michael.greeting();
michael.greeting();
dan.greeting()