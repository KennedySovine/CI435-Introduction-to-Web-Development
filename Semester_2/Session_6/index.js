function multiply(a, b) {
    return a * b;
}
console.log(multiply(345, 875)); //301875
console.log(multiply(9876.543, 765.123)); //7556770.209789

console.log(multiply(24)); //NaN
console.log(multiply(2, 3, 4)); //6

// --------

function countChar(s, c) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === c) {
            count++;
        }
    }
    return count;
}
console.log(countChar("Hello", 'l')); //2

// --------

function countStr(str, str2) {
    let index = 0;
    let count = 0;
    while (str.indexOf(str2) !== -1) {
        index = str.indexOf(str2);
        str = str.substring(index + 1);
        count++;
    }
    return count;
}
console.log(countStr("I scream, you scream, we all scream for icecream!", "cream")); //4
console.log(countStr("She sells sea shells on the sea shore. The shells that she sells are sea shells I'm sure. So if she sells sea shells on the sea shore, I'm sure that the shells are sea shore shells", "sea")); //6

// --------

function rotate(arr, num) {
    for (let i = 0; i < num; i++) {
        arr.splice(0, 0, arr.pop());
    }
    return arr;
}
console.log(rotate(["Harry", "Sarah", "Oscar", "Tina"], 2)); // ["Oscar", "Tina", "Harry", "Sarah"]

// --------

(function () {
    var arr = [12, 9, 33, 8, 71, 2, 41, 5];

    arr.sort(); //alphabetical sort
    console.log(arr); // [12, 2, 33, 41, 5, 71, 8, 9]

    arr.sort(function (a, b) {
        return a - b;
    }); //ascending numerical order
    console.log(arr); // [2, 5, 8, 9, 12, 33, 41, 71]

    arr.sort(function (a, b) {
        return b - a;
    }); //descending numerical order
    console.log(arr); //[71, 41, 33, 12, 9, 8, 5, 2]
})();