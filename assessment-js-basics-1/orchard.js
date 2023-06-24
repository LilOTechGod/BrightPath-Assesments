///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

// const Dotw =   [M, T, W, T, F, S, S]
const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

// price per pound in cents
const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
// The best way I could think of to answer this question was to make three for loops. Each one would iterate through it's array and add the sum to the totalacres variable. holding the sum of all three arrays.
let totalAcres = 0;

for(let i=0; i<fujiAcres.length; i++) {
    totalAcres += fujiAcres[i];
}
for(let i=0; i<galaAcres.length; i++) {
    totalAcres += galaAcres[i];
}
for(let i=0; i<pinkAcres.length; i++) {
    totalAcres += pinkAcres[i];
}

console.log(totalAcres);



// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
// to find the average number of acres pricked per day I made a variable and set the value to totalacres divided by the number of days in a week
let averageDailyAcres = totalAcres / 7

console.log(averageDailyAcres);


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

// number of acres that still have apples left
let acresLeft = 174 
// how many more days of work are left
let days = 0

// CODE HERE
// I set my while loop up and added the argument within the parenthesis() and if so is true then add 1 and set days new value to that. Then subtract averagedailyacres from acresleft and run the loop into acresleft is less then 0
while (acresLeft > 0) {
    days += 1 
    acresLeft -= averageDailyAcres
}

console.log(days);

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE
// Each acre yields 6.5 tons of apples.
// My understanding of the question was to multiply each number (which is the number of acres that were picked that day) in the array by 6.5 tons of apples which is (amount of apples picked per ton). I made an empty array, built a for loop to iterate through the array and execute each number by 6.5 then added it to the empty array. I repeated the process for each empty array.
let fujiTons = [];
let galaTons = [];
let pinkTons = [];

for(let i=0; i<fujiAcres.length; i++) {
    fujiTons.push(fujiAcres[i] * 6.5);
}
for(let i=0; i<galaAcres.length; i++) {
    galaTons.push(galaAcres[i] * 6.5);
}
for(let i=0; i<pinkAcres.length; i++) {
    pinkTons.push(pinkAcres[i] * 6.5);
}

console.log(fujiTons + '\n' + galaTons + '\n' + pinkTons );


// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 
// to find out how many lb I had per tons of each variety I added the the tons per each variety using an array method then set the value of the three vaiables down below to the mathmateical equation of total tons plus lb in ton.
let lbInTon = 2000
let fujiPounds = 0;
let galaPounds = 0;
let pinkPounds = 0;

const totalFujiTons = fujiTons.reduce((a, b) => a + b )

const totalGalaTons = galaTons.reduce((a, b) => a + b )


const totalPinkTons = pinkTons.reduce((a, b) => a + b )

// console.log(totalFujiTons + '\n' + totalGalaTons + '\n' + totalPinkTons);

fujiPounds = totalFujiTons * lbInTon;
galaPounds = totalGalaTons * lbInTon;
pinkPounds = totalPinkTons * lbInTon;

console.log(fujiPounds + '\n' + galaPounds + '\n' + pinkPounds);

// PROBLEM 6
// 
/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE
// to find the profit each variety will make from the harvest I set the profit variable to the variety pound and multiplied by the price in cents per pound.
// price per pound in cents
// const fujiPrice = .89 
// const galaPrice = .64
// const pinkPrice = .55

let fujiProfit = fujiPounds * fujiPrice;
let galaProfit = galaPounds * galaPrice;
let pinkProfit = pinkPounds * pinkPrice;

console.log(fujiProfit + '\n' + galaProfit + '\n' + pinkProfit);




// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
const totalProfit = fujiProfit + (galaProfit + pinkProfit);

console.log(totalProfit);