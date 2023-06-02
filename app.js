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


// --------------------------------------
/* Loops
    -> for loop
    -> while loop
    -> do while loop
*/

// let count = 1
// while (count <= 10) {
//     console.log(count)
//     count += 1
// }

// for (let i = 1; i <= 20; i++) {
//     console.log(i)
// }

// let str = 'Frontend Simplified'
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }


// --------------------------------------
/* Functions declaration
    -> using function keyword
    -> using arrow function
*/

// function greetPerson(name) {
//     console.log(`Welcome to Frontend Simplified, ${name}`);
// }

// greetPerson('Kishan')
// greetPerson('Varun')
// greetPerson('Muskan')

// Function returning a value

// function factorial(num) {
//     ans = 1
//     for (let i = 1; i <= num; i++) {
//         ans *= i
//     }
//     return ans
// }

// console.log(factorial(2));
// console.log(factorial(3));
// console.log(factorial(4));

// Arrow function

// const greet = (name) => {
//     console.log(`Hey! welcome to FES, ${name}`);
// }

// greet('Kishan')
// greet('Varun')
// greet('Muskan')


// --------------------------------------
/* Array and its methods */

// let arr = [20, 30, 40, 50, 100]

// arr.push method, allows you to push an element to the end of the array (same as arr.append() in python)
// console.log(arr);
// arr.push(2)
// console.log(arr);

// arr.filter uses a callback function, the syntax is very similar to the arrow function
// let newArr = arr.filter((element) => {
//     if (element < 50) {
//         return true
//     }
// })

// console.log(arr)
// console.log(newArr)

// the above code can also be written as
// let newArr = arr.filter(element => element < 50)
// console.log(newArr)


// example-1
// filter out all fail elements in an array

// arr = ['A', 'A+', 'FAIL', 'B', 'B+', 'FAIL']
// console.log(arr.filter(element => element != 'FAIL'));


// arr.map()
// convert all the array elements (represented in dollars) to cents

// arr = [1, 4, 9, 16]

// newArr = arr.map((element) => {
//     return element * 100
// })

// the above method can also be written in a single line

// newArr = arr.map(element => element * 100)
// console.log(newArr);

// converting dollars into cents without using the map method

// arr = [1, 4, 9, 16]
// newArr = []

// for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i] * 100)
// }

// console.log(newArr);