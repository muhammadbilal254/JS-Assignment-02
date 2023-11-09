// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// var cityName = prompt("Enter City name");
// if (cityName.toLowerCase() == "karachi") {
//   alert("Welcome To the City of Lights.");
// } else {
//   alert("Welcome To the " + cityName);
// }

//// ----------

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// var gender = prompt("Enter Gender");
// if (gender == male) {
//   alert("Good Morning Sir");
// } else {
//   alert("Good Morning Ma'am");
// }

//// ----------

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

// var color = prompt("Enter Color");
// if (color == "red") {
//   alert("Must Stop");
// } else if (color == "yellow") {
//   alert("Ready to Move");
// } else {
//   alert("Move now");
// }

//// ----------

// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

// var fuel = +prompt("Enter Fuel");
// if (fuel < 0.25) {
//   alert("Please refill the fuel in your car");
// } else {
//   alert("You are good to go");
// }

//// ----------

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

// var a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true");
// } // show

// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");
// } // not show

// var c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// } // not show

// if (c === 13) {
//   alert("condition 2 is true");
// } // show

// if (++c < 14) {
//   alert("condition 3 is true");
// } // not show

// if (c === 14) {
//   alert("condition 4 is true");
// } // show

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// } // show

// if (true) {
//   alert("True");
// } //show

// if (false) {
//   alert("False");
// } // not show

// if ("car" < "cat") {
//   alert("car is smaller than cat");
// } // show

//// ----------

// Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

// var sub1 = prompt("Enter Subject1 Name");
// var sub2 = prompt("Enter Subject2 Name");
// var sub3 = prompt("Enter Subject3 Name");
// var total = 100; //for each subject

// var marks1 = +prompt("Enter Marks1 ");
// var marks2 = +prompt("Enter Marks2 ");
// var marks3 = +prompt("Enter Marks3 ");

// var percentage = ((marks1 + marks2 + marks3) * 100) / (total + total + total);
// var grade;
// var remarks;

// if (percentage >= 80 && percentage <= 100) {
//   grade = "A-one";
//   remarks = "Excelent";
// } else if (percentage >= 70 && percentage < 80) {
//   grade = "A";
//   remarks = "Good";
// } else if (percentage >= 60 && percentage < 70) {
//   grade = "B";
//   remarks = "You need to Improve";
// } else if (percentage < 60) {
//   grade = "Fail";
//   remarks = "Sorry, Keep work hard for your next time";
// } else {
//   grade = "invalid";
//   remarks = "";
// }

// document.write("<h1>Marksheet</h1>");
// document.write(
//   "<h1> Subject     Total Marks   obtained Marks     Percentage</h1>"
// );

// document.write(
//   "<p> " +
//     sub1 +
//     "     " +
//     total +
//     "   " +
//     marks1 +
//     "     " +
//     (marks1 * 100) / total +
//     "%</p>"
// );
// document.write(
//   "<p> " +
//     sub2 +
//     "     " +
//     total +
//     "   " +
//     marks2 +
//     "     " +
//     (marks2 * 100) / total +
//     "%</p>"
// );
// document.write(
//   "<p> " +
//     sub3 +
//     "     " +
//     total +
//     "   " +
//     marks3 +
//     "     " +
//     (marks3 * 100) / total +
//     "%</p>"
// );

// document.write(
//   "<p><b>   " +
//     (total + total + total) +
//     "   " +
//     (marks1 + marks2 + marks3) +
//     "     " +
//     ((marks1 + marks2 + marks3) * 100) / (total + total + total) +
//     "%</b></p>"
// );

// document.write("<h2>Grade " + grade + "</h2>");
// document.write("<h2>Remarks " + remarks + "</h2>");

//// ----------

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// var secret = 10;
// var user;

// while (true) {
//   user = prompt("Enter Number or x for exit");
//   if (secret == user) {
//     alert("Bingo! Correct answer");
//     break;
//   } else if (user - 1 == secret || user + 1 == secret) {
//     alert("Close enough to the correct answer");
//   } else if (user == "x") {
//     alert("you lose");
//     break;
//   } else {
//     alert("You are too far");
//   }
// }

/// ---------------------------
// Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// var a = +prompt("Number");

// if (a % 3 == 0) {
//   alert(a + " is divisible by 3");
// } else {
//   alert(a + " is not divisible by 3");
// }

///----------------------
// 9. Write a program that checks whether the given input is an
// even number or an odd number.

// var a = +prompt("Numer");
// if (a % 2 == 0) {
//   alert("even");
// } else {
//   alert("odd");
// }

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var t = +prompt("Enter Temperature");
// if (t > 40) {
//   alert("It is too hot outside");
// } else if (t > 30) {
//   alert("The Weather today is Normal.");
// } else if (t > 20) {
//   alert("Today's Weather is cool.");
// } else if (t > 20) {
//   alert("OMG! Today’s weather is so Cool.");
// }

// Input from the user
var a = parseFloat(prompt("Enter the first number:"));
var b = parseFloat(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");

var result;

// Perform the calculation based on the operation
if (operation === "+") {
  result = a + b;
} else if (operation === "-") {
  result = a - b;
} else if (operation === "*") {
  result = a * b;
} else if (operation === "/") {
  if (b === 0) {
    result = "Cannot divide by zero";
  } else {
    result = a / b;
  }
} else if (operation === "%") {
  if (b === 0) {
    result = "Cannot divide by zero";
  } else {
    result = a % b;
  }
} else {
  result = "Invalid operation";
}

// Display the result
alert("Result: " + result);
