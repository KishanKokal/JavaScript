// console.log('Hello, World!')


// --------------------------------------
/*Data types: 
    ->String
    -> Number
    -> Boolean
    -> Undefined
    -> Null
 */


// --------------------------------------
/* Strings */
// console.log('Hello, World!'[12]);
// console.log('12345'.length);
// console.log('Hello, ' + 'Kishan');

// let str = 'Kishan';
// console.log(str[0]);
// console.log(str[str.length-1])


// --------------------------------------
/* typeof */
// console.log(typeof 123)
// console.log(typeof true)
// console.log(typeof 'Kishan')


// --------------------------------------
/* Number */
// console.log(10+5)
// console.log(10*0.5)
// console.log(10-0.5)
// console.log(5/3)
// console.log(10%3);


// --------------------------------------
/* Boolean (true or false) */


// --------------------------------------
/* Null and Undefined */
// Common Interview question
// null means the value is nothing. The developer defines this value
// undefined means the value was never set in the first place


// --------------------------------------
/* NaN */
// NaN means not a number
// console.log('kishan'/5);
// console.log(Math.sqrt(-50));


// --------------------------------------
/* Variables 
defining a variable:
    -> var (outdated)
    -> let
    -> const
*/
// let fullName = 'Kishan Kokal'
// let isRaining = true
// let temperature = 31
// let planet = 'Earth'
// console.log(fullName, isRaining);
// console.log('Our planet is', planet, 'and temperature is', temperature);


// --------------------------------------
/* Problem-1: Convert celsius to fahrenheit */

// let celcius = 10
// let fahrenheit = celsius * 1.8 + 32
// console.log(fahrenheit)


// --------------------------------------
/* Equality check
    -> == (double-equals)
    -> === (triple-equals, also checks if the types match)
    -> != (not equal to)
    -> !== (not double-equalt to, also checks if the types don't match)
*/

// Double equals only checks the values
// Triple equals not only checks the values but also the types
// Note: You must almost always use Triple-equals because it adds an extra layer of type checking

// e.g.
// let val = '1'
// console.log(1==val)
// output: true 

// e.g.
// let val = '1'
// console.log(1===val);
// output: false


// --------------------------------------
/* Conditionals */

// example-1
// let subscribed = true
// let loggedIn = true

// if (subscribed && loggedIn) {
//     console.log('Show the video')
// }
// else if (loggedIn) {
//     console.log('Tell user to upgrade their subscription');
// }
// else {
//     console.log('Tell user to log into account');
// }

// example-2
// let cash = 30
// let price = 40

// if (cash > price) {
//     console.log(`You paid extra - here\'s your ${cash - price} dollars change`);
// }
// else if (cash === price) {
//     console.log('You paid the exact amount, have a nice day!');
// }
// else {
//     console.log(`Not enough money - you still owe ${price - cash} dollars`);
// }


// --------------------------------------
/* Logical operators */
// true && true -> true
// true && false -> false
// false && true -> false
// false && false -> false


// --------------------------------------
/* Falsy values */
// A falsy value is considered as 'false' when converted to a boolean
// falsy values:
//     -> undefined
//     -> null
//     -> NaN
//     -> 0
//     -> ""
//     -> false


// --------------------------------------
/* Truthy values */
// A truthy value is considered as 'true' when converted to a boolean
// Truthy values:
//     -> 10
//     -> 3.14
//     -> "Frontend Simplified"
//     -> "false"
//     -> "0"
//     -> []
//     -> {}

// example-1
// if ("false") {
//     console.log('print the receipt');
// }
// output:
// print the receipt

// example-2
// let val = ""
// if (val) {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// --------------------------------------
/* Ternary opreator */
// A short hand for if else statements

// example-1
// let hot = true
// hot ? console.log('weather is hot outside') : console.log('weather is cold outside');