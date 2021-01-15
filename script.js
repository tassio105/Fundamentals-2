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