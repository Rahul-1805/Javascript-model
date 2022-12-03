console.log('hello');
// alert('yaeee');

// this is how u write comment

/* this is a multi-line comment */

// variables

var b = 'something';
console.log(b);

var someNumber = 25;
console.log(someNumber);

document.getElementById('someText').innerHTML = 'Hello People';

// manipulate DOM with HTML
/* change of html using javascript */

//var age = prompt('Whats your age?');
//document.getElementById('someText').innerHTML = age;

// numbers in Javascript

num1 = 10;
num2 = 10;
num3 = 10;
num4 = 10;
    // increment of numeber
    num1++;
    console.log(num1);

    // increment of numeber
    num2--;
    console.log(num2);

    //divide, multiply, modulus
    console.log(num1/3);
    console.log(num2*3);
    console.log(num1%7);

    //increment/decrement by 10
    num3 +=10;
    console.log(num3);

    num4 -=9;
    console.log(num4);

/* Functions
1. Create a function
2. Call the function
*/
/*
//create
function fun(){
    alert('this ia function');
}

//call
fun();
*/
/* This create a function that take in a name and says hello followed by your name.

for example

name: Rahul
return : Hello Rahul
*/

/*function greeting(yourName){
    var result = 'Hello ' + yourName; //String Concatenation
    console.log(result);
}

var name = prompt('What is your name?');
greeting(name);

//arguments in function

function someNumbers(x, y){
    var result = x + y;
    console.log(result);
}

someNumbers(20, 25);*/

//while loops

var num = 0 

while (num < 100){
    num += 1;
    console.log(num);
}

//for loops

for (let num = 0; num < 100; num++){
    console.log(num);
}

// var = let (moslty in all cases)

//Data Types

    let yourAge = 18; //number
    let yourName = 'Rahul'; //string
    let name = {first: 'Rahul', last: 'Patil'}; //object
    let truth = false; //boolean
    let groceries = ['apple', 'banana', 'orange']; //array
    let random; //undefined
    let nothing = null; //value null

//strings in javascript

let fruit = 'banana';
let moreFruit = 'banana\napple'; //new line

    console.log(moreFruit);
    console.log(fruit.length);
    console.log(fruit.indexOf('bad'));
    console.log(fruit.slice(2, 5));
    console.log(fruit.replace('ban', '123'));
    console.log(fruit.toUpperCase());
    console.log(fruit.toLowerCase());
    console.log(fruit.charAt(0));
    console.log(fruit[2]);

    console.log(fruit.split('')); //split by characters

let fruits = 'banana,apple,orange,cheery';
    console.log(fruits.split(',')); //split by comma   
    
// Array

let moreFruits = ['banana','apple','orange','cherry'];
    console.log(moreFruits[3]); //access value at index 3rd

    moreFruits[0] = 'pineapple';
    console.log(moreFruits);

    for (let i = 0; i <moreFruits.length; i++){
        console.log(moreFruits[i]);
    }

//array common methods

    console.log('to string', moreFruits.toString()); //creates a string
    console.log(moreFruits.join(' & '));
    console.log(moreFruits.pop(), moreFruits); // removes last item
    console.log(moreFruits.push('mango'), moreFruits); //appends
    console.log(moreFruits[4]);
    moreFruits[moreFruits.length] = 'kiwi'; //same as push
    console.log(moreFruits);
    console.log(moreFruits.shift(), moreFruits); //removes first element from an array
    console.log(moreFruits.unshift('banana'), moreFruits); //add first element to an array

    let vegetables = ['tomato', 'onion', 'brinjal'];
    let allGroceries = moreFruits.concat(vegetables); //combine arrays
    console.log(allGroceries);
    console.log(allGroceries.slice(2, 6));
    console.log(allGroceries.reverse());
    console.log(allGroceries.sort()); //arranges in alphabetical order

    let intergers = [1,5,25,4,10,224,43,57,326,7,83,42];
    console.log(intergers);
    console.log(intergers.sort(function(a, b) {return a-b})); //arranges in ascending order
    console.log(intergers.sort(function(a, b) {return b-a})); //arranges in descending order
    console.log(intergers.sort()); //arranges according to first number

    let emptyArray = new Array();
    for (let num = 0; num <= 10; num++){
        emptyArray.push(num)
    }
    console.log(emptyArray);

//objects in javascript (dictionaries in python) 

let student = {
    first: 'Rahul',
    last: 'Patil',
    age: 20,
    height: 170,
    studentInfo: function(){
        return this.first + '\n' + this.last + '\n' + this.age + '\n' + this.heighthh
    }
}

console.log(student.first);
console.log(student.last);
console.log(student.age);
console.log(student.height);
student.age = 24; //change value
console.log(student.age);
student.height++;
console.log(student.height);

console.log(student.studentInfo()); //home.js:186

//conditional, control flows (if else)
/* example:
    18-35 is my target
    && = AND
    || = OR
*/    
let age = 45

if ((age >= 18) && (age <= 35)){
    status = 'target demo';
    console.log(status);
}
else{
    status = 'not my audience';
    console.log(status);
}

//switch statements
/* differentiate between weekends and weekdays
    0 --> sunday
    6 --> saturday --> weekend
    4 --> thursday --> weekday
*/
switch (1){
    case 0:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekdays';
}    
console.log(text);