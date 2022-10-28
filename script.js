 "use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');

// FUNCTION 
// ===== function declaration ====== 
function logger() {
    console.log("My name is Alexander");
}
// calling / running / invoking a function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    
    const kindOfJuice = "100%";
    const numberOfBottles = 2
    const juice = ` I have ${numberOfBottles} ${kindOfJuice} bottles of Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 3);
console.log(appleJuice);

const appleOrange = fruitProcessor(2, 8);
console.log(appleOrange);

const num = Number("45");

// ======= function declaration vs expression =====
//  ==== function declaration ===== 
// const age1 = calculateAge1(1983); you can call a function declaration before assigning it

function calculateAge1(birthYear) {
    return 2022 - birthYear;
}

const age1 = calculateAge1(1983);


// ==== function expression ==== 
const calculateAge2 = function (birthYear) {
    return 2022 - birthYear;
}

const age2 = calculateAge2(1983);

console.log(age1, age2);

// ===== arrow function ==== 
const calculateAge3 = birthYear => 2022 - birthYear;
const age3 = calculateAge3(1983);
console.log(age3);

const yearsUntilRetire =( birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 75 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetire(1983, "Alexander"));
console.log(yearsUntilRetire(1990, "JIM"));
