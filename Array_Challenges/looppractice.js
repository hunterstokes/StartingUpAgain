// LOOP PRACTICE

// Write a JS function that iterates from 0 to 15. For each iteration, it will check to see if the number is odd or even.
function oddOrEven() {
    for( let number = 0; number <= 15; number++) {
        if (number % 2 === 0) {
            console.log(number + " is even");
        } if (number % 2 !== 0) {
            console.log(number + " is odd");
            
        }
    }
}
// oddOrEven()

// Write a JS function that iterates from 1 to 100. For multiples of 3 print "Fizz" for multiples of 5 print "Buzz". For multiples of both 3 and 5 print "FizzBuzz"

function fizzBuzz() {
    for (let number = 1; number <= 100; number++) {
        if (number % 15 === 0) {
            console.log("FizzBuzz");
        } if (number % 3 === 0) {
            console.log("Fizz");
        }
        if (number % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(number);
            
        }
    }
}

// fizzBuzz()