// Array of numbers - create an array with 5 decimal numbers
var myArray = [5.2, 7.3, 8.7, 1.1, 2.6]

// Create a function that finds the highest number
function highestNumber(array) {
    return Math.max.apply(null, array);
};
console.log(highestNumber(myArray));

// Create a function that finds the lowest number
function lowestNumber(array) {
    return Math.min.apply(null, array);
};
console.log(lowestNumber(myArray));

// Create a function that finds the number closest to 0
var goal = 0
var closest = myArray.reduce(function(prev, curr) {
    return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev)
});

console.log(closest);

// Create a function that calculates the sum
function arraySum(array) {
    return array.reduce(function(a,b) {
        return a + b;
    });
}

console.log(arraySum(myArray));

// Create a function that calculates the mean value
var average = 0
function arrayMean(array) {
    for( i = 0; i < array.length; i++) {
        average += array[i];
    }
    return average/array.length
}
console.log(arrayMean(myArray));

// Create a function that finds the index of the highest number
function locateHigh(array) {
    return array.indexOf(highestNumber(array))
}
console.log(locateHigh(myArray));

// Array of Strings

// Create an array of siblings names
var siblings = ["Tanner", "Slater"]

// Create an array of parents names
var parents = ["Rick", "Kelly"]

// Sort siblings alphabetically
function alphabet(array) {
    return array.sort();
}
console.log(alphabet(siblings));

// Sort parents reverse alphabetically
function alphabetReverse(array) {
    array.sort()
    return array.reverse()
}
 console.log(alphabetReverse(parents));
 
// Sort all names in alphabetical order 
var family = []
function alphabetFamily(array1, array2) {
    family = array1.concat(array2);
    family.sort();
    return family;
}

console.log(alphabetFamily(siblings,parents));

// Sort all family memebers in reverse
console.log(family.reverse());

// Needs work to be improved to tell you if the name isnt in that family
function checkFamily(name, array) {
    for (i=0; i < array.length; i++) {
        if (name == array[i]) {
            console.log("This family has " + name + " in it!");
            break;
        // } else {console.log("This family does not have " + name + " in it!");
        // }
    }}
}

checkFamily("Slater", family);

// Advanced Functions 

// Create a function that only returns the even elements from an array
function evenElements(array) {
    let newArray = []
    for (i = 0; i<array.length; i++) {
        // the value is multiplied by ten in order to avoid decimal issues with JS
        if (array[i]*10 % 2 === 0) {
            newArray.push(array[i])
        }
    }
    return newArray;
}

console.log(evenElements(myArray));

// Create a function that only returns the odd elements from an array
function oddElements(array) {
    let newArray = []
    for (i=0; i<array.length; i++) {
        if (array[i]*10 % 2 !==0) {
            newArray.push(array[i])
        }
    }
    return newArray;
} 

console.log(oddElements(myArray));
