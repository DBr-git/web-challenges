console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// --v-- write your code here --v--
let bookTitle = "The Hunger Games";
const author = "Suzanne Collins";
let rating = 9.4;
let sales = 900000000;
// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --v-- write your code here --v--
logBookData();

rating = 9.5;
sales = 100000000;

logBookData();
// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--
function logBookData() {
  console.log("Titel: " + bookTitle);
  console.log("Author: " + author);
  console.log("Rating: " + rating);
  console.log("Sales: " + sales);
}
sales = 100000500;
logBookData();
sales = 100000800;
logBookData();
// --^-- write your code here --^--
