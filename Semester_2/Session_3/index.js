console.log(1 == true); //true
console.log(1 === true); //false

// ---------

var x = 3;
var y = 5;


console.log(x <= y); //true
console.log(x > 4 && y > 4); //false
console.log(x > 4 || y > 4); //true
console.log(!(x > 4 || y >4)); //false
console.log((x !== y) && y > 0); //true
console.log((x * y) < 15); //false
console.log((x * y) <= 15); //true

x > y ? console.log("x is greater than y") : console.log("x is less than or equal to y");

if (x > y){
    console.log(x / y);
}

while (y < 100){
    console.log(y);
    y += x;
}

// ---------

for (let i = 0; i < y; i++){
    console.log("Hello " + i);
}

// ---------

var day = Math.floor(Math.random() * 7);

switch (day){
    case 0:
        console.log("Monday");
        break;
    case 1:
        console.log("Tuesday");
        break;
    case 2:
        console.log("Wednesday");
        break;
    case 3:
        console.log("Thursday");
        break;
    case 4:
        console.log("Friday");
        break;
    case 5:
        console.log("Saturday");
        break;
    case 6:
        console.log("Sunday");
        break;
}