window.addEventListener("load", function(){

    console.log("Document loaded - ready to go...");

    // write your tutorial code here

     // --------
     
    console.log(this.document.querySelector("#elem1"));
    console.log(this.document.getElementById("elem1"));

    // --------

    var pElements = document.getElementsByTagName("p");
    for(var i = 0; i < pElements.length; i++) {
        console.log(pElements[i].textContent);
    }
    console.log(pElements.length);

    var highElements = document.getElementsByClassName("highlight");
    for (var j= 0; j < highElements.length; j++){
        console.log(highElements[j].textContent);
    }
    console.log(highElements.length);

    var liFirstElements = document.getElementById("first").getElementsByTagName("li");
    for (var i = 0; i < liFirstElements.length; i++){
        console.log(liFirstElements[i].textContent);
    }
    console.log(liFirstElements.length);

    var liHighElements = document.querySelectorAll("li.highlight");
    for (var i = 0; i < liHighElements.length; i++){
        console.log(liHighElements[i].textContent);
    }
    console.log(liHighElements.length);

    var x = this.document.querySelectorAll("li.highlight, p.highlight");
    for (var i = 0; i < x.length; i++){
        console.log(x[i].textContent);
    }
    console.log(x.length);

    // --------

    var y = document.querySelectorAll("ul > .highlight");
    console.log(y.length);

    // --------

    var t = document.querySelector("#first");
    var tChild = t.firstChild;
    console.log(tChild.nodeType + " " + tChild.nodeName + " " + tChild.textContent);

    var tSibling = t.nextSibling;
    console.log(tSibling.nodeType + " " + tSibling.nodeName + " " + tSibling.textContent);

    var tParent = t.parentNode;
    console.log(tParent.nodeType + " " + tParent.nodeName);
});
