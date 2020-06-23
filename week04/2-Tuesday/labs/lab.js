// // Declare a variable called "firstName" whose value is your first name 
// var firstName = "Micah";
// // Declare a variable called "lastName" whose value is your first name 
// var lastName = "Peterson";
// // Declare a variable called "name" whose value is the concatenation of firstName and lastName
// var name = firstName +" " +lastName;
// // Print name to the console
// console.log(name);
// // Declare a variable called a with a value of 2 
// var a = 2;
// //Declare a variable called b witha value of 3 
// var b = 3;
// // Declare a variable x whose value is a + b 
// var x = a + b;
// // Print x  to the screen 
// console.log(x);
// // Add the string "5" to x and print the result
// x = "5" + x;
// console.log(x);
// // Print the number of characters in firstName
// console.log(firstName.length);
// If else, fizz buzz
// for(i = 1; i <=100; i++)
// {
//     if(i%3==0 && i%5==0)
//     {
//         console.log("fizz buzz");
//     }

//     else if(i%5==0)
//     {
//         console.log("fizz");
//     }

//     else if(i%3==0)
//     {
//         console.log("buzz");
//     }

//     else
//     {
//         console.log(i);
//     } 
// }

//if condition into switch case

// var fruit = "Papaya";

// if(fruit == "Orange")
// {
//     console.log("I'm an orange.");
// }
// else if(fruit == "Mango")
// {
//     console.log("I'm a mango.");
// }
// else if (fruit == "Papaya")
// {
//     console.log("I'm a papaya.");
// }
// else
// {
//     console.log("You ain't got no " +fruit);
// }

// switch(fruit)
// {
//     case "Orange":
//         console.log("Im an orange.");
//         break;
//     case "Mango":
//         console.log("Im a mango.");
//         break;
//     case "Papaya":
//         console.log("Im a papaya.");
//         break;
//     default:
//         console.log("No fruit here.");
//         break;
// }

// var day = "Tuesday";

// switch(day)
// {
//     case "Monday":
//         console.log("Monday");
//         break;
//     case "Tuesday":
//         console.log("Tuesday");
//         break;
//     case "Wednesday":
//         console.log("Wednesday");
//         break;
//     case "Thursday":
//         console.log("Thursday");
//         break;
//     case "Friday":
//         console.log("Friday");
//         break;
//     case "Saturday":
//         console.log("Saturday");
//         break;
//     case "Sunday":
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Not a day of the week.");
//         break;
// }

// for(var i=2;i<20;i+=2)
// {
//     console.log("for: " +i)
// }


// var count = 2;
// while(count <= 20)
// {
//     console.log("while: " +count);
//     count += 2;
// }


// var lottoNums = [2,true,"string",5.0];
// lottoNums.push("pushed");

// lottoNums[1]=false;

// lottoNums.pop();

// console.log(lottoNums);

// var days = ["Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"];


// for(var i=0;i<7;i++)
// {
//     console.log(days.shift());
// }

//splice(begin,num of items u want remove) DOES mutates and slice(start,end of slice) does NOT mutate

var lottoNums = [4,8,15,16,23,42]

lottoNums.slice(1,3);
console.log(lottoNums);

//AGAIN -- SPLICE MUTATES ORIGINAL AND SLICE DOES NOT
// PARAMETERS ARE ALSO A LITTLE DIFFERENT

// // ternary operator