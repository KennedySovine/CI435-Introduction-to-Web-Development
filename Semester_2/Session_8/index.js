window.addEventListener("load", init);

function init(){
    let button3 = document.querySelector("#btn3");
    button3.addEventListener("click", clicked3);

    let button4 = document.querySelector("#btn4");
    button4.addEventListener("click", clicked4);

    let button5 = document.querySelector("#btn5");
    button5.addEventListener("click", clicked5);

    let mouseDiv = document.querySelector("#div6");
    mouseDiv.addEventListener("mouseenter", mouseEnter);
    mouseDiv.addEventListener("mouseup", mouseUp);
    mouseDiv.addEventListener("mousedown", mouseDown);
    //mouseDiv.addEventListener("mousemove", mouseMove);
    mouseDiv.addEventListener("click", mouseClick);

    let anchor7 = document.querySelector("#a7");
    anchor7.addEventListener("click", anchorClick);

    let tdElements = document.querySelectorAll("td");
    tdElements.forEach(td => td.addEventListener("click", tdClick));
}

function clicked3(){
    console.log("Clicked");
}

function clicked4(){
    let p4 = document.querySelector("#p4");
    console.log(p4.textContent);
    p4.textContent = "Success";
}

function clicked5(){
    let pElements = document.getElementsByTagName("p");
    for (let i= 0; i < pElements.length; i++){
        console.log(pElements[i].textContent);
    }
}

function mouseEnter(e){
    console.log("Enter " + " " + e.layerX + " " + e.layerY);
}

function mouseUp(e){
    console.log("Mouse Up " + " " + e.layerX + " " + e.layerY);
}

function mouseDown(e){
    console.log("Mouse Down " + " " + e.layerX + " " + e.layerY);
}

/*function mouseMove(e){
    console.log("Mouse Move " + " " + e.layerX + " " + e.layerY);
}*/

function mouseClick(e){
    console.log("Mouse Click " + " " + e.layerX + " " + e.layerY);
}

function anchorClick(evt){
    console.log(this.getAttribute("href"));
    evt.preventDefault();
}

function tdClick(){
    this.textContent = "Success";
}