

class Button {

    constructor() {
        this.count = 0; //instance variable
    }

    count_met() {

        this.count++; //incremented everytime count() is called
        console.log(this.count); //print out value of count when count()is called
    }

}

// create Button objects 

let button1 = new Button();
let button2 = new Button();

button1.count_met();
button1.count_met();
button1.count_met();

button2.count_met();

button1.count_met();