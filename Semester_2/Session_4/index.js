var str = "I\'m learning JavaScript in my web development module.";

// --------

var countChar = 0;
for (var i = 0; i < str.length; i++) {
    countChar++;
}
console.log(countChar);

// --------

console.log(str.indexOf("JavaScript"));

// --------

var countE = 0;
var strE = str;
while (strE.length > 2 || (strE.indexOf("e") !== -1)) {
    strE = strE.substring(strE.indexOf("e") + 1);
    countE++;
}
console.log(countE);

// --------

for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === 'm') {
        console.log(i);
    }
}

// --------

var strRev = "";
for (var i = str.length - 1; i >= 0; i--) {
    strRev += str.charAt(i);
}
console.log(strRev);

// --------

var url = "window.location.href";
if (url.startsWith("https:")){
    console.log("Page was called up from a secure web server");
}
else if (url.startsWith("http:")){
    console.log("Page was called from a web server");
}
else if (url.startsWith("file:")){
    console.log("Page was called from the file system");
}
else {
    console.log("Page was called from an unknown source");
}