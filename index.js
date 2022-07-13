/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help if you get stuck, reach a Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux
- The solution must be pushed into your repository and be available in eduflow before the next lecture day
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

/* WRITE YOUR ANSWER HERE */

const area = function (l1, l2) {
  const area = l1 * l2;
  console.log(area);
};

area(5, 2);
/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

/* WRITE YOUR ANSWER HERE */

const crazySum = function (num1, num2) {
  const sum = num1 + num2;

  if (num1 === num2 && num2 === num1) {
    const newvalue = sum * 3;
    return newvalue;
  } else {
    return sum;
  }
};

console.log(crazySum(2, 5));
/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

/* WRITE YOUR ANSWER HERE */

let givenNumber = 19;
const crazyDiff = function (number) {
  const diff = number - givenNumber;
  if (number > givenNumber) {
    const result = diff * 3;
    return result;
  } else if (number < givenNumber) {
    return "please provide greater number";
  }
};
console.log(crazyDiff(22));
/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

/* WRITE YOUR ANSWER HERE */

const boundary = function (n) {
  console.log(n);
  if ((n >= 20 && n <= 100) || n === 400) {
    return "true";
  } else {
    return "false";
  }
};
const result = boundary(Math.trunc(Math.random() * 100) + 1);
console.log(result);

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR ANSWER HERE */

const strivify = function (str) {
  const word = "strive";
  const addWord = str.slice(0, 6);
  if (addWord === word) {
    return word;
  } else {
    return "false not matched";
  }
};
const result2 = strivify("strives school");
const result1 = strivify("sStrive");
console.log(result2);
console.log(result1);

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR ANSWER HERE */

const reverseString = function (str) {
  return str.split("").reverse().join("");
};
const output = reverseString("evirts");
console.log(output);
/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */
const arry = [];
const upperFirst = function (str) {
  const names = str.split(" ");
  for (const name of names) {
    const capitalLetter = name[0].toUpperCase() + name.slice(1);
    arry.push(capitalLetter);
    console.log(arry.join("-"));
  }
};
const result4 = upperFirst("java script is best");

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

const cutString = function (str) {
  const cut = str.slice(1, -1);
  return cut;
};
console.log(cutString("epicode"));
/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */

const giveMeRandom = function (n) {
  const array = [];
  for (let i = 0; i <= n; i++) {
    array.push(Math.floor(Math.random() * 10));
  }
  return array;
};
console.log(giveMeRandom(7));
/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
