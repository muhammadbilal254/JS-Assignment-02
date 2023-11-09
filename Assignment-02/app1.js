// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

var a = +prompt("Enter value");

document.write("The amount of a is " + a);
document.write("<br/>");
document.write("----------------------------");
document.write("<br/>");

document.write("The value of ++a is " + ++a);
document.write("<br/>");
document.write("Now the value of a is " + a);
document.write("<br/>");

document.write("The value of a++ is " + a++);
document.write("<br/>");
document.write("Now the value of a is " + a);
document.write("<br/>");

document.write("The value of --a is " + --a);
document.write("<br/>");
document.write("Now the value of a is " + a);
document.write("<br/>");

document.write("The value of a-- is " + a--);
document.write("<br/>");
document.write("Now the value of a is " + a);
document.write("<br/>");

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a; -> 1
// --a - --b; ->  1 - 0 = 1
// --a - --b + ++b; -> 1 - 0 + 1 = 2
// --a - --b + ++b + b--; -> 1 - 0 + 1 + 1 = 3

var a1 = 2,
  b1 = 1;
var result = --a1 - --b1 + ++b1 + b1--;
// 1 - 0 + 1 + 1 = 3
document.write("a = " + a1);
document.write("<br>b = " + b1);
document.write("<br>result = " + result);

// 3. Write a program that takes input a name from user &
// greet the user.

var num = +prompt("Enter Number");
alert("Hello ");

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

var table = +prompt("Enter Table", 5);
document.write("<h1>Table of " + table + "</h1>");
document.write(table + " X 1 = " + table * 1 + "<br>");
document.write(table + " X 2 = " + table * 2 + "<br>");
document.write(table + " X 3 = " + table * 3 + "<br>");
document.write(table + " X 4 = " + table * 4 + "<br>");
document.write(table + " X 5 = " + table * 5 + "<br>");
document.write(table + " X 6 = " + table * 6 + "<br>");
document.write(table + " X 7 = " + table * 7 + "<br>");
document.write(table + " X 8 = " + table * 8 + "<br>");
document.write(table + " X 9 = " + table * 9 + "<br>");
document.write(table + " X 10 = " + table * 10 + "<br>");

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.

// ALERTS | JAVASCRIPT

// Page 3 of 3
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

var sub1 = prompt("Enter Subject1 Name");
var sub2 = prompt("Enter Subject2 Name");
var sub3 = prompt("Enter Subject3 Name");
var total = 100; //for each subject

var marks1 = +prompt("Enter Marks1 ");
var marks2 = +prompt("Enter Marks2 ");
var marks3 = +prompt("Enter Marks3 ");

document.write("<h1>Marksheet</h1>");
document.write(
  "<h1> Subject     Total Marks   obtained Marks     Percentage</h1>"
);

document.write(
  "<p> " +
    sub1 +
    "     " +
    total +
    "   " +
    marks1 +
    "     " +
    (marks1 * 100) / total +
    "%</p>"
);
document.write(
  "<p> " +
    sub2 +
    "     " +
    total +
    "   " +
    marks2 +
    "     " +
    (marks2 * 100) / total +
    "%</p>"
);
document.write(
  "<p> " +
    sub3 +
    "     " +
    total +
    "   " +
    marks3 +
    "     " +
    (marks3 * 100) / total +
    "%</p>"
);

document.write(
  "<p><b>   " +
    (total + total + total) +
    "   " +
    (marks1 + marks2 + marks3) +
    "     " +
    ((marks1 + marks2 + marks3) * 100) / (total + total + total) +
    "%</b></p>"
);
