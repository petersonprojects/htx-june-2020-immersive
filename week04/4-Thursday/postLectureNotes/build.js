

// retreive element from dom
//create an element 
// add the attributes 


var body = document.querySelector('body');

// main container
var container = document.createElement('div');
container.setAttribute('class', 'container-fluid bg-warning')


// navbar  (attached to main container)

var nav = document.createElement('nav');

nav.setAttribute('class', 'navbar navbar-expand navbar-dark p-4');
nav.setAttribute('style', 'background-color: rgb(82, 167, 250); ')

// inner nav div 

var navDiv = document.createElement('div');
navDiv.setAttribute('class', 'nav navbar-nav h3');


// creating links for nav bar 

var a1 = document.createElement('a');
a1.setAttribute('class', 'nav-item nav-link active');
a1.setAttribute('href', '#');
a1.textContent = "HighOnCoding";
 

var a2 = document.createElement('a');
a2.setAttribute('class', 'nav-item nav-link active small pl-5')
a2.setAttribute('href', '#');
a2.textContent = "Home";

var a3 = document.createElement('a');
a3.setAttribute('class', 'nav-item nav-link small pl-5')
a3.setAttribute('href', '#');
a3.textContent = "Categories";


navDiv.appendChild(a1);
navDiv.appendChild(a2);
navDiv.appendChild(a3);


nav.appendChild(navDiv);

container.appendChild(nav);



//gray section 




// hello watch kit section 


//yellow footer

body.appendChild(container)

