// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// var num1 = +prompt("Enter First Number: ");
// var num2 = +prompt("Enter Second Number: ");

// var result = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + result);

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

// result = num1 - num2;
// document.write("Subtraction of " + num1 + " and " + num2 + " is " + result);

// result = num1 * num2;
// document.write("Multiplication of " + num1 + " and " + num2 + " is " + result);

// result = num1 / num2;
// document.write("Division of " + num1 + " and " + num2 + " is " + result);

// result = num1 % num2;
// document.write("Modulus of " + num1 + " and " + num2 + " is " + result);

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.

// var a;

// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.

// document.write("Value after variable declaration is " + a);

// c. Initialize the variable with some number.

// a = 34;
// d. Show the value of variable in your browser like “Initial
// value: 5”.

// document.write("Initial Value: " + a);
// e. Increment the variable.

// a++;

// f. Show the value of variable in your browser like “Value
// after increment is: 6”.

// document.write("Value after increment is:" + a);

// g. Add 7 to the variable.

// a = a + 7;

// h. Show the value of variable in your browser like “Value
// after addition is: 13”.

// document.write("Value after addition is:" + a);

// i. Decrement the variable.

// a--;

// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.

// document.write("Value after decrement is:" + a);
// k. Show the remainder after dividing the variable’s value
// by 3.
// a = a % 3;

// l. Output : “The remainder is : 0”.

// document.write("The remainder is : " + a);

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

// var ticketCost = 600;
// var noOfTicets = +prompt("Enter Number Of Tickets ");
// document.write(
//   "Total cost to buy " +
//     noOfTicets +
//     " tickets to a movie is " +
//     ticketCost * noOfTicets
// );

// 5. Write a script to display multiplication table of any
// number in your browser. E.g

// var table = +prompt("Enter Table Number", 5);
// document.write("<h2>Table of " + table + "</h2>");
// document.write(table + "x 1 = " + table * 1 + "<br/>");
// document.write(table + "x 2 = " + table * 2 + "<br/>");
// document.write(table + "x 3 = " + table * 3 + "<br/>");
// document.write(table + "x 4 = " + table * 4 + "<br/>");
// document.write(table + "x 5 = " + table * 5 + "<br/>");
// document.write(table + "x 6 = " + table * 6 + "<br/>");
// document.write(table + "x 7 = " + table * 7 + "<br/>");
// document.write(table + "x 8 = " + table * 8 + "<br/>");
// document.write(table + "x 9 = " + table * 9 + "<br/>");
// document.write(table + "x 10 = " + table * 10 + "<br/>");

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.

// a. Store a Celsius temperature into a variable.
// var celcius = +prompt("Enter Celcius");

// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// var farenheits = (celcius * 9) / 5 + 32;

// c. Now store a Fahrenheit temperature into a variable.
// var farenheits1 = +prompt("Enter Farenheis");

// d. Convert it to Celsius & output “NNoF is NNoC”.
// var celcius = ((farenheits1 - 32) * 5) / 9;

// Conversion Formulae:

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables

// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Compute the total cost & show the receipt in your browser.

document.write("<h1>Shopping Cart</h1>");

var item1 = 1600;
var item2 = 1600;

var quantity1 = 3;
var quantity2 = 7;
var shippingCharges = 100;

document.write("Price of Item 1 is " + item1);
document.write("<br>");
document.write("Quantity of Item 1 is " + quantity1);
document.write("<br>");
document.write("Price of Item 2 is " + item2);
document.write("<br>");
document.write("Quantity of Item 2 is " + quantity2);
document.write("<br>");
document.write("Shipping Charges " + shippingCharges);
document.write("<br>");
var total = item1 * quantity1 + item2 * quantity2 + shippingCharges;
document.write("Total Cost of Your order is " + total);

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

var totalMarks = 500;
var obtain = 230;

var percentage = (obtain * 100) / totalMarks;
document.write("<h1>Marksheet</h1>");
document.write("Total Marks " + totalMarks);
document.write("<br>");
document.write("Obtained Marks " + obtain);
document.write("<br>");
document.write("Percentage " + percentage + "%");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

var noOfDollar = 10;
var noOfRiyal = 25;
var rupeeValue = noOfDollar * 104.8 + noOfRiyal * 28;

document.write("<h1>Currency in PKR</h1>");
document.write("Total Currency in Pkr " + rupeeValue);

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// Output them to the screen like so: “They are either NN or NN
// years old”.

var num = 5;
num = ((num + 5) * 10) / 2;
console.log(num);

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

document.write("<h1>Age Calculator</h1>");

var currentYear = 2023;

var yourBirthYear = +prompt("Enter Your Birth");

var age = currentYear - yourBirthYear;

document.write("Your age is " + age);

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.

// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

document.write("<h1>The Geometrizer</h1>");
var radius = 25;
var pi = 3.142;
var circumferrence = 2 * pi * radius;
document.write("The circumference is " + circumferrence);

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

document.write("<h1>The Lifetime Supply Calculator</h1>");

var favSnack = prompt("Favourite Snack");
var currentAge = +prompt("Enter Age");
var maxAge = +prompt("Enter Maximum Age");
var estimated = +prompt("Enter Estimated Amount");
var calc = (maxAge - currentAge) * estimated;

document.write("Favourite Snack " + favSnack);
document.write("<br>");
document.write("Current age " + currentAge);
document.write("<br>");
document.write("Estimated Maximum age " + maxAge);
document.write("<br>");
document.write("Amount of Snack per day " + estimated);
document.write("<br>");
document.write(
  "You will need " +
    calc +
    " packs of " +
    favSnack +
    " to last you until the ripe old age of " +
    maxAge
);
