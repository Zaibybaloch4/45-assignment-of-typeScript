//defining variable.

let apple : string = "apple";
let upperCaseApple = "APPLE";
let four : number = 4;
let five : number = 5;
let array  =['1' , '2' , '3']


//for equality and inequality with string
//test 1

console.log("is apple is equal to apple?")
console.log(apple == apple);

console.log("\n is apple is not equal to apple?")
console.log(apple != apple);

//for lower case function.
// test 2
console.log("\n is APPLE is equal to apple after converting to lowercase?")
console.log(upperCaseApple.toLowerCase() == "apple");

console.log("\n is APPLE is not equal to apple after converting to lowercase?")
console.log(upperCaseApple.toLowerCase() != "apple");

// numerical tests
// test 3
//equal to and not equal to:
console.log("\n is four is equal to five");
console.log( four == five);

console.log("\n is four is not equal to five?")
console.log(four != five);

//greater and smaller:

console.log("\n is 4 is greater than five?")
console.log(4 > five);

console.log("\n is 4 is smaller than five? ")
console.log( 4 <  five);
 
// greater than or equal to:
console.log("\n is four is greater than or equal to five?")
console.log(four >= five);

//less than or equal to:
console.log("\n is 4 is less than or equal to 5?")
console.log(4 <= 5);

//test by using and and or operator
// using &&
console.log("\n five is not equal to four and five is greater than four")
console.log(five != 4 && five > 4);

console.log("\n five is not equal to four and five is greater than six")
console.log(five != 4 && five > 6);

// or operator
console.log("\n 5 is greater than 7 or 5 is equal to 5")
console.log(5 > 7 || 5 == 5)
 
console.log("\n 5 is greater than 7 or 5 is not equal to 5")
console.log(5 > 7 || 5 != 5)

// array test
console.log("\n is 1  include in my array")
console.log(array.includes('1'))

console.log("\n is 1 is not include in my array")
console.log(array.includes ('1'));


