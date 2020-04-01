// JAVASCRIPT ITERATION CHALLENGES 

// For to while - Rewrite the following as a while loop:
// for (var i=0; i<10; i++) {console.log(i);}
// var i=0
// while (i<10) {
//     console.log(i);
//     i++;
// }

// Re-write the following as a for loop: var a = 10; while (a > 0) { console.log(a); a = a-1;}
// for (var a = 10; a > 0; a--) {
//     console.log(a);
    
// }

// Duplicate Array - Write a Javascrip function mergeArray that merges two arrays and removes all duplicate elements
function dupArray(arr1, arr2) {
    let arr3 = arr1.concat(arr2.filter((item) => arr1.indexOf(item) < 0));
    console.log(arr3);
    
}

dupArray([1,7,4,8],[12,1,4,9]);

// Pre-fill - Write a JS function called fillArray to creat a specified number of elements with a pre-filled numeric values in an array.

function fillArray(index, value) {
    let thisArray = []
    for (i=0; i<index; i++) {
        thisArray.push(value)
    };
    console.log(thisArray);
    ;
}

fillArray(10,2)

// Clean Function - write a js function to filter false,null,0 and blank values from an array

function filterArrayValue(array) {
    
    for (i = 0; i<array.length; i++) {
        if (array[i] === 0 || array[i] === null || array[i] === false){ //still need to figure out how to remove the empty valueß
            array.splice(i)
        } 
        // console.log(array)
    }
    console.log(array);
    
}

filterArrayValue([58, '', 'abcd', true, null, false, 0])