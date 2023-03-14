var friends = ["Benjamin", "Lily", "Emily", "Gabriel"];

// --------

friends.push("Isabella");
friends.push("Charlotte");
console.log(friends);

// --------

friends[friends.length - 1] = "Miles";
console.log(friends);

// --------

friends.splice(1, 2, "Aria");
console.log(friends);

// --------

friends.unshift(friends.pop());
console.log(friends);

// --------

friends.push(friends.shift());
console.log(friends);

// --------

console.log(friends.indexOf("Aria"));

// --------

friends.indexOf("Bob") !== -1 ? console.log("true") : console.log("false");

// --------

friends.sort();
console.log(friends);

// --------

var friend = friends.join(", ");
console.log(friend);

// --------

var count = 0;

for (names of friends){
    count += names.length;
}

console.log("Length of all names: " + count);
console.log("Average length of each name: " + count / friends.length)