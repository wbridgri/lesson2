// Arrays  => storage container that holds  multiple pieces of data

/* 

Syntax

let arrName = [item1, item2, item3, ..., itemN];

Each item in an array is given an index value

items are zero-indexed

*/

let coder = 'Trelin';

let coders = ['Trelin', 'Josh', 'Connor', 'Charlie', 'Zeek', 'Janjala', 'Will', 'Chloe', 'Favor', 'Renee', 'Clint', 'Christopher', 'Darius', 'Lachelle'];

console.log(coders);


const josh = coders[1];

console.log(josh);

var seven = 7;

console.log(coders[seven]);

console.log(coders['7']);

console.log(coders['seven']);

// TYPE COERCION

console.log(1 + 1);
console.log( '1' + '1') //'11
console.log('1+1') //'1+1'
console.log(1 + '1')  // '11'

console.log (2 * 2) //4
console.log( '2' * '2');
console.log (2 * '2');

console.log('foo' * 'boo');

console.log(coders[coders.length -1]);

coders[9] = 'Renee';

console.log(coders);

/* 

Build a  random menu

Write a program that will randomize an appetizer, entree, dessert, and drink.

Return the menu as a string


*/

let apps = ['wings', 'moz sticks', 'fried mushrooms', 'fried pickles', 'chips and queso'];
let entrees = ['burger', 'chicken sandwich', 'chicken wrap', 'salad', 'philly cheesesteak'];
let desserts = ['spice cake', 'chocolate cake', 'pudding', 'tiramisu', 'cheesecake'];
let drinks = ['coke', 'sprite', 'water', 'sweet tea', 'unsweet tea'];

//Math.random

// console.log(Math.random() * 10 );

//Math.floor

console.log(Math.floor(Math.random() * 5));

var random1 = Math.floor(Math.random() * 5);
var random2 =  Math.floor(Math.random() * 5);
var random3 = Math.floor(Math.random() * 5);
var random4 = Math.floor(Math.random() * 5);

console.log('You will have ' + apps[random1], ', ' + entrees[random2], ', ' + desserts[random3], ', and ' + drinks[random4]);


//Coaches solution
let app = apps[Math.floor(Math.random() * apps.length)];
let entree = entrees[Math.floor(Math.random() * entrees.length)];
let dessert = desserts[Math.floor(Math.random() * desserts.length)];
drinks.push('smoothie');
let drink = drinks[Math.floor(Math.random() * drinks.length)];

console.clear();
// let message = `For your meal, you will have a ${app}, ${entree}, ${dessert}, ${drink} Your total is ${(apps.length + entrees.length + desserts.length + drinks.length) / 4}`;
// console.log(message);
console.log('You will have ' + app + ', ' + entree + ', ' + dessert + ', and ' + drink);

/*
add an item to an array
.push adds an item to the end of the array
*/

// drinks.push('smoothie');
// console.log(drinks);

//.pop() => removes the last item in an array

// drinks.pop()
// console.log(drinks)

//.unshift() => adds an item to the beginning of an array
// drinks.unshift('smoothie');
// console.log(drinks)
// .shitft() => removes the first item in an array

// drinks.shift();
console.log(drinks);

console.clear();

//Insult Generator

// let nouns = ['I', 'You', 'We' , 'They'];
// let adjectives1 = ['freaking', 'flipping', 'heckin', 'bloody']
// let verbs = ['suck', 'blow', 'die', 'kick rocks'];
// let adjectives2 = ['bad', 'hard', 'softly', 'a lot'];

// let noun = nouns[Math.floor(Math.random() * nouns.length)];
// let adjective1 = adjectives1[Math.floor(Math.random() * adjectives1.length)];
// let verb = verbs[Math.floor(Math.random() * verbs.length)];
// let adjective2 = adjectives2[Math.floor(Math.random() * adjectives2.length)];
 
// let message = `${noun} ${adjective1} ${verb} ${adjective2}`;
// console.log(message);



//Gramatical Sentence Generator

let nouns = ['I', 'You', 'We', 'They', 'S/he' , 'It'];
let verbs = [['live' , 'lives'], ['laugh', 'laughs'], ['love', 'loves']];

let  noun = nouns[Math.floor(Math.random() * nouns.length)];
let verb = verbs [Math.floor(Math.random() * verbs.length)];

let myVerb
let message

// message = `${noun} ${verb}`;

if(noun == 'S/he' || noun == 'It'){
    myVerb = verb[1]
    message = `${noun} ${myVerb}`;
    console.log(message);
}
else {
    myVerb = verb[0];
    message = `${noun} ${myVerb}`;
    console.log(message);
}









