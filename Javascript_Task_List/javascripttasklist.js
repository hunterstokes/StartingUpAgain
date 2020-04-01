var my_favorite_number = 28;
console.log(my_favorite_number/2);
var someones_favorite_number = 13;
someones_favorite_number = 7;
console.log(someones_favorite_number-my_favorite_number);
console.log(my_favorite_number*26);

var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");

console.log(pos)
console.log(str.length);

function greaterNum(var1, var2) {
    if (var1 > var2) {
        console.log(var1);
        
    }
    else {
        console.log(var2);
        
    }
}

console.log(greaterNum(my_favorite_number,someones_favorite_number));

function pluralizer(num, pet) {
    if (num == 1) {
        return num + " " + pet 
    } else if (pet == "goose") {
        return num + " geese"
    } else if (pet == "sheep") {
        return num + " sheep"
    } else {
        return num + " " + pet + "s"
    }
}



console.log(pluralizer(10, "dog"));

