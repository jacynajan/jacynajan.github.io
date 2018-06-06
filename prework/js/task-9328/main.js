var firstString = "Uwielbiam JavaScript";
var secondString = "Jestem świetnym programistą";

function func(firstString, secondString) {
    if(firstString.length > secondString.length) {
        return firstString;
    } else {
        return secondString;
    }
}

console.log(func(firstString, secondString));