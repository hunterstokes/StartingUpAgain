// exercise 1 - add "granola" to the end of the array
var groceryList1 = ["apples", "carrots", "oatmeal"];
groceryList1.push("granola");
console.log(groceryList1);

// exercise 2 - add "soda" to the end of the array
var groceryList2 = ["chips", "dip", "cookies"];
groceryList2.push("soda");
console.log(groceryList2);

// exercise 3 - add 0 to the beginning of the array
var numbers1 = [1, 2, 3, 4, 5];
numbers1.unshift(0);
console.log(numbers1);

// exercise 4 - add 0 to the beginning of the array
var numbers2 = [2, 4, 6, 8, 10];
numbers2.unshift(0);
console.log(numbers2);

// exercise 5 - find the first instance of 2 in the array
var numbers3 = [2, 13, 6, 8, 4, 2]
numbers3.indexOf(2)
console.log(numbers3.indexOf(2));

//exercise 6  - find the last instance of 2 in the array
numbers3.lastIndexOf(2);
console.log(numbers3.lastIndexOf(2));

//exercise 7 - bring all the letters in the array into a string
var chars = ["y", "a", "r", "r", "a"]
console.log(chars.toString());
console.log(chars.join(""));

//exercise 8 - reverse the order of the array and save in new var
var charsReversed = chars.reverse()
console.log(charsReversed);
console.log(charsReversed.join(""));