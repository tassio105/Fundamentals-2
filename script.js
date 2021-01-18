'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
//create bug to check the utility of "use strict"
if (hasDriversLicense) console.log('I can drive');

const interface = 'Audio';
*/

// Introdution to functions
/*
function logger() {
    console.log('My name is Tassio');
}

//calling / running / invoking function
logger();

function fruitProcessor(apples, oranges) {
    //console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges}
     oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
console.log(fruitProcessor(3, 1));

const num = Number('29');
console.log(num);
*/
/*
//function declaration
function calcAge1(birthYear) {
    //const age = 2021 - birthYear;
    return 2021 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

//function expression
const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);
*/
/*
//arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Tassio'));
console.log(yearsUntilRetirement(1988, 'Priscilla'));
*/
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice made with ${applePieces} apples pieces
    and ${orangePieces} oranges pieces.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
*/
/*
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
    //return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Tassio'));
console.log(yearsUntilRetirement(1962, 'Marcos'));
*/

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/
/*
// Test data 1
const calcAverage = (a, b, c) => (a + b + c) / 3;

let avgDolphins = calcAverage(12, 22, 21); // use Let to re-asign a variable
let avgKoalas = calcAverage(9, 13, 21); //variable name don't matter since we are calling
// outside the function bellow.

function checkWinner(avgDolhins, avgKoalas) {
    if (avgDolhins >= 2 * avgKoalas) {
        console.log(`Dolphins won. Final score ${avgDolhins} vs ${avgKoalas}`);
    } else if (avgKoalas >= 2 * avgDolhins) {
        console.log(`Koalas won. Final score ${avgKoalas} vs ${avgDolhins}`);
    } else {
        console.log(`Winner must have a score 2x higher than the other team`);
    }
}
checkWinner(avgDolphins, avgKoalas);
// Test data 2
const scoreDolphins = calcAverage(31, 25, 54);
const scoreKoalas = calcAverage(10, 12, 15);
checkWinner(scoreDolphins.toFixed(0), scoreKoalas.toFixed(0));
*/

// Data Structure - Arrays 
/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter']; // Literal array syntex
console.log(friends);

const yr = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
//friends = ['Bob', 'Alice'];

const firsName = `Tassio`;
const tassio = [firsName, `Santos`, 2037 - 1991, 'Dev', friends];
console.log(tassio);

// Exercise

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];
//console.log(calcAge(years));
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/
/*
const friends = ['Michael', 'Steven', 'Peter'];
// Add elements
const newLength = friends.push('Jay'); //added one more item at the END of the Array
console.log(friends);
console.log(newLength);

friends.unshift('John'); // add an element at the Start of the Array
console.log(friends);

// Remove elements
friends.pop(); // Remove the Last element of the Array
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // Remove the FIRST element of the Array
console.log(friends);

// indexOf check for an specific array value
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
// includes check for a value or string and give a conditional statement -boolean
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}
*/

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) */
/*
//const calcTip = (bill) => bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;
function calcTip(bill) {
    if (bill <= 300 && bill >= 50) {
        bill = bill * 0.15;
    } else {
        bill = bill * 0.20;
    }
    return bill;
}

console.log(calcTip(200));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
//console.log(bills);
console.log(tips);

console.log(tips[0]); // tips related to first index of the array

const total = new Array((bills[0] + tips[0]), (bills[1] + tips[1]), (bills[bills.length - 1] + tips[tips.length - 1]));
console.log(total[1]);


// Objects

const tassio = {
    firstName: 'Tassio',
    lastName: 'Santos',
    age: 2021 - 1991,
    job: `Developer`,
    friends: ['Arthur', 'Timotio', 'Carlos']
};
console.log(tassio);

console.log(tassio.lastName);
console.log(tassio['lastName']);

const nameKey = 'Name';
console.log(tassio['first' + nameKey]);
console.log(tassio['last' + nameKey]);

const interestedIn = prompt(`What do you want to know about Tassio?
Choose between firtName, lastName, age, job and friends`);

if (tassio[interestedIn]) {
    console.log(tassio[interestedIn]);
} else {
    console.log(`Not able to access info. Please select between firtName, lastName, age, job and friends`);
}

tassio.location = 'Canada';
tassio['instagram'] = 't21santos';
console.log(tassio);
console.log(tassio[interestedIn]);

// Challenge
// "Tassio has 3 friends, and his best friend is called Timotio"

console.log(`${tassio.firstName} has ${tassio.friends.length} friends, and his best friend is called
${tassio.friends[1]}`);
*/
/*
const tassio = {
    firstName: 'Tassio',
    lastName: 'Santos',
    birthYear: 1991,
    job: `Developer`,
    friends: ['Arthur', 'Timotio', 'Carlos'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function(){
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    // challengeCourse: function (hasDriversLicense) {
    //     if (hasDriversLicense === true) {
    //         hasDriversLicense = 'a';
    //         this.challenge = console.log(`${this.firstName} ${this.lastName} is a ${this.calcAge()} ${this.job}, and he
    //     has ${hasDriversLicense} driver's license.`)
    //     } else {
    //         hasDriversLicense = 'no'
    //         this.challenge = console.log(`${this.firstName} ${this.lastName} is a ${this.calcAge()} ${this.job}, and he
    //     has ${hasDriversLicense} driver's license.`)
    //     }
    //     return this.challenge;
    // },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he has
        ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};

// console.log(tassio.calcAge()); // using "this."
// console.log(tassio.calcAge(1991)); // declaring a variable for calcAge
// console.log(tassio['calcAge'](1991)); // another way to declare a variable for calcAge
console.log(tassio.calcAge());
console.log(tassio.age);


//Challenge
// "Tassio Santos is a 46 years old Developer, and he has a drivers license."
// const firstChallenge = tassio.challengeCourse(true);
console.log(tassio.getSummary());
*/

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
*/
/*
const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 2.00,

    calcBMI: function () {
        let markBMI;
        return markBMI = this.mass / this.height ** 2;
    }

}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,

    calcBMI2: function () {
        let johnBMI;
        return johnBMI = this.mass / this.height ** 2;
    }

}

console.log(`${mark.firstName} ${mark.lastName} BMI (${mark.calcBMI().toFixed(1)}) is ${mark.calcBMI() >
    john.calcBMI2() ? 'higher' : 'lower'} than ${john.firstName} ${john.lastName} (${john.calcBMI2().toFixed(1)})`);

*/

// console.log(`Lifting weights repetition 1`)
// console.log(`Lifting weights repetition 2`)
// console.log(`Lifting weights repetition 3`)
// console.log(`Lifting weights repetition 4`)
// console.log(`Lifting weights repetition 5`)
// console.log(`Lifting weights repetition 6`)
// console.log(`Lifting weights repetition 7`)
// console.log(`Lifting weights repetition 8`)
// console.log(`Lifting weights repetition 9`)
// console.log(`Lifting weights repetition 10`)
/*
// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 20; rep++) {
    console.log(`Lifting weights repetition ${rep} 💪`); // windows key + .  to create a emoji
}
*/
/*
const tassioArrays = [
    'Tassio',
    'Santos',
    2037 - 1991,
    'developer',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];

// "i" is generally used for loops
// tassioArrays.length was used to get the whole array no matter if something changed.
for (let i = 0; i < tassioArrays.length; i++) {
    console.log(tassioArrays[i], typeof tassioArrays[i]);

    //filling types array
    // types[i] = typeof tassioArrays[i];

    // other form of adding elements to an array
    types.push(typeof tassioArrays[i]);
}

console.log(types);
// Loop through arrays
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2020 - years[i]);
}

console.log(ages);

// continue and break
console.log('---- ONLY STRINGS ----');
for (let i = 0; i < tassioArrays.length; i++) {
    if (typeof tassioArrays[i] !== 'string') continue;
    console.log(tassioArrays[i], typeof tassioArrays[i]);
}


console.log('---- BREAK WITH NUMBER ----');
for (let i = 0; i < tassioArrays.length; i++) {
    if (typeof tassioArrays[i] === 'number') break;
    console.log(tassioArrays[i], typeof tassioArrays[i]);
}
*/
/*
// Loop array BACKWORDS
const tassioArrays = [
    'Tassio',
    'Santos',
    2037 - 1991,
    'developer',
    ['Michael', 'Peter', 'Steven'],
    true
];

for (let i = tassioArrays.length - 1; i >= 0; i--) {
    console.log(i, tassioArrays[i]);
}

// LOOP inside of another LOOP

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---- Starting exercise ${exercise} ----`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repetition ${rep} 💪`)
    }
}
*/
/*
// While loop

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weight repetition ${rep} 💪`);
}

// while loop and for loop are very simmilar
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weight repetition ${rep} 💪`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`You hit a ${dice} Loop ended...`);
}
*/

// CHALLENGE 
/*
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays �
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
*/

/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const totals = [];
const tips = [];

//const calcTip = function () {

for (let i = 0; i < bills.length; i++) {
    if (bills[i] >= 50 && bills[i] <= 300) {
        tips.push(bills[i] * 0.15);
        console.log(`Tips is equal ${tips[i]}`);
    } else {
        tips.push(bills[i] * 0.20);
        console.log(`Tips is equal ${tips[i]}`);
    }
}
//return tips;
//}
for (let i = 0; i < tips.length; i++) {
    totals.push(bills[i] + tips[i]);
    console.log(`Total bill for ${bills[i]} is ${totals[i]}`);
}
*/

const calcTip = function (bill) {
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }

    return sum / arr.length;
}
console.log(calcAverage([2, 3, 6]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
